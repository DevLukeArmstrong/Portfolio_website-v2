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
var resumeTop = resumepage.offsetTop - 10;
var projectsTop = projectspage.offsetTop;
var contactTop = contactpage.offsetTop;

var aboutBottom = aboutpage.offsetTop + aboutpage.offsetHeight - 10;
var resumeBottom = resumepage.offsetTop + resumepage.offsetHeight;
var projectsBottom = projectspage.offsetTop + projectspage.offsetHeight;
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

/******************************** About buttons */
function openDescription(lang)
{
  switch(lang) {
    case "c++":
      if (document.getElementById("c++-description").classList.contains("description-show"))
      {
        document.getElementById("c++-p").classList.remove("p-show");
        document.getElementById("c++-description").classList.remove("description-show");
      }
      else {
        document.getElementById("c++-description").classList.add("description-show");
        document.getElementById("c++-p").classList.add("p-show");
      }
      break;
    case "python":
      if (document.getElementById("python-description").classList.contains("description-show"))
      {
        document.getElementById("python-p").classList.remove("p-show");
        document.getElementById("python-description").classList.remove("description-show");
      }
      else {
        document.getElementById("python-description").classList.add("description-show");
        document.getElementById("python-p").classList.add("p-show");
      }
      break;
    case "bash":
      if (document.getElementById("bash-description").classList.contains("description-show"))
      {
        document.getElementById("bash-p").classList.remove("p-show");
        document.getElementById("bash-description").classList.remove("description-show");
      }
      else {
        document.getElementById("bash-description").classList.add("description-show");
        document.getElementById("bash-p").classList.add("p-show");
      }
      break;
    case "html":
      if (document.getElementById("html-description").classList.contains("description-show"))
      {
        document.getElementById("html-p").classList.remove("p-show");
        document.getElementById("html-description").classList.remove("description-show");
      }
      else {
        document.getElementById("html-description").classList.add("description-show");
        document.getElementById("html-p").classList.add("p-show");
      }
      break;
    case "css":
      if (document.getElementById("css-description").classList.contains("description-show"))
      {
        document.getElementById("css-p").classList.remove("p-show");
        document.getElementById("css-description").classList.remove("description-show");
      }
      else {
        document.getElementById("css-description").classList.add("description-show");
        document.getElementById("css-p").classList.add("p-show");
      }
      break;
    case "js":
      if (document.getElementById("js-description").classList.contains("description-show"))
      {
        document.getElementById("js-p").classList.remove("p-show");
        document.getElementById("js-description").classList.remove("description-show");
      }
      else {
        document.getElementById("js-description").classList.add("description-show");
        document.getElementById("js-p").classList.add("p-show");
      }
      break;
    case "c#":
      if (document.getElementById("c#-description").classList.contains("description-show"))
      {
        document.getElementById("c#-p").classList.remove("p-show");
        document.getElementById("c#-description").classList.remove("description-show");
      }
      else {
        document.getElementById("c#-description").classList.add("description-show");
        document.getElementById("c#-p").classList.add("p-show");
      }
      break;
    case "golang":
      if (document.getElementById("golang-description").classList.contains("description-show"))
      {
        document.getElementById("golang-p").classList.remove("p-show");
        document.getElementById("golang-description").classList.remove("description-show");
      }
      else {
        document.getElementById("golang-description").classList.add("description-show");
        document.getElementById("golang-p").classList.add("p-show");
      }
      break;
    default:
      console("Error: About skills button section not coded.");
  }
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

function resumeClick() {
  coll.classList.toggle("resume-active");
  var content = document.getElementById("resume-content-holder");
  if (content.style.maxHeight){
    content.style.maxHeight = null;
    document.getElementById("arrow-down").style.visibility="visible"
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    document.getElementById("arrow-down").style.visibility="hidden";
  }
}

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

