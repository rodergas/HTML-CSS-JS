$(function() {
	var X = 0, Y = 0;

	$(document).on("mousemove", function(event) {
  		X = event.pageX; X = Math.min(X - 40, X); if (X < 0) X = 0;
  		Y = event.pageY; Y = Math.min(Y - 40, Y); if (Y < 0) Y = 0;
	});

	setInterval(function() {
		var top = $("#pet").css("top"); top = parseInt(top);
		var left = $("#pet").css("left"); left = parseInt(left);
	    left += (X - left)/20;
	    top += (Y - top)/20;
	    $("#pet").css("left", left +"px");
	    $("#pet").css("top", top +"px");
	}, 30);

	$("#pet").css("top", "0px");
	$("#pet").css("left", "0px");

	$("#sony").click(function() {
		$("#pet").css("display", "block");
	});

});