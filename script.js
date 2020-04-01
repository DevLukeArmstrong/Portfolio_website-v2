/* Nav Bar*/
// When the user scrolls the page, execute myFunction
window.onscroll = function() {navBarStick()};

// Get the navbar
var navbar = document.getElementById("nav-container");

var sticky = navbar.offsetTop;

function navBarStick() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function goto(url)
{
window.location=url;

}


function increaseResume(x) {
    document.getElementById(x).style.width = "100%";
    document.getElementById(x).style.height = "100%";

    // document.getElementById(x).style.transition-duration = "0.2s";
}

function decreaseResume(x) {
    document.getElementById(x).style.width = "98%";
    document.getElementById(x).style.height = "98%";
}

function overlayOn(x) {
    document.getElementById(x).style.display = "block";
}

function overlayOff(x) {
    document.getElementById(x).style.display = "none";
}

