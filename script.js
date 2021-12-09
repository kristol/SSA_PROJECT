const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];



toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");

  if (navbarLinks.classList[1] == "active") {
    disableScroll();
 
    console.log("scrolling disabled");
  } else {
    enableScroll();

    console.log("scrolling enabled");
  }
});

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


