export default displayAbout;

function displayAbout() {
    const divContent = document.getElementById("content");
    const headline = document.createElement("h1");
    headline.classList.add("about-headline");
    headline.textContent = "Disclaimer";

    const container = document.createElement("div");
    container.classList.add("about-container");
    container.appendChild(headline);

    class Paragraph {
        constructor(content) {
            this.content = content;
        }

        create() {
            let paragraph = document.createElement("p");
            paragraph.classList.add("about-paragraph");
            paragraph.textContent = `${this.content}`;

            container.appendChild(paragraph);
            divContent.appendChild(container);
        }
    };

    let p1 = new Paragraph('This website is a project developed by "The Odin Project" for educational purposes only. It is not a real website, and any resemblance to actual businesses or individuals is purely coincidental.');
    let p2 = new Paragraph('The content and design of this website were inspired by "Troja - im Grünen Kranz," a Greek restaurant located in Munich-Laim. The photos used on this site are sourced from the mentioned restaurant. We acknowledge and appreciate the real restaurant for its fabulous food and beautiful ambiance, and we encourage visitors to experience it firsthand. This website does not aim to impersonate or replicate the real business, and its content is not representative of the actual offerings or services of "Troja - im Grünen Kranz."');
    let p3 = new Paragraph('For accurate information about the restaurant, its menu, and services, please visit the official website or contact "Troja - im Grünen Kranz" directly.');
    let p4 = new Paragraph('Thank you for understanding the educational nature of this project and respecting the authenticity of the real establishment.');

    p1.create();
    p2.create();
    p3.create();
    p4.create();
};
