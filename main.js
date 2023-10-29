var touchStartX = 0;
var touchEndX = 0;

document.getElementsByClassName("event-item")[0].addEventListener("touchstart", function(e) {
  touchStartX = e.changedTouches[0].clientX;
});

document.getElementsByClassName("event-item")[0].addEventListener("touchend", function(e) {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  var threshold = 10;

  if (touchStartX - touchEndX > threshold) {
    changeEventImg(slideIndex + 1);
  } else if (touchEndX - touchStartX > threshold) {
    changeEventImg(slideIndex - 1);
  }
}

// Add touch event listeners using Hammer.js
// var touchElement = document.querySelector(".event-item");
// var hammer = new Hammer(touchElement);

// hammer.on("swipeleft", function() {
//   // Swipe left to right, move to the previous slide
//   changeEventImg(slideIndex - 1);
// });

// hammer.on("swiperight", function() {
//   // Swipe right to left, move to the next slide
//   changeEventImg(slideIndex + 1);
// });

function nextEvent(n) {
    changeEventImg(slideIndex += n);
}

// Auto Change Image
function autoChangeEvent() {
    slideIndex++;
    changeEventImg(slideIndex);
    setTimeout(autoChangeEvent, 10000); // Change image after every 10 seconds
}

// Change image
function changeEventImg(n) {
  var i;
  var slides = document.getElementsByClassName("event-item");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }

  // Hide every other image
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  //  Display the particular image
  slides[slideIndex-1].style.display = "block";  

  document.getElementById('event-counter').innerHTML=slideIndex+" out of "+slides.length
}

// Main
var slideIndex = 1;

changeEventImg(slideIndex);
autoChangeEvent();