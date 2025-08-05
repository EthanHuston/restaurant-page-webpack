import { renderHome } from "./home";

const contentDiv = document.querySelector("#content");
function loadSite() {
  renderHomePage();
}

function renderHomePage() {
  contentDiv.innerHTML = "";
  renderHome();
}
function renderMenuPage() {}
function renderContactPage() {}

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

export { loadSite, createHTML };
