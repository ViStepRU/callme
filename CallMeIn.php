<?php
/**
* CallMe events listener for incoming calls
* @author Автор: ViStep.RU
* @version 1.0
* @copyright: ViStep.RU (admin@vistep.ru)
*/

// проверка на запуск из браузера
(PHP_SAPI !== 'cli' || isset($_SERVER['HTTP_USER_AGENT'])) && die('access error');

require __DIR__ . '/vendor/autoload.php';

/*
* start: for events listener
*/
use PAMI\Listener\IEventListener;
use PAMI\Message\Event\EventMessage;
use PAMI\Message\Event;
use PAMI\Message\Event\DialBeginEvent;
use PAMI\Message\Event\DialEndEvent;
use PAMI\Message\Event\NewchannelEvent;
use PAMI\Message\Event\VarSetEvent;
use PAMI\Message\Event\HangupEvent;
use PAMI\Message\Action\ActionMessage;
use PAMI\Message\Action\SetVarAction;
/*
* end: for events listener
*/

$helper = new HelperFuncs();
$callami = new CallAMI();

//объект с глобальными массивами
$globalsObj = Globals::getInstance();

//массив внешних номеров
$globalsObj->extentions = $helper->getConfig('extentions');

//создаем экземпляр класса PAMI
$pamiClient = $callami->NewPAMIClient();
$pamiClient->open();

//обрабатываем NewchannelEvent события
$pamiClient->registerEventListener(
            function (EventMessage $event) use ($helper,$callami,$globalsObj){
                //выгребаем параметры звонка
                $callUniqueid = $event->getUniqueid();
                $extNum = $event->getCallerIDNum();
                $CallChannel = $event->getChannel();
                
                //добавляем звонок в массив, для обработки в других ивентах
                $globalsObj->uniqueids[] = $callUniqueid;
                
                //берем Exten из ивента
                $extention = $event->getExtension();

                //логируем параметры звонка
                $helper->writeToLog(array('extNum'=>$extNum,
                                        'callUniqueid'=>$callUniqueid,
                                        'Exten'=>$extention),
                                    'New NewchannelEvent call');

                //выбираем из битрикса полное имя контакта по номеру телефона и логируем
                $CallMeCallerIDName = $helper->getCrmContactNameByExtNum($extNum);
                $helper->writeToLog(array('CallMeCallerIDName'=>$CallMeCallerIDName,),
                                    'Contact name by extNum');     
                                               
                // выставим CallerID 
                $newpami = new SetVarAction('CallMeCallerIDName', $CallMeCallerIDName, $CallChannel); 
                $helper->writeToLog(array('Channel'=>$CallChannel),
                                'Trying to set CallMeCallerIDName');
                $pamiClient = $callami->NewPAMIClient();
                $pamiClient->open();
                $resultFromB24 = $pamiClient->send($newpami);
                $helper->writeToLog(array('resultFromB24'=>$resultFromB24),
                                'Trying to set CallMeCallerIDName second step');
                $pamiClient->close(); 

            },function (EventMessage $event) use ($globalsObj){
                    //для фильтра берем только указанные внешние номера
                    return
                        $event instanceof NewchannelEvent
                        //проверяем на вхождение в массив
                        && in_array($event->getExtension(), $globalsObj->extentions);
                }
        );

//обрабатываем VarSetEvent события, получаем url записи звонка
$pamiClient->registerEventListener(
            function (EventMessage $event) use ($helper,$globalsObj) {
                $callUniqueid = $event->getUniqueID();

                if(preg_match('/^http.+$/',$event->getValue())) $globalsObj->FullFnameUrls[$callUniqueid] = $event->getValue();
                if(preg_match('/^\d+$/',$event->getValue())) $globalsObj->Durations[$callUniqueid] = $event->getValue();
                if(preg_match('/^[A-Z\ ]+$/',$event->getValue())) $globalsObj->Dispositions[$callUniqueid] = $event->getValue(); 
                        
                //логируем параметры звонка
                $helper->writeToLog(array('FullFnameUrls'=>$globalsObj->FullFnameUrls,
                                    'Durations'=>$globalsObj->Durations,
                                    'Dispositions'=>$globalsObj->Dispositions),
                                    'New VarSetEvent - get FullFname,CallMeDURATION,CallMeDISPOSITION');
            },function (EventMessage $event) use ($globalsObj) {
                    return
                        $event instanceof VarSetEvent
                        //проверяем что это именно нужная нам переменная 
                        && ($event->getVariableName() === 'FullFname' 
                        || $event->getVariableName()  === 'CallMeDURATION'
                        || $event->getVariableName()  === 'CallMeDISPOSITION')
                        //проверяем на вхождение в массив
                        && in_array($event->getUniqueID(), $globalsObj->uniqueids);
                }
        );

//обрабатываем DialBeginEvent события
$pamiClient->registerEventListener(
            function (EventMessage $event) use ($helper,$globalsObj) {
                //выгребаем параметры звонка
                $callUniqueid = $event->getUniqueid();
                $intNum = $event->getDestCallerIDNum();
                $extNum = $event->getCallerIDNum();
                $CallChannel = $event->getChannel();

                //регистриуем звонок в битриксе
                $globalsObj->calls[$callUniqueid] = $helper->runInputCall($intNum,$extNum);
                
                //показываем карточку пользователю
                $helper->showInputCall($intNum, $globalsObj->calls[$callUniqueid]);

                $helper->writeToLog(array('intNum'=>$intNum,
                                            'extNum'=>$extNum,
                                            'callUniqueid'=>$callUniqueid,
                                            'CALL_ID'=>$globalsObj->calls[$callUniqueid]),
                                        'New incoming call');
            },function (EventMessage $event) use ($globalsObj) {
                    //для фильтра по uniqueid
                    return
                        $event instanceof DialBeginEvent
                        //проверяем входит ли событие в массив с uniqueid внешних звоноков
                        && in_array($event->getUniqueid(), $globalsObj->uniqueids);
                }
        );

