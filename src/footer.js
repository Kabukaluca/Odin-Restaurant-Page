export default createFooter;

const footer = document.getElementById("footer");
const footerContainer = document.createElement("div");
const content = document.createElement("div");

const date = new Date();
const year = date.getFullYear();

function createFooter() {
    footerContainer.classList.add("footer-container");
    content.classList.add("footer-content");
    content.textContent = `© ${year} Kabukaluca `;

    footerContainer.appendChild(content);
    footer.appendChild(footerContainer);
};