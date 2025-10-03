const recipes = [
  {
    name: "Tomato Rice",
    ingredients: ["tomato", "rice", "onion"],
    steps: "Cook rice, fry onions & tomatoes, mix together with spices."
  },
  {
    name: "Vegetable Curry",
    ingredients: ["potato", "carrot", "onion", "tomato"],
    steps: "Boil vegetables, add spices, cook in tomato-onion gravy."
  },
  {
    name: "Egg Omelette",
    ingredients: ["egg", "onion", "tomato"],
    steps: "Whisk eggs, add chopped onion & tomato, fry on pan."
  },
  {
    name: "Fried Rice",
    ingredients: ["rice", "egg", "carrot", "onion"],
    steps: "Fry vegetables & eggs, mix with cooked rice & soy sauce."
  }
];

// Function to find recipes
function findRecipes() {
  const input = document.getElementById("ingredientInput").value.toLowerCase();
  const inputIngredients = input.split(",").map(i => i.trim());

  const resultsDiv = document.getElementById("recipeResults");
  resultsDiv.innerHTML = "";

  const matchedRecipes = recipes.filter(recipe =>
    inputIngredients.every(ing => recipe.ingredients.includes(ing))
  );

  if (matchedRecipes.length > 0) {
    matchedRecipes.forEach(recipe => {
      const card = document.createElement("div");
      card.classList.add("recipe-card");
      card.innerHTML = `
        <h3>${recipe.name}</h3>
        <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
        <p><strong>Steps:</strong> ${recipe.steps}</p>
      `;
      resultsDiv.appendChild(card);
    });
  } else {
    resultsDiv.innerHTML = "<p>No recipes found. Try different ingredients.</p>";
  }
}
