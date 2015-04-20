$(document).ready(function() {


  // which slide we are currently viewing
  var currentPosition = 0;
  var slideWidth = 500;

  // this lets us refer to our slides
  // in the jquery code
  var slides = $('.slide');

  // automatically calculates the number of slides
  // by counting the number of divs
  // that are of the class slide
  var numberOfSlides = slides.length;


  // variable to hold the timer
  var slideShowInterval;

  // is 2 seconds
  var speed = 2000;


  // set up our timer using the jQuery setInterval function.
  // It takes two parameters, the function that it calls and the speed.
  // So this will call the changePosition function
  // (which in turn calls the moveSlide function) every 2 seconds.
  slideShowInterval = setInterval(changePosition, speed);



  // To get the slides to line up across the page,
  // we need to add another div.
  // This div will hold all the slides and
  // allow the float:left property to work.
  slides.wrapAll('<div id="slidesHolder"></div>')
  // The wrapAll() method wraps specified HTML element(s)
  // around all selected elements.


  // Now we need to float the slides so they line up side by side.
  slides.css({ 'float' : 'left' });
  // If you remove the overflow:hidden from the slideshowWindow div
  // and run the code now, you'll see what this achieves.
  // when i removed it, all of the slides showed up from
  // top to bottom
  // with overflow:hidden there is only 1 pic


  // Next we want to set the width of #slidesHolder div.
  // This needs to be set to the width of
  // all the slides added together.
  $('#slidesHolder').css('width', slideWidth * numberOfSlides);


  // So now we need to move the slides from one to the other.
  // We will require two functions.
  // The first function will determine how far along
  // we are along our sequence of slides,
  // so we know where to go next and
  // so that when we reach the last slide,
  // we know to jump back to the beginning.
  function changePosition() {
    if(currentPosition == numberOfSlides - 1) {
      currentPosition = 0;
    } else {
      currentPosition++;
    }
    moveSlide();
  }
  // if the current position is the last slide,
  // make currentPostion equal to the first slide
  // otherwise increment the currentPosition


  // this function sets the left margin of the
  // slidesHolder div to the width of the slide
  // multiplied by the slide number (currentPosition) and
  // then animates to that from the current left margin.
  function moveSlide() {
    $('#slidesHolder')
    .animate({'marginLeft' : slideWidth*(-currentPosition)});
  }


  $("#hide").click(function(){
    $("#disappear").hide();
  });

  $("#show").click(function(){
    $("#disappear").show();
  });


});
