export default displayAbout;

const divContent = document.getElementById("content");
const headline = document.createElement("h1");
const disclaimer = document.createElement("div");

class Paragraph {
    constructor(content) {
        this.content = content;
    }

    create() {
        let paragraph = document.createElement("p");
        paragraph.classList.add("about-paragraph");
        paragraph.textContent = `${this.content}`;

        disclaimer.appendChild(paragraph);
    }
}

function displayAbout() {
    headline.textContent = "Disclaimer";
    headline.classList.add("about-headline");
    divContent.appendChild(headline);

    disclaimer.classList.add("disclaimer-container");
    divContent.appendChild(disclaimer);

    let p1 = new Paragraph('This website is a project developed by "The Odin Project" for educational purposes only. It is not a real website, and any resemblance to actual businesses or individuals is purely coincidental.');
    p1.create();

    let p2 = new Paragraph('The content and design of this website were inspired by "Troja - im Grünen Kranz," a Greek restaurant located in Munich-Laim. The photos used on this site are sourced from the mentioned restaurant. We acknowledge and appreciate the real restaurant for its fabulous food and beautiful ambiance, and we encourage visitors to experience it firsthand. This website does not aim to impersonate or replicate the real business, and its content is not representative of the actual offerings or services of "Troja - im Grünen Kranz."');
    p2.create();

    let p3 = new Paragraph('For accurate information about the restaurant, its menu, and services, please visit the official website or contact "Troja - im Grünen Kranz" directly.');
    p3.create();

    let p4 = new Paragraph('Thank you for understanding the educational nature of this project and respecting the authenticity of the real establishment.');
    p4.create();
};
