import initPageLoad from "./initPageLoad";
import displayMenu from "./menu";
import displayAbout from "./about";
import "./style.css";

const body = document.body;
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const about = document.getElementById("about");

home.addEventListener("click", () => {
    switchTab();
    initPageLoad();
    body.classList.add("background-img-home");
});

menu.addEventListener("click", () => {
    switchTab();
    displayMenu();
    body.classList.add("background-img-menu");
});

about.addEventListener("click", () => {
    switchTab();
    displayAbout();
    body.classList.add("background-img-about");
});

document.addEventListener("DOMContentLoaded", () => {
    initPageLoad();
});


// Tab switching logic
const switchTab = () => {
    const content = document.getElementById("content");
    body.classList.remove("background-img-home");
    body.classList.remove("background-img-menu");
    body.classList.remove("background-img-about");
    content.textContent = "";
};