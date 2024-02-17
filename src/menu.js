export default displayMenu;

function displayMenu() {
    const headline = document.createElement("h1");
    headline.classList.add("menu-headline")
    headline.textContent = "The best of the Chefs";
    
    const container = document.createElement("div");
    container.classList.add("menu-content-container");
    container.appendChild(headline);

    const divContent = document.getElementById("content");


    class Meal {
    constructor(name, info) {
    this.name = name;
    this.info = info;
    }

    create() {
    let meal = document.createElement("div");
        meal.classList.add("menu-meal");

    let mealName = document.createElement("h3");
        mealName.classList.add("meal-name");
        mealName.textContent = `${this.name}`;

    let mealInfo = document.createElement("div");
        mealInfo.classList.add("meal-info");
        mealInfo.textContent = `${this.info}`;

    meal.appendChild(mealName);
    meal.appendChild(mealInfo);

    container.appendChild(meal);
    divContent.appendChild(container);
    }
    };

    const meal1 = new Meal("Brad's Pizza", "Savor the epic flavors of Brad's Pizza, a culinary odyssey inspired by Troy's heroic tales, where each slice conquers your taste buds triumphantly.");
    const meal2 = new Meal("Eric's Banana", "A Trojan delight with grilled plantains symbolizing epic sweetness, wrapped in savory stories, a culinary ode to Troy's legendary allure!");
    const meal3 = new Meal("Orlando's Spoon", "A culinary epic inspired by Troy, where grilled lamb, rosemary-infused potatoes, and ambrosia-like tzatziki unite in heroic gastronomic harmony.");
    const meal4 = new Meal("Saffron's Burritos", "A Trojan delight wrapped in golden tortillas, conquering taste buds with Mediterranean-inspired fillings. A culinary saga unfolds!");
    const meal5 = new Meal("Sean's Beans", "A hearty blend of Mediterranean flavors, inspired by the epic battles of Troy. Savor every bite, a heroic feast!");

    meal1.create();
    meal2.create();
    meal3.create();
    meal4.create();
    meal5.create();
};
