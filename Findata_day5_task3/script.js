// JavaScript code for toggling menu visibility
var hamburgerMenu = document.getElementById("hamburgerMenu");
var menu = document.getElementById("menu");

hamburgerMenu.addEventListener("click", function() {
  menu.classList.toggle("show-menu");
});
