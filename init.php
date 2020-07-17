<?php

require_once(__DIR__ . '/config.php');
require_once(getUsersPath());
require_once('dao.php');

todoInit();

function todoInit() {
    
    $uid = users::getUID();
    
    $dao = new dao_todo();
    $dbr = $dao->getByUID($uid);
    
    $json = json_encode($dbr, 1);
    
    header('Content-Type: text/javascript');
    echo("var KWTODOINIT = $json;\n");

}


