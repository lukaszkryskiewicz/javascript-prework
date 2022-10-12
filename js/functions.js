function print(msg, element){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById(element).appendChild(div);
}

function clear(element){
	document.getElementById(element).innerHTML = '';
}