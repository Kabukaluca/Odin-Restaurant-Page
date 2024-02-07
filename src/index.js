import initPageLoad from "./initPageLoad";
import displayMenu from "./menu";
import displayAbout from "./about";
import "./style.css";

const content = document.getElementById("content");
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const about = document.getElementById("about");

home.addEventListener("click", () => {
    switchTab();
    initPageLoad();
    // content.classList.add("background-img-home");
});

menu.addEventListener("click", () => {
    switchTab();
    displayMenu();
    content.classList.add("background-img-menu");
});

about.addEventListener("click", () => {
    switchTab();
    displayAbout();
    // content.classList.add("background-img-about");
});

document.addEventListener("DOMContentLoaded", () => {
    initPageLoad();
});




// Tab switching logic
const switchTab = () => {
    const content = document.getElementById("content");
    // content.classList.remove("background-img-home");
    // content.classList.remove("background-img-menu");
    // content.classList.remove("background-img-about");
    content.textContent = "";
};