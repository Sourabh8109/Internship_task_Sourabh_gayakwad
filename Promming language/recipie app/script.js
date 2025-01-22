const recipes = [
    {
        name: "Grilled Chicken Salad",
        ingredients: ["chicken breast", "lettuce", "tomato", "cucumber", "olive oil", "lemon"],
        type: "Lunch",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtBNG4k8JOq92tFO1MuDtIDP37RFB3y0g4Vw&s"
    },
    {
        name: "Vegetable Stir-fry",
        ingredients: ["broccoli", "carrots", "bell peppers", "tofu", "soy sauce", "ginger"],
        type: "Breakfast",
        img: "https://www.inspiredtaste.net/wp-content/uploads/2022/04/Veggie-Stir-Fry-Recipe-3-1200-1200x800.jpg"
    },
    {
        name: "Classic Cheeseburger",
        ingredients: ["beef patty", "cheese", "lettuce", "tomato", "onion", "burger bun"],
        type: "Lunch",
        img: "https://leitesculinaria.com/wp-content/uploads/2020/02/classic-cheeseburger-1200.jpg"
    },
    {
        name: "Vegan Buddha Bowl",
        ingredients: ["quinoa", "chickpeas", "avocado", "sweet potato", "spinach", "sauce"],
        type: "Lunch",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVmE145ewLcvOHw7rwNPvcri_KYWjdF4L8w&s"
    },
    {
        name: "Pasta Primavera",
        ingredients: ["pasta", "zucchini", "cherry tomatoes", "bell pepper", "basil", "parmesan cheese"],
        type: "Breakfast",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeLuJsmqKYQHH5pP1hFmKSZ6fY1vh4D-1MiA&s"
    },
    {
        name: "Chicken Alfredo",
        ingredients: ["chicken", "pasta", "cream", "parmesan", "garlic", "butter"],
        type: "Dinner",
        img: "https://sugarspunrun.com/wp-content/uploads/2024/02/Chicken-alfredo-recipe-1-of-1.jpg"
    },
    {
        name: "Vegetable Soup",
        ingredients: ["carrots", "potatoes", "onions", "celery", "tomato", "vegetable broth"],
        type: "Dinner",
        img: "https://www.theroastedroot.net/wp-content/uploads/2020/09/easy-vegetable-soup-4.jpg"
    }
];

function loadRecipe(filteredRecipes) {
    const recipeContainer = document.getElementById("recipeResults");
    recipeContainer.innerHTML = "";

    if (filteredRecipes.length) {
        filteredRecipes.forEach((recipe) => {
            const recipeCard = `
                <div class="recipe-card">
                    <img src="${recipe.img}" alt="${recipe.name}">
                    <h3>${recipe.name}</h3>
                    <p>Ingredients: ${recipe.ingredients.join(", ")}</p>
                    <span>Type: ${recipe.type}</span>
                </div>
            `;
            recipeContainer.innerHTML += recipeCard;
        });
    } else {
        recipeContainer.innerHTML = `<p class="text-center text-gray-500">No recipes found.</p>`;
    }
}

function filterRecipe() {
    const foodSearch = document.getElementById("searchRecipe").value.toLowerCase();
    const filterType = document.getElementById("filterType").value;

    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(foodSearch) &&
        (!filterType || recipe.type.toLowerCase() === filterType.toLowerCase())
    );

    loadRecipe(filteredRecipes);
}

filterRecipe();