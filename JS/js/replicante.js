var images =["url('https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Valenciacf.svg/812px-Valenciacf.svg.png') center no-repeat",
			"url('https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_(crest).svg/1010px-FC_Barcelona_(crest).svg.png') center no-repeat",
			"url('https://pbs.twimg.com/profile_images/2482198530/iql2hfa8kks5q78q4ag3_400x400.jpeg') center no-repeat",
			"url('http://statics.laliga.es/img/escudos/atletico.png?7') center no-repeat"];
var replicante =["url('http://moontown.ru/extimages/p_0701721_Rachael.jpg') center no-repeat", 
				"url('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS2upoa0eec8CnIifr6HxCOh7VlghhamO--e1aXz-8Jags5AeIPnA') center no-repeat"];
var prob;
function init(){
	caja = document.getElementById("contenedor");
	caja.style.left = "0px";
	caja.style.top = "0px";
	//caja.style.backgroundImage = "url('" + images[random()] + "')";
	prob = Math.random();
	if(prob > 0.125) caja.style.background = images[random()];
	else caja.style.background = replicante[randomReplicante()];
	caja.addEventListener("click",mou);
	caja.style.backgroundSize= "100% 100%";
	//caja.style.backgroundSize = "100% 100%"; 


}

window.onload = init;

function random(){
	 return Math.floor(Math.random()*images.length);
}

function randomReplicante(){
	 return Math.floor(Math.random()*replicante.length);
}

function mou(){
	var h = document.body.clientHeight - 100;
    var w = document.body.clientWidth - 100;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    caja.style.left = nw +"px";
    caja.style.top = nh +"px";

    prob = Math.random();
    if(prob > 0.125) caja.style.background = images[random()];
	else caja.style.background = replicante[randomReplicante()];

	caja.style.backgroundSize= "100% 100%";

}
