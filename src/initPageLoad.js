export default initLoad;
import Troja from "./images/restaurant-troja-door.jpg";

const divContent = document.getElementById("content");
const container = document.createElement("div");
const headline = document.createElement("h1");
const imgPlaceholder = document.createElement("div");
const subText = document.createElement("h2");
const image = new Image();
const body = document.body;

function initLoad() {
    container.classList.add("init-content-container");

    headline.textContent = "This is Troja!"
    headline.classList.add("init-headline");
    container.appendChild(headline);

    /*
    image.src = Troja;
    imgPlaceholder.appendChild(image);
    imgPlaceholder.classList.add("placeholder");
    divContent.appendChild(imgPlaceholder);
    */

    subText.textContent = "Myth, Legend, Restaurant."
    subText.classList.add("sub-text")
    container.appendChild(subText);

    divContent.appendChild(container)
    body.classList.add("background-init");
}