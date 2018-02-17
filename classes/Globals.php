<?php
/**
* Globals class for working with 'globals' variables 
* @author Автор: ViStep.RU
* @version 1.0
* @copyright: ViStep.RU (admin@vistep.ru)
*/

class Globals {

    static private $instance = null;
    //массив с CALL_ID из битрикса, ключ - Uniqueid из asterisk
    public $calls = [];
	//массив с uniqueid внешних звонкнов
    public $uniqueids = [];
	//массив FullFname (url'ы записей разговоров), ключ - Uniqueid из asterisk
    public $FullFnameUrls = [];
	//массив внутренних номеров, ключ - Uniqueid из asterisk
	public $intNums = [];
	//массив duration звонков, ключ - Uniqueid из asterisk
    public $Durations = [];
	//массив disposition звонков, ключ - Uniqueid из asterisk
    public $Dispositions = [];
    //массив extensions - внешние номера, звонки на которые мы отслеживаем
    public $extensions = [];

    static public function getInstance(){
		if (null === self::$instance) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	private function __construct() {}
	private function __clone() {}
	private function __wakeup() {}

}