(function($){
	'use strict';


	$('.menu > ul > li').hover( function(){
		$(this).children('ul').slideDown();
	}, function(){
		$(this).children('ul').slideUp();
	} );


	$('.menu ul').parent('li').children('a').append('<i class="fas fa-chevron-down"></i>');


	

	$(window).scroll(function(){

		var durotto = $(window).scrollTop();

		if ( durotto > 500 ) {
			$('.top-button').fadeIn();
		} else{
			$('.top-button').fadeOut();
		}

	});


	$('.top-button').on( 'click', function(){
		$('html').animate({ scrollTop : 0 })
	} );





}) (jQuery);