"use strict";

function openTab(evt, tabName) {
  // Get all elements with class="tab-content" and hide them
  const tabcontent = document.getElementsByClassName("tab-content");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tab-link" and remove the class "active"
  var tablinks = document.getElementsByClassName("tab-link");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Optionally: Set a default tab open on page load
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tab-link").click();
});
