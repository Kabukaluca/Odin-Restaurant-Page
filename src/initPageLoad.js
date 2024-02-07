export default initLoad;
import Troja from "./images/restaurant-troja.jpg";

const divContent = document.getElementById("content");
const headline = document.createElement("h2");
const imgPlaceholder = document.createElement("div");
const subText = document.createElement("div");
const image = new Image();

function initLoad() {
    headline.textContent = "This is Troy!"
    headline.classList.add("headline");
    divContent.appendChild(headline);

    image.src = Troja;
    imgPlaceholder.appendChild(image);
    imgPlaceholder.classList.add("placeholder");
    divContent.appendChild(imgPlaceholder);

    subText.textContent = "You may have heard about us from anchient sources, but we promise: This is WAY better!"
    subText.classList.add("sub-text")
    divContent.appendChild(subText);
}