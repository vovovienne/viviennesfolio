//scene
let $chickenFront = $( '.chicken' );
let $globeFront = $( '.snowglobe' );
let $chicken2Front = $('.chickendrum');
let $jamo = $('.jam');

let $jarFront = $('.jar');


const rotateScene = function (event) {
    rx -= event.originalEvent.movementY;
    ry += event.originalEvent.movementX;
	if (ry <= 26 && ry >= -27) {
		$scene.css( '--ry', ry+'deg' );
		$chickenFront.css( '--ry', -ry+'deg' );
		$jarFront.css( '--ry', -ry+'deg' );
		$globeFront.css( '--ry', -ry+'deg' );
		$chicken2Front.css( '--ry', -ry+'deg' );
		$jamo.css( '--ry', -ry+'deg' );
	}
}

let $body = $('body');
let $scene = $('.scene');

let rx = 0;
let ry = 0;

$body.on('mousedown', function () { $body.on( 'mousemove', rotateScene ) });
$body.on('mouseup', function () { $body.off( 'mousemove', rotateScene ) });

function blur(){
	
}

$('img').prop('draggable', false);


//game function
var getChime = new Audio('sounds/chime.wav');
getChime.volume -= 0.6;

let totalPoint = 0;
jQuery('#points').text('Presents found ' + totalPoint + '/5' );
let $presOne = $( '.present.one' );
let $presTwo = $( '.present.two' );
let $presThree = $( '.present.three' );
let $presFour = $( '.present.four' );
let $presFive = $( '.present.five' );

function addPoint1() {
	jQuery('#points').text('Presents found ' + (totalPoint+=1) + '/5' );
	$presOne.hide();
	getChime.play();
	$('.light.one').addClass('lightup');
	checkTotal();
}
function addPoint2() {
	jQuery('#points').text('Presents found ' + (totalPoint+=1) + '/5' );
	$presTwo.hide();
	getChime.play();
	$('.light.two').addClass('lightup');
	checkTotal();
}
function addPoint3() {
	jQuery('#points').text('Presents found ' + (totalPoint+=1) + '/5' );
	$presThree.hide();
	getChime.play();
	$('.light.three').addClass('lightup');
	checkTotal();
}
function addPoint4() {
	jQuery('#points').text('Presents found ' + (totalPoint+=1) + '/5' );
	$presFour.hide();
	getChime.play();
	$('.light.four').addClass('lightup');
	checkTotal();
}
function addPoint5() {
	jQuery('#points').text('Presents found ' + (totalPoint+=1) + '/5' );
	$presFive.hide();
	getChime.play();
	$('.light.five').addClass('lightup');
	checkTotal();
}

var audio = new Audio('sounds/bgm.mp3');
audio.volume -= 0.98;
audio.loop = true;

function checkTotal() {
	if (totalPoint == 5) {
	$('.shadow').addClass('brighten');
	$('body').addClass('brighten2');
	$('.painting').addClass('hide');
	$('.painting2').addClass('visible');
	$('.steam').addClass('visible');
	$('.chicken').addClass('chickenplus');
	audio.play();
	crying.pause();
	$('.chickentime').addClass('visible');
	}
}

function newChicken() {
	$('.chicken').addClass('hide');
	$('.chickenbox2').addClass('visible');
}

var firePlace = new Audio('sounds/fire.wav');
var crying = new Audio('sounds/cryingsfx.wav');
crying.loop = true;
firePlace.loop = true;
firePlace.volume -= 0.9;
crying.volume -=0.5;

function hideModal() {
	$('.modal').addClass('hide2');
	$('span').addClass('visible');
	$('.present').addClass('clickon');
	firePlace.play();
	crying.play();
}
	
function hideModal2() {
	$('.chickentime').addClass('hide');
}
	