class kwtodoItTitle {
    
    titele;
    pid;
    type;
    
    too;
    
    constructor(pid) {
	this.pid = pid;
	
	const tele = cree('input');
	tele.type = 'text';
	this.type = 'itemTitle';
	this.titele = tele;
	const self = this;
	tele.oninput = function() { self.oninput(self); }
    }
    
    oninput(theob) { 
	if (theob.too) clearTimeout(theob.too);
	theob.too = setTimeout(function() { theob.oninputad(theob); }, 400); 
    }
    
    oninputad(theob) {
	const nob = {};
	nob.crud = 'update';
	nob.type = theob.type;
	nob.id   = theob.pid;
	nob.v    = theob.titele.value;
	send(nob);
    }
    
    getEle() { return this.titele; }
}