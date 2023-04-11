export function ingredientPattern(ingredients) {
  const ingredientsContainer = document.querySelector(".ingredients-container");
  ingredientsContainer.innerHTML = "";
  if (ingredients.length === 0) {
    ingredientsContainer.innerHTML =
      '<span class="tag-error">Aucun ingrédient ne correspond à votre recherche</span>';
  }
  for (let i = 0; i < ingredients.length; i++) {
    let ingredientTag = document.createElement("span");
    ingredientTag.innerText = ingredients[i];
    ingredientTag.classList.add("tag");
    ingredientsContainer.appendChild(ingredientTag);
  }
}
