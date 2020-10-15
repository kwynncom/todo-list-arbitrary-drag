<?php

// You must config this for your purposes

require_once('/opt/kwynn/kwutils.php');

function getUsersPath() {
    if (isAWS() ) return __DIR__ . '/../../07/users/users.php';
    else          return __DIR__ .       '/../users/users.php';
}