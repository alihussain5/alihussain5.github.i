$(document).ready(function() {

	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var sectionID = $(this).attr("data-id");
		scrollToID('#' + sectionID, 750);
	});


	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$(".timeline-text-container").on("click", function () {
			$(this).children(".timeline-hover-notice").hide();
			$(this).children(".timeline-class-desc").slideToggle();
		});	
	} else {
		$(".timeline-text-container").on("mouseenter", function () {
			$(this).children(".timeline-hover-notice").hide();
			$(this).children(".timeline-class-desc").slideToggle();
		});

		$(".timseline-text-container").on("mouseleave", function () {
			$(this).children(".timeline-class-desc").slideToggle(function () {
				//$(this).sibling(".timeline-hover-notice").show();	
			});
		});
	}


	navSetter('main');
	navSetter('timeline');
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
