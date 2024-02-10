import displayInit from "./initPageLoad";
import displayHome from "./home.js";
import displayMenu from "./menu";
import displayAbout from "./about";
import "./style.css";

const body = document.body;
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const about = document.getElementById("about");

home.addEventListener("click", () => {
    switchTab.initHome();
});

menu.addEventListener("click", () => {
    switchTab.initMenu();
});

about.addEventListener("click", () => {
    switchTab.initAbout();
});

document.addEventListener("DOMContentLoaded", () => {
    displayInit();
});

const clearPage = () => {
    const content = document.getElementById("content");
    content.textContent = "";

    body.classList.remove("background-img-home");
    body.classList.remove("background-img-menu");
    body.classList.remove("background-img-about");
    body.classList.remove("background-init");
}

// Tab switching logic
const switchTab = {
    initHome() {
        clearPage();
        displayHome();
        body.classList.add("background-img-home");
    },

    initMenu() {
        clearPage();
        displayMenu();
        body.classList.add("background-img-menu");
    },

    initAbout() {
        clearPage();
        displayAbout();
        body.classList.add("background-img-about");
    }
};