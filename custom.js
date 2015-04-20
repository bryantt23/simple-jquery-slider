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



  // add button graphics to our slideshow with jQuery because if
  // the user doesn't have JavaScript available on their browser,
  // the buttons won't do anything so we don't want the user to
  // see them if that is the case.
  // This way they'll only display if JQuery is available.

  // Add the buttons to the DOM so they're ready for
  // use straight away on load.
  $('#slideshow')
  .prepend('<span class="nav" id="leftNav">Move Left</span>')
  .append('<span class="nav" id="rightNav">Move Right</span>');


  // call function to show left & right buttons
  manageNav(currentPosition);



  //tell the buttons what to do when clicked
  $('.nav').bind('click', function() {
    //determine new position
    // this is a ternary function,
    // if the right is clicked then currentPosition++, otherwise currentPosition--
    currentPosition = ($(this).attr('id')=='rightNav')
    ? currentPosition+1 : currentPosition-1;

    //hide/show controls

    // call function to show left & right buttons
    manageNav(currentPosition);

    // clears the time
    clearInterval(slideShowInterval);

    // set up our timer using the jQuery setInterval function.
    slideShowInterval = setInterval(changePosition, speed);
    moveSlide();
  });


    // to show the left and right buttons
    function manageNav(position) {
      //hide left arrow if position is first slide
      if(position==0){ $('#leftNav').hide() }
      else { $('#leftNav').show() }
      //hide right arrow is slide position is last slide
      if(position==numberOfSlides-1){ $('#rightNav').hide() }
      else { $('#rightNav').show() }
    }




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
      // call the manageNav function every time the slide changes
      manageNav(currentPosition);
    } else {
      currentPosition++;
      // call the manageNav function every time the slide changes
      manageNav(currentPosition);
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
