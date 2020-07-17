<?php 
require_once(__DIR__ . '/config.php');
require_once(getUsersPath());
require_once('dao.php');

function receive() { 
    try {
    $uid = users::getUID();
    $r = parseR('crud','type','id','v');
    if (!$r) return;
    $r['uid'] = $uid;
    if ($r['crud'] !== 'update') return; // that's all I'm doing so far
    unset($r['crud']);
    
    $dao = new dao_todo();
    $dao->put($r);
    } catch (Exception $ex) { die($ex->getMessage());   }
    
    
    echo('OK');
    exit(0);
}

receive();

function parseR(... $ks) {
    $r = [];
    foreach($ks as $k) {
	if (!isset($_REQUEST[$k])) return false;
	$r[$k] =   $_REQUEST[$k];
    }

    return $r;
    
}

