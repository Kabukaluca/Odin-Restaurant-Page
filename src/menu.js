export default displayMenu;

function displayMenu() {
    const headline = document.createElement("h2");
    headline.textContent = "The best of the Chefs";
    
    const divContent = document.getElementById("content");
    divContent.appendChild(headline);


    class Meal {
    constructor(name, info) {
    this.name = name;
    this.info = info;
    }

    create() {
    let meal = document.createElement("div");
        meal.classList.add("menu-meal");

    let mealName = document.createElement("div");
        mealName.classList.add("mealName");
        mealName.textContent = `${this.name}`;

    let mealInfo = document.createElement("div");
        mealInfo.classList.add("mealInfo");
        mealInfo.textContent = `${this.info}`;

    meal.appendChild(mealName);
    meal.appendChild(mealInfo);

    divContent.appendChild(meal);
    console.log(`${this.name}`);
    }
    };

    const meal1 = new Meal("Brad's Pizza", "This is Brad's Fav!");
    const meal2 = new Meal("Eric's Banana", "This is Eric's Fav!");
    const meal3 = new Meal("Orlando's Spoon", "This is Orlando's secret sauce!");
    const meal4 = new Meal("Saffron's Burritos", "The only bad one, is the one you didn't eat!");
    const meal5 = new Meal("Sean's Beans", "You know how many make five?");

    meal1.create();
    meal2.create();
    meal3.create();
    meal4.create();
    meal5.create();
};
