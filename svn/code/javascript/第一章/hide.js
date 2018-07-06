function hide(e, reflow) {
	// body...
	if(reflow){
		e.style.display = "none";
	}else{
		e.style.visibility = "hidden";
	}
}

function highlight(e){
	if(!e.className) {
		e.className = 'hilite';
	}else{
		e.className += "hilite";
	}
}

