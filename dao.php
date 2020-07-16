<?php

class dao_todo extends dao_generic {
        const db = 'todo';
	function __construct() {
	    parent::__construct(self::db);
	    $this->icoll    = $this->client->selectCollection(self::db, 'items');
	}
	
	public function put($dat) {
	    $id = $dat['id'];
	    kwas(is_numeric($id), 'only taking numeric ids at this time todo put()');
	    $id = intval($id);
	    kwas($id && $id > 10000, 'only taking JS timestamp ids at this time todo put()');
	    $dat['id'] = $id;
	    $res = $this->icoll->upsert(
		    ['uid' => $dat['uid'], 'type' => $dat['type'], 'id' => $id], $dat
		    );
	    
	    $x = 2;
	}
    
}
