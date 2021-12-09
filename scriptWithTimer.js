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


var timeleft = 4;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
  }
  document.getElementById("counter").innerHTML = timeleft;
  timeleft -= 1;
}, 1000);


