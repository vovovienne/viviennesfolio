'use strict';

//eyeball movement in section 1
var eyeball = document.getElementsByClassName("eye");

document.onmousemove = function(){
	var x = event.clientX * 100 / window.innerWidth + "%";
	var y = event.clientY * 100 / window.innerHeight + "%";
	
	for(var i = 0; i < 1; i ++) {
		eyeball[i].style.left = x;
		eyeball[i].style.top = y;
		eyeball[i].style.transform = "translate(-"+x+",-"+y+")";
	}
}

//slowing down video in section 2
document.getElementById('placeholder2').playbackRate = 0.75;


//collasible button
var moreText = document.getElementsByClassName("moretext");
var i;

for(i = 0; i < moreText.length; i++) {
	moreText[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			content.style.display = "block";
		}
	});
}

	
//word count + message
function remainingChar() {
	let remain  = 160 - jQuery('.textarea').val().length;
	
	if (remain == 1) {
		jQuery('#remaining').text(remain + ' character remaining.' );
	} else {
		jQuery('#remaining').text(remain + ' characters remaining.' );
	}
}

jQuery(document).ready(function($) {
    remainingChar();
    $('.textarea').change(remainingChar);
    $('.textarea').keyup(remainingChar);
});


function checkBox (){
	if (jQuery('.textarea').val().length == 0) {
		jQuery('#result').text('Please fill in the text box above!');
	}else {
		jQuery('#result').text('Thankyou for your feedback!');
		$('.textarea').val('');
		jQuery('#remaining').text(160 + ' characters remaining.' );
	}
}

//footer hover = scroll to section + remove text and arrow
var footer = document.getElementById("footer");
var removeText = document.getElementById("tofooter");
var removeArrow = document.getElementById("arrowf");

function scrollFooter () {
	removeText.style.visibility = "hidden";
	removeArrow.style.visibility = "hidden";
	

	footer.scrollIntoView( { behavior : 'smooth' } );
}

footer.addEventListener( 'mouseover', function( event ){ } );

footer.addEventListener( 'mouseout', function( event ){
 	removeText.style.visibility = "visible";
	removeArrow.style.visibility = "visible";
} );

//jostle rock section 1
$('#introrock1').click(function(){
    $('#introrock1').toggleClass('oi');
});

function stopJostle() {
	$('#introrock1').toggleClass('oi');
}

$('#introrock2').click(function(){
    $('#introrock2').toggleClass('oi2');
});

function stopJostle2() {
	$('#introrock2').toggleClass('oi2');
}

//jostle rock section 2
$('#tworock1').click(function(){
    $('#tworock1').toggleClass('poi');
});

function stopJostle3() {
	$('#tworock1').toggleClass('poi');
}

$('#tworock2').click(function(){
    $('#tworock2').toggleClass('poi2');
});

function stopJostle4() {
	$('#tworock2').toggleClass('poi2');
}

//navbar smooth scrolling to section + highlighting navbar links 
const selectLink = function ( event ) { 
	highlightLink( event.currentTarget );
}

const highlightLink = function ( element ) {
	for ( let link of links ) {
 		link.classList.remove( 'selected' );
	}

	element.classList.add( 'selected' );
}

const checkSections = function (entries) {
	for ( let entry of entries ) { 
		if ( entry.intersectionRatio >= 0.5 ) { 
			console.log( 'scrolled to', entry.target );
			let hash = '#' + entry.target.id;
			for ( let link of links ) {
				if ( link.hash === hash ) highlightLink( link );
			}
		}
	}
}

const scrollToSection = function ( event ) {
	event.preventDefault();
	console.log( 'target', event.currentTarget.hash );
	let selector = event.currentTarget.hash;
	document.querySelector( selector ).scrollIntoView( { behavior : 'smooth' } );
}

let links = document.querySelectorAll( 'nav a' );

let observer = new IntersectionObserver(checkSections, { threshold:[0.5] }); // threshole is tracing

let sections = document.querySelectorAll( 'section' ); //list of all the section elements in the vaiable declaration section

for ( let link of links ) {
	link.addEventListener( 'click', selectLink );
	link.addEventListener( 'click', scrollToSection );
}

for ( let section of sections ) {
	observer.observe( section );
}

//refreshing the page to return to the start
window.addEventListener( 'beforeunload', function() { 
	document.body.scrollIntoView();
} );