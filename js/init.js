function todoInit() {
    if (!KWTODOINIT) return;
    
    KWTODOINIT.forEach(function(item) {
	new kwtitem(item);
    }
	    );
    
    
    
}


