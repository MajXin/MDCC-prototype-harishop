function nextEvent(n) {
    changeEventImg(slideIndex += n);
}

function autoChangeEvent() {
    slideIndex++;
    changeEventImg(slideIndex);
    setTimeout(autoChangeEvent, 10000); // Change image after every 10 seconds
}

function changeEventImg(n) {
  var i;
  var slides = document.getElementsByClassName("event-item");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
  document.getElementById('event-counter').innerHTML=slideIndex+" out of "+slides.length
}


var slideIndex = 1;
changeEventImg(slideIndex);
autoChangeEvent();