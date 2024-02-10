export default displayMenu;

function displayMenu() {
    const headline = document.createElement("h1");
    headline.classList.add("menu-headline")
    headline.textContent = "The best of the Chefs";
    
    const divContent = document.getElementById("content");
    divContent.appendChild(headline);

    const container = document.createElement("div");
    container.classList.add("menu-content-container");


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

    const meal1 = new Meal("Brad's Pizza", "This is Brad's Fav!");
    const meal2 = new Meal("Eric's Banana", "This is Eric's Fav!");
    const meal3 = new Meal("Orlando's Spoon", "No worries, it's a huge one!");
    const meal4 = new Meal("Saffron's Burritos", "The only bad one, is the one you didn't eat!");
    const meal5 = new Meal("Sean's Beans", "You know how many make five?");

    meal1.create();
    meal2.create();
    meal3.create();
    meal4.create();
    meal5.create();
};
