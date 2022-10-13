const print = function(msg, element){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById(element).appendChild(div);
}

const clear = function(element){
	document.getElementById(element).innerHTML = '';
}