$(function(){
	var t;
	var clicat =[];
	var ultimo;
	var puntos = 0;
	$("#texto").text("Puntuació: " + puntos);
var images =["url('dado1.png') center no-repeat",
			"url('dado2.png') center no-repeat",
			"url('dado3.png') center no-repeat",
			"url('dado4.png') center no-repeat",
			"url('dado5.png') center no-repeat",
			"url('dado6.png')center no-repeat"];
	empezar();
	$("#1").mousedown(aturar);
	$("#1").mouseup(empezar);

	function random(){
	 return Math.floor(Math.random()*images.length);
	}

	function empezar(){
		ultimo = images[random()];
		$("#1").css("background", ultimo);
		$("#1").css("backgroundSize", "100% 100%");
		t = setTimeout(empezar,500);
	}

	function aturar(){
		clearInterval(t);
		var p = images.indexOf(ultimo);
		clicat.push(p);
		if(clicat.length == 1){
			$("#celda1").css("background", ultimo);
			$("#celda2").css("background", "white");
			$("#celda3").css("background", "white");
		}
		else if(clicat.length == 2){
			if(clicat[0] == clicat[1]) {puntos += 100; $("#texto").text("Puntuació: " + puntos); $("#celda2").css("background", ultimo);}
			else{
				
				$("#celda2").css("background", "white");
				clicat[0] = clicat[1];
				$("#celda1").css("background", ultimo);
			 clicat.length = 1;
			}
		} else if(clicat.length == 3){
			if(clicat[0] == clicat[1] && clicat[1] == clicat[2] &&  clicat[0] == clicat[2]){
				puntos += 1000;
				$("#texto").text("Puntuació: " + puntos);
				clicat.length = 0;
				$("#celda3").css("background", ultimo);
			} 
			else{
			
			$("#celda2").css("background", "white");
			$("#celda3").css("background", "white");
			clicat[0] = clicat[2];
			$("#celda1").css("background",ultimo);
			 clicat.length = 1;
			}
		}
		$("#celda1").css("backgroundSize", "100% 100%"); 
		$("#celda2").css("backgroundSize", "100% 100%"); 
		$("#celda3").css("backgroundSize", "100% 100%"); 
	}

});
