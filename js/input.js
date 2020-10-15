class kwtodoItTitle {
    
    titele;
    pid;
    type;
    
    too;
    
    constructor(pid, initv) {
	this.pid = pid;
	
	const tele = cree('input');
	tele.type = 'text';
	this.type = 'itemTitle';
	this.titele = tele;
	
	if (initv) tele.value = initv.v;
	
	const self = this;
	tele.oninput = function() { self.oninput(); }
    }
    
    oninput() { 
	if (this.too) clearTimeout(this.too);
	const self = this;
	this.too = setTimeout(function() { self.oninputad(); }, 400); 
    }
    
    oninputad() {
	const nob = {};
	nob.crud = 'update';
	nob.type = this.type;
	nob.id   = this.pid;
	nob.v    = this.titele.value;
	send(nob);
    }
    
    getEle() { return this.titele; }
}