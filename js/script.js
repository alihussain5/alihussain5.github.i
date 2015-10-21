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

});
// scroll function
function scrollToID(id, speed){
	var targetOffset = $(id).offset().top;
	$('html,body').animate({scrollTop:targetOffset}, speed);
}
