import { createHTML } from "./app";
import friedChickHome from "../assets/fried-chicken-home.jpg";
import "../styles/home.css";

function renderHome() {
  const contentDiv = document.querySelector("#content");

  const container = createHTML("div", null, ["home-container"], null);
  const welcomeH2 = createHTML(
    "h2",
    null,
    ["welcome"],
    "Welcome to Than's Fried Chicken!"
  );
  const infoPara = createHTML(
    "p",
    null,
    ["home-info"],
    "The best breaded bird this side of the Brooklyn Bridge"
  );
  const chickenImage = createHTML("img", null, ["home-image"]);

  chickenImage.src = friedChickHome;
  chickenImage.alt = "Fried Chicken";
  const attribution = createHTML("p", null, ["attribution"], "Photo by: ");
  const link = createHTML("a", null, ["link"], "Lucas Andrade");
  link.href =
    "https://unsplash.com/@lucaslafotografia?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash";

  container.appendChild(welcomeH2);
  container.appendChild(infoPara);
  container.appendChild(chickenImage);
  attribution.appendChild(link);
  container.appendChild(attribution);
  contentDiv.appendChild(container);
}

export { renderHome };
