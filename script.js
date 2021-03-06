const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const $body = document.querySelector('body');
let scrollPosition = 0;


toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");

  if (navbarLinks.classList[1] == "active") {
    enable();    
  } else {
    disable();
  }
});


function enable() {
  scrollPosition = window.scrollY;
  $body.style.overflow = 'hidden';
  $body.style.position = 'fixed';
  // $body.style.top = `-${scrollPosition}px`;
  $body.style.top = 0;
  $body.style.width = '100%';
};

function disable() {
  $body.style.removeProperty('overflow');
  $body.style.removeProperty('position');
  $body.style.removeProperty('top');
  $body.style.removeProperty('width');
  window.scrollTo(0, scrollPosition);
};
