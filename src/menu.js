export default displayMenu;

const divContent = document.getElementById("content");
const headline = document.createElement("h2");
const meal1 = document.createElement("div");
const meal2 = document.createElement("div");
const meal3 = document.createElement("div");
const meal4 = document.createElement("div");
const meal5 = document.createElement("div");

function displayMenu() {
    headline.textContent = "The best of the Chef's";
    headline.classList.add("headline");
    divContent.appendChild(headline);

    meal1.textContent = "Brad's Pizza";
    meal1.classList.add("menu-meal");
    divContent.appendChild(meal1);

    meal2.textContent = "Eric's Banana";
    meal2.classList.add("menu-meal");
    divContent.appendChild(meal2);

    meal3.textContent = "Orlando's Spoon";
    meal3.classList.add("menu-meal");
    divContent.appendChild(meal3);

    meal4.textContent = "Sean's Beans";
    meal4.classList.add("menu-meal");
    divContent.appendChild(meal4);

    meal5.textContent = "Saffron's Burritos";
    meal5.classList.add("menu-meal");
    divContent.appendChild(meal5);
}