export default displayHome;

const divContent = document.getElementById("content");
const container = document.createElement("div");
const headline = document.createElement("h1");
const subText = document.createElement("h2");
const body = document.body;

function displayHome() {
    container.classList.add("home-content-container");

    headline.textContent = "This is Troja!"
    headline.classList.add("home-headline");
    container.appendChild(headline);

    subText.textContent = "Myth, Legend, Restaurant."
    subText.classList.add("sub-text")
    container.appendChild(subText);

    divContent.appendChild(container)
    body.classList.add("background-img-home");
}