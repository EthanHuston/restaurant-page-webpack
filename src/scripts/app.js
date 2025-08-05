import { renderHome } from "./home";
import { renderMenu } from "./menu";
import { renderContact } from "./contact";

const contentDiv = document.querySelector("#content");
const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");

function loadSite() {
  renderHomePage();
}

function renderHomePage() {
  contentDiv.innerHTML = "";
  renderHome();
}
function renderMenuPage() {
  contentDiv.innerHTML = "";
  renderMenu();
}
function renderContactPage() {
  contentDiv.innerHTML = "";
  renderContact();
}

//Funtion to standardize the creation of HTML elements in the DOM
// Inspired by and taken from Ginner Zapata on Github @ginnerzapata
function createHTML(type, id, classesArr, content) {
  const element = document.createElement(type);
  if (id) element.id = id;
  if (classesArr) {
    classesArr.forEach((myClass) => element.classList.add(myClass));
  }
  if (content) element.textContent = content;

  return element;
}

homeButton.addEventListener("click", renderHomePage);
menuButton.addEventListener("click", renderMenuPage);
contactButton.addEventListener("click", renderContactPage);

export { loadSite, createHTML };
