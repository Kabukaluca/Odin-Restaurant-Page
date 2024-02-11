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
    switchTab.initHome();
});

const clearPage = () => {
    const content = document.getElementById("content");
    content.textContent = "";

    body.classList.remove("background-img-home");
    body.classList.remove("background-img-menu");
    body.classList.remove("background-img-about");
};

const displayActive = (page) => {
    this.page = page;
    let element = document.getElementById(`${this.page}`)
    element.classList.add(`active`);
};

const removeActive = (page) => {
    this.page = page;
    let element = document.getElementById(`${this.page}`)
    element.classList.remove(`active`);
};

// Tab switching logic
const switchTab = {
    initHome() {
        clearPage();
        //removeActive(home)
        //displayActive(home)
        displayHome();
        body.classList.add("background-img-home");
    },

    initMenu() {
        clearPage();
        //removeActive(menu);
        //displayActive(menu);
        displayMenu();
        body.classList.add("background-img-menu");
    },

    initAbout() {
        clearPage();
        //removeActive(about);
        //displayActive(about);
        displayAbout();
        body.classList.add("background-img-about");
    }
};