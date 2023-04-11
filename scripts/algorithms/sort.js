//Fonction qui retourne un tableau avec l'input présent dans le titre, les ingrédients ou la description de la recette
export function sortByInput(input, data) {
  let sortedRecipes = [];
  for (let i = 0; i < data.length; i++) {
    const { ingredients, name, description } = data[i];
    if (name.includes(input)) {
      if (!sortedRecipes.includes(data[i])) {
        sortedRecipes.push(data[i]);
      }
    }
    if (description.includes(input)) {
      if (!sortedRecipes.includes(data[i])) {
        sortedRecipes.push(data[i]);
      }
    }
    for (let j = 0; j < ingredients.length; j++) {
      const { ingredient } = ingredients[j];
      if (ingredient.includes(input)) {
        if (!sortedRecipes.includes(data[i])) {
          sortedRecipes.push(data[i]);
        }
      }
    }
  }
  console.log(sortedRecipes);
  return sortedRecipes;
}
