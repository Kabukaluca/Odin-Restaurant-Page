export default displayAbout;

const divContent = document.getElementById("content");
const headline = document.createElement("h1");
const story = document.createElement("div");

function displayAbout() {
    headline.textContent = "About Troja";
    headline.classList.add("about-headline");
    divContent.appendChild(headline);

    story.textContent = "Welcome to Troja, where culinary excellence meets ancient allure! Troja is more than just a restaurant—it's a gastronomic odyssey that transcends time and taste.Inspired by the epic tales of the legendary city of Troy, our restaurant is a celebration of flavors that have withstood the test of centuries. Drawing inspiration from the rich tapestry of ancient civilizations, we bring you a dining experience that blends tradition with modern sophistication. Embark on a culinary journey as we transport you to a world where each dish tells a story, echoing the resilience and splendor of the ancient city itself. From the moment you step through our doors, you are greeted by an ambiance that mirrors the grandeur of the mythical Troy, creating an immersive dining experience. Our chefs, like skilled artisans, craft each dish with passion and precision, using only the finest ingredients sourced from local farmers and purveyors. The menu, a homage to the diverse flavors of the Mediterranean, invites you to savor every bite as if discovering a hidden treasure. At Troy, we believe in the power of shared moments and communal dining. Our inviting atmosphere is designed to encourage connections and conversations, much like the camaraderie that defined the ancient city's legendary walls. Whether you're gathering with friends, family, or colleagues, Troja is the perfect setting for creating lasting memories.Just as the heroes of old embarked on epic quests, our commitment is to provide you with an extraordinary dining experience that transcends expectations. Join us at Troja, where history, hospitality, and flavor converge to create a tale as timeless as the city that inspired it.";
    story.classList.add("story");
    divContent.appendChild(story);
}