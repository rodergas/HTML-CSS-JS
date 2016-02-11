$(function () {
	/*///////GLOBALES///////*/
	var vides = 3, w = false, puntuacion = 0, p, v = 3000;
	var timerWindows;
	/*///////FUNCIONES///////*/
	function points() {
		$("#puntos").text("points: "+puntuacion);
	}

	function vida() {
		if(vides > 0) --vides;
		$("#v" + vides).css("display", "none");
		--puntuacion;
		apple();
		if (vides == 0) {
			vides = 3;
			v = 3000;
			$("#v0").css("display", "inline-block");
			$("#v1").css("display", "inline-block");
			$("#v2").css("display", "inline-block");
			--puntuacion;
			apple(); 
			$("#android").stop();
			alert("Has perdut!");
			puntuacion = -1;
		}
	}

	function randomPos() {
		var x = Math.floor(Math.random()*(parseInt($("#game").css("width")) - 64));
		var y = Math.floor(Math.random()*(parseInt($("#game").css("height")) - 64));
		return [x,y];
	}

	function efectoWindows() {
		$("#windows").css("opacity", "1");
		$("#windows").stop().fadeTo(800, 0, efectoWindows);
	}

	function android() {
		$("#android").stop().animate({left: p[0] + "px", top: p[1] + "px"}, v, vida);
	}

	function windows() {
		clearTimeout(timerWindows);
		$("#windows").stop();
		$("#windows").css("display", "none");
		w = false;
		v = 4000;
		android();
	}
	function generarWindows() {
		if (!w && Math.random() < 0.125) {
			w = true;
			var pw = randomPos();
			$("#windows").css({top: pw[1]+"px", left: pw[0]+"px"});
			timerWindows = setTimeout(function() {
				$("#windows").stop();
				$("#windows").css("display", "none");
				w = false;
			}, 5000);
			$("#windows").fadeTo(500, 0, efectoWindows);
		}
	}

	function apple() {
		++puntuacion; points();
		if (v > 1250) v -= 250;
		p = randomPos();
		android();
		$("#apple").css({background: "url("+ Math.floor(Math.random()*3)+".png) center center no-repeat", backgroundSize: "100% 100%",top: p[1]+"px", left: p[0]+"px"});
	}
	/*//////////PROGRAMA//////////*/
	//apple(); points();

	$("#android").css({background: "url(4.png) center center no-repeat", backgroundSize: "100% 100%"});
	$("#windows").css({background: "url(3.png) center center no-repeat", backgroundSize: "100% 100%"});
	$("#apple").css({background: "url(0.png) center center no-repeat", backgroundSize: "100% 100%"});

	$("#windows").click(windows);
	$("#apple").click(apple);
	$("#apple").click(generarWindows);
});