class kwTodoDrag {
    tob; dstartx; dstarty; iamdragging; 
    constructor(tob, tele) {
	this.tob  = tob;
	const self = this;
	document.addEventListener("drop", function( e ) { 
	    if (!self.iamdragging) return;
	         self.iamdragging = false;
	    self.tob.onDrop(e.pageX - self.dstartx, e.pageY - self.dstarty); 
	}, false);
	document.addEventListener("dragover" , function(event) {  event.preventDefault(); }, false);
	tele.addEventListener("dragstart", function(e) { 
	    self.iamdragging = true;
	    self.dstartx = e.pageX;
	    self.dstarty = e.pageY;
	    self.tob.onDragStart();
	}, false);
    } // func
} // class
