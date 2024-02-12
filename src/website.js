export default createNavbar;
import Logo from "./images/restaurant-Troja-logo.png";

function createNavbar() {
    // Create Elements
    const header = document.querySelector("header");
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
    home.id = "home";
    menu.id = "menu";
    about.id = "about";
    logo.id = "logo";


    // Append 
    navbar.appendChild(home);
    navbar.appendChild(menu);
    navbar.appendChild(about);
    navbar.appendChild(logo);
    header.appendChild(navbar);
};