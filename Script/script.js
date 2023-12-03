function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }


  function toggleCategory(element) {
    // Remove the active class from all category elements
    document.querySelectorAll('.new-products, .prices, .popular-products').forEach(function (el) {
        el.classList.remove('active-category');
    });

    // Add the active class to the clicked category element
    element.classList.add('active-category');
}

//slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active', 'prev', 'next'));
    slides[index].classList.add('active');
    slides[(index + 1) % slides.length].classList.add('next');
    slides[(index - 1 + slides.length) % slides.length].classList.add('prev');
    
     // Highlight the active dot
    //dots.forEach(dot => dot.classList.remove('active-dot'));
    //dots[index].classList.add('active-dot');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function goToSlide(index) {
    currentSlide = index;
    showSlide(currentSlide);
}

showSlide(currentSlide);

// Auto advance to the next slide every 3 seconds
setInterval(nextSlide, 5000);



function increase() {
  let numberInput = document.getElementById('number');
  let currentValue = parseInt(numberInput.value, 10);
  numberInput.value = currentValue + 1;
}

function decrease() {
  let numberInput = document.getElementById('number');
  let currentValue = parseInt(numberInput.value, 10);
  if (currentValue > 1) {
    numberInput.value = currentValue - 1;
  }
}


function playVideo() {
  var videoContainer = document.querySelector(".video-container");
  var iframe = document.getElementById("youtubeVideo");
  var playButton = document.querySelector(".play-button");

  playButton.style.display="none";
  videoContainer.classList.add("hide-before");


  // Remove the thumbnail
  videoContainer.removeChild(videoContainer.childNodes[1]);

  // Update the z-index of the play button and start playing the video
  playButton.style.zIndex = 0;
  iframe.src = iframe.src.replace("autoplay=0", "autoplay=1");
}