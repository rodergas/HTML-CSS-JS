$(function(){
	var trans = parseInt($(window).width()) *0.4;
	var transforms = ["rotateY(0deg) translateZ("+ trans+"px)",
					 "rotateY(24deg) translateZ("+trans+"px)",
					 "rotateY(48deg) translateZ("+trans+"px)",
					"rotateY(72deg) translateZ("+trans+"px)",
					"rotateY(96deg) translateZ("+trans+"px)" ,
					"rotateY(120deg) translateZ("+trans+"px) ",
					"rotateY(144deg) translateZ("+trans+"px) ",
					"rotateY(168deg) translateZ("+trans+"px) ",
					"rotateY(192deg) translateZ("+trans+"px) ",
					"rotateY(216deg) translateZ("+trans+"px) ",
					"rotateY(240deg) translateZ("+trans+"px) ",
					"rotateY(264deg) translateZ("+trans+"px) ",
					"rotateY(288deg) translateZ("+trans+"px) ",
					"rotateY(312deg) translateZ("+trans+"px) ",
					"rotateY(336deg) translateZ("+trans+"px) "];

	var translates = ["translateZ("+ trans+"px)",
					 "translateZ("+trans+"px)",
					 " translateZ("+trans+"px)",
					"translateZ("+trans+"px)",
					"translateZ("+trans+"px)" ,
					"translateZ("+trans+"px) ",
					"translateZ("+trans+"px) ",
					"translateZ("+trans+"px) ",
					"translateZ("+trans+"px) ",
					"translateZ("+trans+"px) ",
					"translateZ("+trans+"px) ",
					"translateZ("+trans+"px) ",
					"translateZ("+trans+"px) ",
					"translateZ("+trans+"px) ",
					"translateZ("+trans+"px) "];
	var ids =["a1", "a2","a3","a4", "a5","a6","a7", "a8","a9","a10", "a11","a12","a13", "a14","a15"];
	var grados =[0, 24, 48, 72,96,120,144,168,192, 216, 240, 264, 288,312,336];
	var ids2 =["a1", "a2","a3","a4", "a5","a6","a7", "a8","a9","a10", "a11","a12","a13", "a14","a15"];
	var grados2 =[0, 24, 48, 72,96,120,144,168,192, 216, 240, 264, 288,312,336];
	actualizar();
	$(window).on('resize', actualizar);



	function actualizar(){
		trans = parseInt($("body").width()) *0.4;
		for(i = 0; i < translates.length; ++i) translates[i] = "translateZ("+ trans+"px)";
		for(j = 0; j < ids.length; ++j){
			$("#" + ids[j]).css({transform: "rotateY(" + grados[j] + "deg) " + translates[j]});
			$("#" + ids[j]).css("-webkit-transform",  "rotateY(" + grados[j] + "deg) " + translates[j]);
			$("#" + ids[j]).css("-webkit-moz-transform",  "rotateY(" + grados[j] + "deg) " + translates[j]);
		}
	}

	$("#imagengrande").css({background: $("#a1").css("background-image")});
	$("#imagengrande").css("background-size", "100% 100%");




	$("#der").click(adelante2);
	$("#izq").click(atras2);
	$("#derG").click(adelante);
	$("#izqG").click(atras);

	$(".imagen").click(function(event){
		var i;
		if(event.target.id.length == 3)var cont = parseInt(event.target.id.substring(1,3));
		else var cont = parseInt(event.target.id.substring(1,2));

		if(ids[0].length == 3)var cont2 = parseInt(ids[0].substring(1,3));
		else var cont2 = parseInt(ids[0].substring(1,2));

		var sumarG = cont2-cont;
		if(sumarG < 0){
			sumarG = Math.abs(sumarG);
			for(i = 0; i < sumarG; ++i) atras();
		} else if(sumarG > 0){
			for(i = 0; i < sumarG; ++i) adelante();
		}
	});

	$("#" + ids[0]).css("border", "2px solid rgb(255,255,0)");

	function adelante(){
		ids2 = ids.slice();
		grados2 = grados.slice();
		$("#" + ids[0]).css("border", "2px solid rgb(0,0,0)");
		var i;
		var aux = ids.slice();
		var ult = ids[ids.length-1];
		for(i=0; i < ids.length -1 ; ++i){
			aux[i+1] = ids[i];
		}
		aux[0] = ult;
		ids = aux.slice();

		aux = grados.slice();
		ult = grados[grados.length-1];
		for(i=0; i < grados.length -1 ; ++i){
			aux[i+1] = grados[i];
		}
		aux[0] = ult;
		grados = aux.slice();

		for(i = 0; i < grados.length; ++i) grados[i] = (grados[i] + 24);
		for(i= 0; i < ids.length; ++i){
			$("#" + ids[i]).css({transform: "rotateY(" + grados[i] + "deg) translateZ(" + trans + "px)"});
			$("#" + ids[i]).css("-webkit-transform", "rotateY(" + grados[i] + "deg) translateZ(" + trans + "px)");
			$("#" + ids[i]).css("-webkit-moz-transform", "rotateY(" + grados[i] + "deg) translateZ(" + trans + "px)");
		}	
		/*
		for(i= 0; i < ids.length; ++i){
			$("#" + ids[i]).css({transform: transforms[i]});
			$("#" + ids[i]).css("-webkit-transform", transforms[i]);
		}*/

		$("#imagengrande").css({background: $("#" +ids[0]).css("background-image")});
		$("#imagengrande").css("background-size", "100% 100%");

		$("#" + ids[0]).css("border", "2px solid rgb(255,255,0)");

	}

	function atras(){
		ids2 = ids.slice();
		grados2 = grados.slice();
		$("#" + ids[0]).css("border", "2px solid rgb(0,0,0)");
		var i;
		var aux = ids.slice();
		var primer = ids[0];
		for(i=ids.length - 1; i > 0 ; --i){
			aux[i-1] = ids[i];
		}
		aux[aux.length - 1] = primer;
		ids = aux.slice();

		aux = grados.slice();
		primer = grados[0];
		for(i=grados.length - 1; i > 0 ; --i){
			aux[i-1] = grados[i];
		}
		aux[aux.length - 1] = primer;
		grados = aux.slice();

		for(i = 0; i < grados.length; ++i) grados[i] = (grados[i] - 24);
		for(i= 0; i < ids.length; ++i){
			$("#" + ids[i]).css({transform: "rotateY(" + grados[i] + "deg) translateZ("+ trans+ "px)"});
			$("#" + ids[i]).css("-webkit-transform", "rotateY(" + grados[i] + "deg) translateZ(" + trans +"px)");
			$("#" + ids[i]).css("-webkit-moz-transform", "rotateY(" + grados[i] + "deg) translateZ(" + trans +"px)");
		}	
		/*
		for(i= 0; i < ids.length; ++i){
			$("#" + ids[i]).css({transform: transforms[i]});
			$("#" + ids[i]).css("-webkit-transform", transforms[i]);
		}
		*/


		$("#imagengrande").css({background: $("#" +ids[0]).css("background-image")});
		$("#imagengrande").css("background-size", "100% 100%");


		$("#" + ids[0]).css("border", "2px solid rgb(255,255,0)");
	}

	function adelante2(){
		var i;
		var aux = ids2.slice();
		var ult = ids2[ids2.length-1];
		for(i=0; i < ids2.length -1 ; ++i){
			aux[i+1] = ids2[i];
		}
		aux[0] = ult;
		ids2 = aux.slice();

		aux = grados2.slice();
		ult = grados2[grados2.length-1];
		for(i=0; i < grados2.length -1 ; ++i){
			aux[i+1] = grados2[i];
		}
		aux[0] = ult;
		grados2 = aux.slice();

		for(i = 0; i < grados2.length; ++i) grados2[i] = (grados2[i] + 24);
		for(i= 0; i < ids2.length; ++i){
			$("#" + ids2[i]).css({transform: "rotateY(" + grados2[i] + "deg) translateZ(" + trans + "px)"});
			$("#" + ids2[i]).css("-webkit-transform", "rotateY(" + grados2[i] + "deg) translateZ(" + trans + "px)");
			$("#" + ids2[i]).css("-webkit-moz-transform", "rotateY(" + grados2[i] + "deg) translateZ(" + trans + "px)");
		}	
		/*
		for(i= 0; i < ids.length; ++i){
			$("#" + ids[i]).css({transform: transforms[i]});
			$("#" + ids[i]).css("-webkit-transform", transforms[i]);
		}*/

	}

	function atras2(){
		var i;
		var aux = ids2.slice();
		var primer = ids2[0];
		for(i=ids2.length - 1; i > 0 ; --i){
			aux[i-1] = ids2[i];
		}
		aux[aux.length - 1] = primer;
		ids2 = aux.slice();

		aux = grados2.slice();
		primer = grados2[0];
		for(i=grados2.length - 1; i > 0 ; --i){
			aux[i-1] = grados2[i];
		}
		aux[aux.length - 1] = primer;
		grados2 = aux.slice();

		for(i = 0; i < grados2.length; ++i) grados2[i] = (grados2[i] - 24);
		for(i= 0; i < ids2.length; ++i){
			$("#" + ids2[i]).css({transform: "rotateY(" + grados2[i] + "deg) translateZ("+ trans+ "px)"});
			$("#" + ids2[i]).css("-webkit-transform", "rotateY(" + grados2[i] + "deg) translateZ(" + trans +"px)");
			$("#" + ids2[i]).css("-webkit-moz-transform", "rotateY(" + grados2[i] + "deg) translateZ(" + trans +"px)");
		}	
		/*
		for(i= 0; i < ids.length; ++i){
			$("#" + ids[i]).css({transform: transforms[i]});
			$("#" + ids[i]).css("-webkit-transform", transforms[i]);
		}
		*/
	}

	function directo(){
		ids2 = ids.slice();
		grados2 = grados.slice();
		$("#" + ids[0]).css("border", "2px solid rgb(0,0,0)");
		var i;
		var aux = ids.slice();
		var ult = ids[ids.length-1];
		for(i=0; i < ids.length -1 ; ++i){
			aux[i+1] = ids[i];
		}
		aux[0] = ult;
		ids = aux.slice();

		aux = grados.slice();
		ult = grados[grados.length-1];
		for(i=0; i < grados.length -1 ; ++i){
			aux[i+1] = grados[i];
		}
		aux[0] = ult;
		grados = aux.slice();

		for(i = 0; i < grados.length; ++i) grados[i] = (grados[i] + 24);
		for(i= 0; i < ids.length; ++i){
			$("#" + ids[i]).css({transform: "rotateY(" + grados[i] + "deg) translateZ(" + trans + "px)"});
			$("#" + ids[i]).css("-webkit-transform", "rotateY(" + grados[i] + "deg) translateZ(" + trans + "px)");
			$("#" + ids[i]).css("-webkit-moz-transform", "rotateY(" + grados[i] + "deg) translateZ(" + trans + "px)");
		}	
		/*
		for(i= 0; i < ids.length; ++i){
			$("#" + ids[i]).css({transform: transforms[i]});
			$("#" + ids[i]).css("-webkit-transform", transforms[i]);
		}*/
		$("#imagengrande").css({background: $("#" +ids[0]).css("background-image")});
		$("#imagengrande").css("background-size", "100% 100%");

		$("#" + ids[0]).css("border", "2px solid rgb(255,255,0)");

	}

});