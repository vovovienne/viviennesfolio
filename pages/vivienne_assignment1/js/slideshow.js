'use strict';

// function definitions
const setupSlideshow = function () {
	$slideshow = $( '#slideshow' );
	$slideshow.on( 'mouseenter', function ( event ) {
		clearTimeout( timer );
	} );
	$slideshow.on( 'click', function ( event ) { 
		nextSlide();
		clearTimeout( timer );
	} );
	$slideshow.on( 'mouseleave', function ( event ) { 
	 	timer = setTimeout( nextSlide, interval );
	} );
	$slides = $( '#slideshow figure' );
	$firstSlide = $slides.first();
	$lastSlide = $slides.last();
	$currentSlide = $firstSlide;
	$slides.not( $currentSlide ).hide();
	timer = setTimeout( nextSlide, interval );
}

const nextSlide = function () {
	$currentSlide.fadeOut();
	if ( $currentSlide.is( $lastSlide ) ) {
 		$currentSlide = $firstSlide;
	} else {
 		$currentSlide = $currentSlide.next();
	}
	$currentSlide.fadeIn();
	timer = setTimeout( nextSlide, interval );
}

// variable declarations

let $slideshow, $slides, $firstSlide, $lastSlide, $currentSlide;

let timer;
let interval = 5000;

// initialise script
setupSlideshow();