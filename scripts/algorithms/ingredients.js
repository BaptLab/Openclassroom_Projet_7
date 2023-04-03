//Fonction qui récupère tous les ingrédients différents de la BD
export function ingredients(recipes) {
  let ingredientTags = [];
  for (let i = 0; i < recipes.length; i++) {
    const { ingredients } = recipes[i];
    for (let j = 0; j < ingredients.length; j++) {
      if (!ingredientTags.includes(ingredients[j].ingredient)) {
        ingredientTags.push(ingredients[j].ingredient);
      }
    }
  }
  return ingredientTags.sort();
}
