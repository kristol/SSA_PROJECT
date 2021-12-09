const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");

  if (navbarLinks.classList[1] == "active") {
    document.body.style.overflow = 'hidden';
    disableScrolling();
    console.log("scrolling disabled");
  } else {
    document.body.style.overflow = 'auto';
    
    enableScrolling();
    console.log("scrolling enabled");
  }

  while(navbarLinks.classList[1] == "active"){
    $('body').bind('touchmove', function(e){e.preventDefault()})
  }
  $('body').unbind('touchmove')
  
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


