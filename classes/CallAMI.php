<?php
/**
* Class for working with PAMI  
* @author Автор: ViStep.RU
* @version 1.0
* @copyright: ViStep.RU (admin@vistep.ru)
**/

use PAMI\Client\Impl\ClientImpl as PamiClient;
/*
* start: for events listener
*/
use PAMI\Listener\IEventListener;
use PAMI\Message\Event\EventMessage;
use PAMI\Message\Event;
use PAMI\Message\Event\DialBeginEvent;
use PAMI\Message\Event\DialEndEvent;
/*
* end: for events listener
*/
use PAMI\Message\Action\ListCommandsAction;
use PAMI\Message\Action\ListCategoriesAction;
use PAMI\Message\Action\CoreShowChannelsAction;
use PAMI\Message\Action\CoreSettingsAction;
use PAMI\Message\Action\CoreStatusAction;
use PAMI\Message\Action\StatusAction;
use PAMI\Message\Action\ReloadAction;
use PAMI\Message\Action\CommandAction;
use PAMI\Message\Action\HangupAction;
use PAMI\Message\Action\LogoffAction;
use PAMI\Message\Action\AbsoluteTimeoutAction;
use PAMI\Message\Action\OriginateAction;
use PAMI\Message\Action\BridgeAction;
use PAMI\Message\Action\CreateConfigAction;
use PAMI\Message\Action\GetConfigAction;
use PAMI\Message\Action\GetConfigJSONAction;
use PAMI\Message\Action\AttendedTransferAction;
use PAMI\Message\Action\RedirectAction;
use PAMI\Message\Action\DAHDIShowChannelsAction;
use PAMI\Message\Action\DAHDIHangupAction;
use PAMI\Message\Action\DAHDIRestartAction;
use PAMI\Message\Action\DAHDIDialOffHookAction;
use PAMI\Message\Action\DAHDIDNDOnAction;
use PAMI\Message\Action\DAHDIDNDOffAction;
use PAMI\Message\Action\AgentsAction;
use PAMI\Message\Action\AgentLogoffAction;
use PAMI\Message\Action\MailboxStatusAction;
use PAMI\Message\Action\MailboxCountAction;
use PAMI\Message\Action\VoicemailUsersListAction;
use PAMI\Message\Action\PlayDTMFAction;
use PAMI\Message\Action\DBGetAction;
use PAMI\Message\Action\DBPutAction;
use PAMI\Message\Action\DBDelAction;
use PAMI\Message\Action\DBDelTreeAction;
use PAMI\Message\Action\GetVarAction;
use PAMI\Message\Action\SetVarAction;
use PAMI\Message\Action\PingAction;
use PAMI\Message\Action\ParkedCallsAction;
use PAMI\Message\Action\SIPQualifyPeerAction;
use PAMI\Message\Action\SIPShowPeerAction;
use PAMI\Message\Action\SIPPeersAction;
use PAMI\Message\Action\SIPShowRegistryAction;
use PAMI\Message\Action\SIPNotifyAction;
use PAMI\Message\Action\QueuesAction;
use PAMI\Message\Action\QueueStatusAction;
use PAMI\Message\Action\QueueSummaryAction;
use PAMI\Message\Action\QueuePauseAction;
use PAMI\Message\Action\QueueRemoveAction;
use PAMI\Message\Action\QueueUnpauseAction;
use PAMI\Message\Action\QueueLogAction;
use PAMI\Message\Action\QueuePenaltyAction;
use PAMI\Message\Action\QueueReloadAction;
use PAMI\Message\Action\QueueResetAction;
use PAMI\Message\Action\QueueRuleAction;
use PAMI\Message\Action\MonitorAction;
use PAMI\Message\Action\PauseMonitorAction;
use PAMI\Message\Action\UnpauseMonitorAction;
use PAMI\Message\Action\StopMonitorAction;
use PAMI\Message\Action\ExtensionStateAction;
use PAMI\Message\Action\JabberSendAction;
use PAMI\Message\Action\LocalOptimizeAwayAction;
use PAMI\Message\Action\ModuleCheckAction;
use PAMI\Message\Action\ModuleLoadAction;
use PAMI\Message\Action\ModuleUnloadAction;
use PAMI\Message\Action\ModuleReloadAction;
use PAMI\Message\Action\ShowDialPlanAction;
use PAMI\Message\Action\ParkAction;
use PAMI\Message\Action\MeetmeListAction;
use PAMI\Message\Action\MeetmeMuteAction;
use PAMI\Message\Action\MeetmeUnmuteAction;
use PAMI\Message\Action\EventsAction;
use PAMI\Message\Action\VGMSMSTxAction;
use PAMI\Message\Action\DongleSendSMSAction;
use PAMI\Message\Action\DongleShowDevicesAction;
use PAMI\Message\Action\DongleReloadAction;
use PAMI\Message\Action\DongleStartAction;
use PAMI\Message\Action\DongleRestartAction;
use PAMI\Message\Action\DongleStopAction;
use PAMI\Message\Action\DongleResetAction;
use PAMI\Message\Action\DongleSendUSSDAction;
use PAMI\Message\Action\DongleSendPDUAction;

class CallAMI {

	private $conf;

	//set asterisk connection configuration
	function __construct() {
        $config = require(__DIR__.'/../config.php');
		if (is_array($config)){
			$this->conf = $config['asterisk'];
		} else $this->conf = false;
    }

	/**
	 * Originate call
	 *
	 * @param string $intNum 
	 * @param string $CalledNumber 
	 * @param string $tech - SIP/PJSIP etc
	 * @param string $CallId - from bitrix
	 *
	 * @return mixed 
	 */
	public function OriginateCall($intNum, $CalledNumber, $tech, $CallId, $context){
		$pamiClientOptions = $this->conf;
		if (!$pamiClientOptions) return false;
	    $pamiClient = new PamiClient($pamiClientOptions);
		$originateMsg = new OriginateAction($tech.'/'.$intNum);
		$originateMsg->setContext($context);
		$originateMsg->setPriority('1');
		$originateMsg->setExtension($CalledNumber);
		$originateMsg->setAsync('true');
		$originateMsg->setCallerId('CallMe');
		//переменная с callid из битрикса
		$originateMsg->setVariable('CallMeCALL_ID', $CallId);
		$pamiClient->open();
	    $result = $pamiClient->send($originateMsg);
	    $pamiClient->close();
	    return $result;
	}

	/**
	 * Create new PamiClient 
	 *
	 * @return PamiClient
	 */
	public function NewPAMIClient(){
		$pamiClientOptions = $this->conf;
		if (!$pamiClientOptions) return false;
	    $pamiClient = new PamiClient($pamiClientOptions);
	    return $pamiClient;
	}

	/**
	 * Close PAMI client connection
	 *
	 * @param PamiClient $pamiClient
	 *
	 * @return mixed
	 */
	public function ClosePAMIClient($pamiClient){
	    return $pamiClient->close();
	}
}