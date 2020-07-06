/******************************** Nav Bar*/
// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  navBarStick()
};

// Get the navbar
var navbar = document.getElementById("nav-container");
var aboutpage = document.getElementById("about");
var resumepage = document.getElementById("resume");
var projectspage = document.getElementById("projects");
var contactpage = document.getElementById("contact");

var sticky = navbar.offsetTop;

var aboutTop = aboutpage.offsetTop - 10;
var resumeTop = resumepage.offsetTop;
var projectsTop = projectspage.offsetTop;
var contactTop = contactpage.offsetTop - 100;

var aboutBottom = aboutpage.offsetTop + aboutpage.offsetHeight;
var resumeBottom = resumepage.offsetTop + resumepage.offsetHeight;
var projectsBottom = projectspage.offsetTop + projectspage.offsetHeight - 100;
var contactBottom = contactpage.offsetTop + contactpage.offsetHeight;

var aboutLink = document.getElementById("about-nav-link");
var resumeLink = document.getElementById("resume-nav-link");
var projectsLink = document.getElementById("projects-nav-link");
var contactLink = document.getElementById("contact-nav-link");

var links = [aboutLink, resumeLink, projectsLink, contactLink]

function removeNavActive()
{
  var i;
  for (i = 0; i < links.length; i++) {
    if( links[i].classList.contains("active-red") )
    {
      links[i].classList.remove("active-red");
    }
  }
}

function navBarStick() {

  if (window.pageYOffset >= sticky)
   {
    navbar.classList.add("sticky")
  }
  else
  {
    navbar.classList.remove("sticky");
  }

  if (window.pageYOffset >= aboutTop & window.pageYOffset < aboutBottom)
  {
    removeNavActive();
    aboutLink.classList.add("active-red");
  }
  else if (window.pageYOffset >= resumeTop & window.pageYOffset < resumeBottom)
  {
    removeNavActive();
    resumeLink.classList.add("active-red");
  }
  else if (window.pageYOffset >= projectsTop & window.pageYOffset < projectsBottom)
  {
    removeNavActive();
    projectsLink.classList.add("active-red");
  }
  else if (window.pageYOffset >= contactTop & window.pageYOffset < contactBottom)
  {
    removeNavActive();
    contactLink.classList.add("active-red");
  }
  else {
    removeNavActive();
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
      window.open("mailto:ltarmstrong96@gmail.com");
      break;
    default:
      console.log("Unknown link: " + link);
      break;
  }
}

/******************************** Resume */
var coll = document.getElementById("resume-button");

coll.addEventListener("click", function() {
  this.classList.toggle("resume-active");
  var content = this.nextElementSibling;
  if (content.style.maxHeight){
    content.style.maxHeight = null;
    document.getElementById("arrow-down").style.visibility="visible"
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    setTimeout(document.getElementById("arrow-down").style.visibility="hidden", 500);
  }
});

var coll = document.getElementById("arrow-up");

coll.addEventListener("click", function() {
  var content = document.getElementById("resume-button").nextElementSibling;
  if (content.style.maxHeight){
    content.style.maxHeight = null;
    document.getElementById("arrow-down").style.visibility="visible"
  }
});

function resumeButtonHighlight(id){
  document.getElementById(id).style.backgroundColor = "#ccc";
  document.getElementById("arrow-down").style.borderTopColor = "#ccc";
}

function resumeButtonOriginal(id){
  document.getElementById(id).style.backgroundColor = "#e31b6d";
  document.getElementById("arrow-down").style.borderTopColor = "#e31b6d";
}

function increaseResume(x) {
    document.getElementById(x).style.width = "82%";
    document.getElementById(x).style.height = "82%";
    // document.getElementById("resume-preview-container").style.marginBottom = "2%";
}

function decreaseResume(x) {
    document.getElementById(x).style.width = "80%";
    document.getElementById(x).style.height = "80%";
}

function overlayOn(x) {
    document.getElementById(x).style.display = "block";
}

function overlayOff(x) {
    document.getElementById(x).style.display = "none";
}

