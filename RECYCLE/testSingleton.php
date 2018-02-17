<?php


class HelperFuncs {
	public $variable;
}




class MySingleton {
	
	static private $instance = null;
	public $var;
	private $conf = [];
	private $PamiOptions = [];

	static public function getInstance(){
		if (null === self::$instance) {
			self::$instance = new self();
		}
		return self::$instance;
	}
	
	private function __construct() {}
	private function __clone() {}
	private function __wakeup() {}

	public function setVar($var){
		$this->var = $var;
	}

	public function getConfig($key) {
        $config = require(__DIR__.'/../config.php');
		if (is_array($config)){
			return $config[$key];
		} else return false;
	}

	public function getPamiOptions() {
        $config = require(__DIR__.'/../config.php');
		if (is_array($config)){
			$this->conf = $config['asterisk'];
		} else $this->conf = false;
    }

	public function echoMySingleton(){
		echo $this->var;
	}
}

$obj = MySingleton::getInstance();
for ($i=0; $i <10 ; $i++) { 
 	$obj->$conf[] = $i;
 } 
print_r($obj->$conf);
//$obj->echoMySingleton();

/*
$obj->setVar("хуй пизда - джигурда\n");
$obj->echoMySingleton();

function foo($localobj){
	$localobj->setVar("тратата \n");
}

function foo1($localobj){
	$localobj->setVar("Fuck them all \n");
}

foo($obj);
$obj->echoMySingleton();
foo1($obj);
$obj->echoMySingleton();
*/

