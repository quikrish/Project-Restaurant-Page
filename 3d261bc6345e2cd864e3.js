import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";
import "./style.css";

function initializeWebsite() {
  // Load home page on initial load

  loadHome();

  setupEventListeners();
}

function setupEventListeners() {
  const homeBtn = document.getElementById("homeBtn");
  const menuBtn = document.getElementById("menuBtn");
  const contactBtn = document.getElementById("contactBtn");

  homeBtn.addEventListener("click", function () {
    clearContent();
    loadHome();
  });
  menuBtn.addEventListener("click", function () {
    clearContent();
    loadMenu();
  });
  contactBtn.addEventListener("click", function () {
    clearContent();
    loadContact();
  });
}

function clearContent() {
  const divContent = document.getElementById("content");
  divContent.textContent = "";
}

initializeWebsite();
