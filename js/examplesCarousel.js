'use strict';
function sayHi() {
	console.log("Hello Patrick!");
}


function switchDescription(nextSlide, prevSlide) {
	// Hide previous slide. Show next slide.
	let nextDesc = document.getElementById("description"+nextSlide);
	nextDesc.style.display = "block";
	let prevDesc = document.getElementById("description"+prevSlide);
	prevDesc.style.display = "none";
}

$('#projectsCarousel').carousel({pause: "true"});
$('.carousel').carousel('pause');

$('#projectsCarousel').on('slid.bs.carousel.to', function (nextSlide) {
  // do something…
  sayHi();
  switchDescription(nextSlide.to, nextSlide.from);
});