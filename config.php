<?php 
return array(

	'CallMeDEBUG' => 1, // дебаг сообщения в логе: 1 - пишем, 0 - не пишем
	'tech' => 'SIP', 
	'authToken' => 'type_your_token_here', //токен авторизации битрикса
	'bitrixApiUrl' => 'https://_type_your_url_here', //url к api битрикса (входящий вебхук)
	'extentions' => array('888999'), // список внешних номеров, через запятую
	'context' => 'dial_out', //исходящий контекст для оригинации звонка
	'asterisk' => array( // настройки для подключения к астериску
		    'host' => '10.100.111.249',
		    'scheme' => 'tcp://',
		    'port' => 5038,
		    'username' => 'callme',
		    'secret' => 'Lp1238_f23r-3rygJ',
		    'connect_timeout' => 10000,
		    'read_timeout' => 10000
		),
	'listener_timeout' => 300, //скорость обработки событий от asterisk

);