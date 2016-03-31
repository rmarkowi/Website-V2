var viewportWidth = $(window).width();
var viewportHeight = $(window).height();

var threshold = 1000;

var main = function(){
};

var resize = function(){
	if(viewportWidth >= threshold){
		$(".headers").css("display", "inline");
		console.log("inline");
	}
	else{
		$(".headers").css("display", "block");
	}
};

window.onresize = function(event){
	viewportWidth = $(window).width();
	viewportHeight = $(window).height();
	resize;
};

$(document).ready(main);