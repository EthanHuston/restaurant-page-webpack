import { createHTML } from "./app";
import "../styles/contact.css";

function renderContact() {
  const contentDiv = document.querySelector("#content");

  const container = createHTML("div", null, ["contact-container"], null);

  const name = createHTML("h2", null, ["contact-name"], "Ethan Huston");
  const email = createHTML(
    "p",
    null,
    ["contact-email"],
    "ethanghuston@gmail.com"
  );

  const number = createHTML("p", null, ["contact-number"], "555-555-5555");
  const message = createHTML(
    "p",
    null,
    ["contact-message"],
    "Thank you for visiting!"
  );

  container.appendChild(name);
  container.appendChild(email);
  container.appendChild(number);
  container.appendChild(message);
  contentDiv.appendChild(container);
}

export { renderContact };
