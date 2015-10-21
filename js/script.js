$(document).ready(function() {

	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});

	$('.project').on("mouseenter",function(){
		$(this).find(".hover").fadeIn(300);
	});

	$('.project').on("mouseleave",function() {
		$(this).find(".hover").fadeOut(200);
	});

	$('.popup-link').magnificPopup({
	  type:'inline',
	  midClick: true
	});

	$('.job-button').on('click', function(event) {
		event.preventDefault();
		var ID = $(this).attr("data-id");

		$(".job").fadeOut(0);
		$("#" + ID).fadeIn(200);
		
		
	});

	navSetter('main');
	navSetter('about');
	navSetter('resume');
	navSetter('portfolio');


});
// scroll function
function scrollToID(id, speed){
	var targetOffset = $(id).offset().top -40;
	$('html,body').animate({scrollTop:targetOffset}, speed);
}

function navSetter(id) {

	var target = $("#"+id).offset().top -50,
	    timeout = null;

	$(window).scroll(function () {
	    if (!timeout) {
	        timeout = setTimeout(function () {
	            console.log('scroll');            
	            clearTimeout(timeout);
	            timeout = null;
	            if ($(window).scrollTop() >= target) {
	            	$(".nav").children().removeClass('active');
	                $("#nav-"+id).addClass('active');
	            }
	        }, 250);
	    }
	});

}
