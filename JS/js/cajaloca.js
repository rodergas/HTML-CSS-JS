var velocitat;
var caja;
var t;
var right;
var bottom;
function init(){
	document.getElementById("btn1").addEventListener("click",mou);
	
	document.getElementById("btn2").addEventListener("click",frena);
	document.getElementById("btn3").addEventListener("click",acelera);
	document.getElementById("btn4").addEventListener("click",desacelera);
	caja = document.getElementById("contenedor");
	caja.style.left = "0px";
	caja.style.top = "0px";
	velocitat = 10;
	right = 1;
	bottom = 1;
}

window.onload = init;

function mou(){
	var r = Math.floor(Math.random()*256).toString(16);
	var g = Math.floor(Math.random()*256).toString(16);
	var b = Math.floor(Math.random()*256).toString(16);
	
	if(parseInt(caja.style.left) < parseInt(document.body.clientWidth) && right == 1)
	{
		moveRight();
		if(parseInt(caja.style.left)  >= (parseInt(document.body.clientWidth) - 200)) {
			right = 0;
			caja.style.background = "#"+r+g+b;
		}
	}else{
		moveLeft();
		if(parseInt(caja.style.left) <= 0) {
			right = 1;
			caja.style.background = "#" + r+g+b;
		}
	}

	if(parseInt(caja.style.top) < parseInt(document.body.clientHeight) && bottom == 1)
	{
		moveBottom();
		if(parseInt(caja.style.top)  >= (parseInt(document.body.clientHeight) - 260)) {
			bottom = 0;
			caja.style.background = "#"+r+g+b;
		}
	}else{
		moveTop();
		if(parseInt(caja.style.top) <= 0) {
			bottom = 1;
			caja.style.background = "#" + r+g+b;
		}
	}
	t = setTimeout(mou,20);
	document.getElementById("btn1").removeEventListener("click",mou);
	/*if(parseInt(caja.style.left) < document.left.clientWidth ) */
}

function moveRight(){
	caja.style.left = parseInt(caja.style.left) + velocitat +"px";
}

function moveLeft(){
	caja.style.left = parseInt(caja.style.left) - velocitat +"px";
}

function moveTop(){
	caja.style.top = parseInt(caja.style.top) - velocitat +"px";
}

function moveBottom(){
	caja.style.top = parseInt(caja.style.top) + velocitat +"px";
}

function frena(){
	clearTimeout(t);
	document.getElementById("btn1").addEventListener("click",mou);
}

function acelera(){
	velocitat +=3;
	if(velocitat > 40) velocitat = 40;
}

function desacelera(){
	velocitat -=3;
	if(velocitat < 1) velocitat = 1;
}