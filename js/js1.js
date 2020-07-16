class kwtitem {
    itemele; crets; type;
    constructor(iin) { 
	
	this.initv = false;
	
	if (iin) {
		 this.initv = iin;
		 this.crets = iin.id; }
	else     this.crets = new Date().getTime();
	this.create(); 
    }
    register() {
	const nob = {};
	nob.crud = 'create';
	this.send(nob);
    }
    create() {
	const nele = cree('div');
	this.itemele = nele;
	nele.dataset.type = this.type = 'item';
	this.register();
	
	nele.draggable = true;
	nele.className    = 'item';
	nele.style.resize = 'both';
	new kwTodoDrag(this, nele, this.onDragStart, this.onDrop);
	byid('divBase1').append(nele);	// abstract this
	
	const tob = new kwtodoItTitle(this.crets, this.initv);
	nele.append(tob.getEle());
    }
    onDragStart() { this.itemele.style.position = 'absolute'; }
    onDrop(xd, yd) {
	const dtarg = this.itemele;
	const left = (dtarg.offsetLeft + xd) + 'px';
	const top = (dtarg.offsetTop  + yd) + 'px';
	dtarg.style.left = left;
	dtarg.style.top  = top;
	
	const nob = {};
	nob.left = left;
	nob.top = top;
	this.send(nob);
    }
    send(obin) {
	if (!obin.crud) obin.crud = 'update';
	obin.type = this.type;
	obin.id  = this.crets;
	send(obin);
    }
    
}
