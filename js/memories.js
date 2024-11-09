let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 3 seconds
}

document.addEventListener("DOMContentLoaded", function() {
  var audio = document.getElementById("background-audio");
  audio.play(); // Autoplay the audio
});

window.onload = function() {
  document.getElementById("background-audio").play();
}

const dialogs = document.querySelectorAll("dialog");
const showButtons = document.querySelectorAll("dialog + button");
const closeButtons = document.querySelectorAll("dialog button");

// Loop through all dialog elements
dialogs.forEach((dialog, index) => {
  const showButton = showButtons[index]; // Get corresponding show button
  const closeButton = closeButtons[index]; // Get corresponding close button

  // "Show the dialog" button opens the dialog modally
  showButton.addEventListener("click", () => {
    dialog.showModal();
  });

  // "Close" button closes the dialog
  closeButton.addEventListener("click", () => {
    dialog.close();
  });
});