//обрабатываем DialEndEvent события
$pamiClient->registerEventListener(
            function (EventMessage $event) use ($helper,$globalsObj) {
                //выгребаем параметры звонка
                $callUniqueid = $event->getUniqueid();

                $globalsObj->intNums[$callUniqueid] = $event->getDestCallerIDNum();
                $extNum = $event->getCallerIDNum();

                switch ($event->getDialStatus()) {
                    case 'ANSWER': //кто-то отвечает на звонок
                        $helper->writeToLog(array('intNum'=>$globalsObj->intNums[$callUniqueid],
                                                    'extNum'=>$extNum,
                                                    'callUniqueid'=>$callUniqueid,
                                                    'CALL_ID'=>$globalsObj->calls[$callUniqueid]),
                                                'incoming call ANSWER');
                        //для всех, кроме отвечающего, скрываем карточку
                        $helper->hideInputCallExcept($globalsObj->intNums[$callUniqueid], $globalsObj->calls[$callUniqueid]);
                        break;
                    case 'BUSY': //занято
                        $helper->writeToLog(array('intNum'=>$globalsObj->intNums[$callUniqueid],
                                                    'extNum'=>$extNum,
                                                    'callUniqueid'=>$callUniqueid,
                                                    'CALL_ID'=>$globalsObj->calls[$callUniqueid]),
                                                'incoming call BUSY');
                        //скрываем карточку для юзера
                        $helper->hideInputCall($globalsObj->intNums[$callUniqueid], $globalsObj->calls[$callUniqueid]);
                        break;
                    case 'CANCEL': //звонивший бросил трубку
                        $helper->writeToLog(array('intNum'=>$globalsObj->intNums[$callUniqueid],
                                                    'extNum'=>$extNum,
                                                    'callUniqueid'=>$callUniqueid,
                                                    'CALL_ID'=>$globalsObj->calls[$callUniqueid]),
                                                'incoming call CANCEL');
                        //скрываем карточку для юзера
                        $helper->hideInputCall($globalsObj->intNums[$callUniqueid], $globalsObj->calls[$callUniqueid]);
                        break;            
                    default:
                        break;
                }
            },
            function (EventMessage $event) use ($globalsObj) {
                    //для фильтра по uniqueid
                    return
                        $event instanceof DialEndEvent
                        //проверяем входит ли событие в массив с uniqueid внешних звонков
                        && in_array($event->getUniqueid(), $globalsObj->uniqueids);
                }
        );

//обрабатываем HangupEvent события, отдаем информацию о звонке и url его записи в битрикс
$pamiClient->registerEventListener(
            function (EventMessage $event) use ($helper,$globalsObj) {
                $callUniqueid = $event->getUniqueID();
                $FullFname = $globalsObj->FullFnameUrls[$callUniqueid];
                $CallDuration = $globalsObj->Durations[$callUniqueid];
                $CallDisposition = $globalsObj->Dispositions[$callUniqueid];
                $call_id = $globalsObj->calls[$callUniqueid];
                $CallIntNum = $globalsObj->intNums[$callUniqueid];

                // логируем $callUniqueid, $FullFnameUrls, $calls, $Durations, $Dispositions
                $helper->writeToLog(array($callUniqueid,$globalsObj->FullFnameUrls,$globalsObj->calls,$globalsObj->Durations,$globalsObj->Dispositions),
                    'New HangupEvent Zero step - params');
                // логируем то, что мы собрались отдать битриксу
                $helper->writeToLog(
                    array('FullFname'=>$FullFname,
                          'call_id'=>$call_id,
                          'intNum'=>$CallIntNum,
                          'Duration'=>$CallDuration,
                          'Disposition'=>$CallDisposition),
                    'New HangupEvent First step - recording filename URL, intNum, Duration, Disposition');

                $resultFromB24 = $helper->uploadRecordedFile($call_id,$FullFname,$CallIntNum,$CallDuration,$CallDisposition); 
                //логируем, что нам рассказал битрикс в ответ на наш реквест
                $helper->writeToLog($resultFromB24,'New HangupEvent Second Step - upload filename');

                // удаляем из массивов тот вызов, который завершился
                $helper->removeItemFromArray($globalsObj->uniqueids,$callUniqueid,'value');
                $helper->removeItemFromArray($globalsObj->intNums,$callUniqueid,'key');
                $helper->removeItemFromArray($globalsObj->FullFnameUrls,$callUniqueid,'key');
                $helper->removeItemFromArray($globalsObj->Durations,$callUniqueid,'key');
                $helper->removeItemFromArray($globalsObj->Dispositions,$callUniqueid,'key');
                $helper->removeItemFromArray($globalsObj->calls,$callUniqueid,'key');

            },function (EventMessage $event) use ($globalsObj) {
                    return
                        $event instanceof HangupEvent
                        //проверяем на вхождение в массив
                        && in_array($event->getUniqueID(), $globalsObj->uniqueids);
                }
        );

while(true) {
    $pamiClient->process();
    usleep($helper->getConfig('listener_timeout'));
}
$pamiClient->ClosePAMIClient($pamiClient);