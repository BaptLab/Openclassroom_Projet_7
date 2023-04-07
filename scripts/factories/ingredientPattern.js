export function ingredientPattern(ingredients) {
  const ingredientsContainer = document.querySelector(".ingredients-container");
  ingredientsContainer.innerHTML = "";
  for (let i = 0; i < ingredients.length; i++) {
    let ingredientTag = document.createElement("span");
    ingredientTag.innerText = ingredients[i];
    ingredientTag.classList.add("tag");
    ingredientsContainer.appendChild(ingredientTag);
  }
}
