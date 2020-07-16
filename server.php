<?php 

require_once(__DIR__ . '/../users/users.php');

function receive() { 
    $uid = users::getUID();
    echo $uid;
    $x = 2;
}


receive();