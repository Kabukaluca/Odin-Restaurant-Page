import displayHome from "./home.js";
import displayMenu from "./menu";
import displayAbout from "./about";
import createNavbar from "./website.js";
import createFooter from "./footer.js";
import "./style.css";

createNavbar();
createFooter();

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

const toggleActive = (page) => {
    home.classList.remove("active");
    menu.classList.remove("active");
    about.classList.remove("active");

    page.classList.add("active");
};

// Tab switching logic
const switchTab = {
    initHome() {
        clearPage();
        toggleActive(home);
        displayHome();
        body.classList.add("background-img-home");
    },

    initMenu() {
        clearPage();
        toggleActive(menu);
        displayMenu();
        body.classList.add("background-img-menu");
    },

    initAbout() {
        clearPage();
        toggleActive(about);
        displayAbout();
        body.classList.add("background-img-about");
    }
};