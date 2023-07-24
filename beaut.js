var slideIndex = 0;
showme();

function showme() {
  var a;
  var slides = document.getElementsByClassName('myslides');
  var square = document.getElementsByClassName('square');
  for (a = 0; a < slides.length; a++) {
    slides[a].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (a = 0; a < square.length; a++) {
    square[a].className = square[a].className.replace("active");
  }
  slides[slideIndex-1].style.display = "block";
  square[slideIndex-1].className += "  active";
  setTimeout(showme, 4000);
}

function openNav() {
  document.getElementById('sidepanel').style.width = "250px";
}

function closenav() {
  document.getElementById('sidepanel').style.width = "0";
}
