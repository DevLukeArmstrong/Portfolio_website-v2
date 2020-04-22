/******************************** Nav Bar*/
// When the user scrolls the page, execute myFunction
window.onscroll = function() {navBarStick()};

// Get the navbar
var navbar = document.getElementById("nav-container");
var sticky = navbar.offsetTop;

function navBarStick() {

  if (window.pageYOffset >= sticky)
   {
    navbar.classList.add("sticky")
  }
  else
  {
    navbar.classList.remove("sticky");
  }
}

function goto(url)
{
  window.location=url;
}

/******************************** Contact buttons */
function openLink(link) {
  switch(link)
  {
    case 'instagram':
      window.open("https://www.instagram.com/luke__armstrong/");
      break;
    case 'twitter':
      window.open("https://twitter.com/LukeArm29378032");
      break;
    case 'github':
      window.open("https://github.com/DevLukeArmstrong");
      break;
    case 'linkden':
      window.open("https://www.linkedin.com/in/luke-armstrong96/");
      break;
    case 'email':
      window.open("https://www.instagram.com/luke__armstrong/");
      break;
    default:
      console.log("Unknown link: " + link);
      break;
  }
}

/******************************** Resume */
var coll = document.getElementById("resume-button");
var i;

coll.addEventListener("click", function() {
  this.classList.toggle("resume-active");
  var content = this.nextElementSibling;
  if (content.style.maxHeight){
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
});

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

