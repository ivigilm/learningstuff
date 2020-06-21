// Premade function that allows a function to run only every 20 miliseconds top
function debounce(func, wait = 200, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkImages() {
  sliderImages.forEach(image => {
    const bottomLine = window.scrollY + window.innerHeight;
    const halfImageOffset = image.offsetTop + image.height / 2;
    if (bottomLine >= halfImageOffset) image.classList.add('active');
    if (window.scrollY > image.offsetTop + image.height) image.classList.remove('active');
  });
}

window.addEventListener('scroll', debounce(checkImages));
