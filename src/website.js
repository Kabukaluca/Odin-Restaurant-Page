export default createNavbar;
import Logo from "./images/restaurant-Troja-logo-white.png";

function createNavbar() {
    // Create Elements
    const header = document.querySelector("header");
    const navContainer = document.createElement("div");
    const navbar = document.createElement("nav");
    const logo = new Image();
    const home = document.createElement("button");
    const menu = document.createElement("button");
    const about = document.createElement("button");


    // Set Content 
    home.textContent = "Home";
    menu.textContent = "Menu";
    about.textContent = "About";

    logo.src = Logo;

    // Set Id 
    navContainer.classList.add("nav-container");
    home.id = "home";
    menu.id = "menu";
    about.id = "about";
    logo.id = "logo";


    // Append 
    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(about);
    navContainer.appendChild(logo);
    navContainer.appendChild(navbar);
    header.appendChild(navContainer);
};