const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  
  if (navbarLinks.classList[1] == "active") {
    disableScrolling();
    console.log("scrolling disabled");
  } else {
    enableScrolling();
    console.log("scrolling enabled");
  }
  
});


function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function () {
    window.scrollTo(x, y);
  };
}

function enableScrolling() {
  window.onscroll = function () {};
}




