$(function(){
	$("#1").css({left : '0px', top : '0px'});
	$("#2").css({left : '0px', top : '0px'});
	$("#3").css({left : '0px', top : '0px'});
	var x = 0;
	var y = 0;
	$(document).on("mousemove", actualizar);
	function actualizar(){
		x = event.pageX;
		y = event.pageY;
		
		x = Math.min(x-120, x);
		y = Math.min(y-10,y);

		if(x < 0) x = 0;
		if(y < 0) y = 0;
	}

	setInterval(function(){
		if(parseInt($(".fantasma").css("left")) < x){
			endevantX();

		} else{
			enderrereX();
		}

		if(parseInt($(".fantasma").css("top")) < y){
			endevantY();
		} else{
			enderrereY();
		}
	},20);

	function endevantX(){
		var left = parseInt($(".fantasma").css("left"));
		var posF = left + ((x - left)/20);
		$(".fantasma").css({left : posF + 'px'});
	}
	function enderrereX(){
		var left = parseInt($(".fantasma").css("left"));
		var posF = left + ((x - left)/20);
		$(".fantasma").css({left : posF + 'px'});
	}

	function endevantY(){
		var top = parseInt($(".fantasma").css("top"));
		var posF = top + ((y - top)/20);
		$(".fantasma").css({top : posF + 'px'});

	}
	function enderrereY(){
		var top = parseInt($(".fantasma").css("top"));
		var posF = top + ((y - top)/20);
		$(".fantasma").css({top : posF + 'px'});
	}
});
