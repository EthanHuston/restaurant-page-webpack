import { createHTML } from "./app";
import itemOneImage from "../assets/menu-item-1.jpg";
import itemTwoImage from "../assets/menu-item-2.jpg";
import itemThreeImage from "../assets/menu-item-3.jpg";
import itemFourImage from "../assets/menu-item-4.jpg";
import "../styles/menu.css";

function renderMenu() {
  const contentDiv = document.querySelector("#content");

  const container = createHTML("div", null, ["menu-container"], null);
  const title = createHTML("h2", null, ["menu-title"], "Our Menu");
  const itemsDiv = createHTML("div", null, ["menu-grid"], null);

  const itemOne = createHTML("div", null, ["item-card"], null);
  const itemOneName = createHTML("h3", null, ["item-title"], "Than's Special");
  const itemOneDesc = createHTML(
    "p",
    null,
    ["item-desc"],
    "Spicy chicken bites served with barbeque sauce."
  );
  const itemOneImg = createHTML("img", null, ["item-image"], null);
  itemOneImg.src = itemOneImage;
  itemOneImg.alt = "Chicken bites with barbeque sauce";
  itemOne.appendChild(itemOneImg);
  itemOne.appendChild(itemOneName);
  itemOne.appendChild(itemOneDesc);
  itemsDiv.appendChild(itemOne);
  const itemTwo = createHTML("div", null, ["item-card"], null);
  const itemTwoName = createHTML("h3", null, ["item-title"], "Than's Sandy");
  const itemTwoDesc = createHTML(
    "p",
    null,
    ["item-desc"],
    "Fried chicken sandwitch on toasted bun."
  );
  const itemTwoImg = createHTML("img", null, ["item-image"], null);
  itemTwoImg.src = itemTwoImage;
  itemTwoImg.alt = "Fried Chicken sandwitch";
  itemTwo.appendChild(itemTwoImg);
  itemTwo.appendChild(itemTwoName);
  itemTwo.appendChild(itemTwoDesc);
  itemsDiv.appendChild(itemTwo);
  const itemThree = createHTML("div", null, ["item-card"], null);
  const itemThreeName = createHTML("h3", null, ["item-title"], "Than's Wrap");
  const itemThreeDesc = createHTML(
    "p",
    null,
    ["item-desc"],
    "Loaded and juicy chicken wrap."
  );
  const itemThreeImg = createHTML("img", null, ["item-image"], null);
  itemThreeImg.src = itemThreeImage;
  itemThreeImg.alt = "Juicy chicken wrap";
  itemThree.appendChild(itemThreeImg);
  itemThree.appendChild(itemThreeName);
  itemThree.appendChild(itemThreeDesc);
  itemsDiv.appendChild(itemThree);
  const itemFour = createHTML("div", null, ["item-card"], null);
  const itemFourName = createHTML("h3", null, ["item-title"], "Than's Salad");
  const itemFourDesc = createHTML(
    "p",
    null,
    ["item-desc"],
    "Chicken caesar salad with croutons."
  );
  const itemFourImg = createHTML("img", null, ["item-image"], null);
  itemFourImg.src = itemFourImage;
  itemFourImg.alt = "Chicken Salad";
  itemFour.appendChild(itemFourImg);
  itemFour.appendChild(itemFourName);
  itemFour.appendChild(itemFourDesc);
  itemsDiv.appendChild(itemFour);

  container.appendChild(title);
  container.appendChild(itemsDiv);
  contentDiv.appendChild(container);
}

export { renderMenu };
