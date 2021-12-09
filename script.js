const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");

  if (navbarLinks.classList[1] == "active") {
    disableScrolling();
    $('body').bind('touchmove', function(e){e.preventDefault()});
    console.log("scrolling disabled");
  } else {
    
    enableScrolling();
    $('body').unbind('touchmove');
    console.log("scrolling enabled");
  }
});




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


