$(document).ready(function() {
    $('#touch-menu').click(function() {
       $('.nav').slideToggle(1000);
       });//end slide toggle
  $('.nav a').click(function() {
       if (  $(window).width() < 768 ) {
       $('.nav').slideToggle(1000);
       }
       });
  $(window).resize(function() {		
	  	if (  $(window).width() > 768 ) {			
			$('.nav').removeAttr('style');
		   }
});//end resize
});//end ready


$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 100) {
    $('#toTop').fadeIn();
    } else {
    $('#toTop').fadeOut();
    }
    });
$('#toTop').click(function() {
$('body').animate({scrollTop:0},800);
});
});


