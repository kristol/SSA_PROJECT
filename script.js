const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const $body = document.querySelector('body');
let scrollPosition = 0;


toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");

  if (navbarLinks.classList[1] == "active") {
    enable();    
    console.log("scrolling disabled");
  } else {
    disable();
    console.log("scrolling enabled");
  }
});


function enable() {
  scrollPosition = window.pageYOffset;
  $body.style.overflow = 'hidden';
  $body.style.position = 'fixed';
  $body.style.top = `-${scrollPosition}px`;
  $body.style.width = '100%';
};

function disable() {
  $body.style.removeProperty('overflow');
  $body.style.removeProperty('position');
  $body.style.removeProperty('top');
  $body.style.removeProperty('width');
  window.scrollTo(0, scrollPosition);
}

/*
function preventDefault(e){
  e.preventDefault();
}

function disableScroll(){
  document.body.addEventListener('touchmove', preventDefault, { passive: false });
}

function enableScroll(){
  document.body.removeEventListener('touchmove', preventDefault);
}


function disableScrolling() {
  TopScroll = window.pageYOffset || document.documentElement.scrollTop;
  LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,
  window.onscroll = function () {
    window.scrollTo(TopScroll, LeftScroll);
  };
}

function enableScrolling() {
  window.onscroll = function () {};
}
*/

