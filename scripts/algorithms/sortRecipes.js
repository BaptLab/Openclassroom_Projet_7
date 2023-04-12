//Fonction qui retourne un tableau avec l'input présent dans le titre, les ingrédients ou la description de la recette
export function sortByInput(data) {
  let input = document.querySelector("#search-input").value.trim().toLowerCase();
  let sortedRecipes = [];
  for (let i = 0; i < data.length; i++) {
    const { ingredients, name, description } = data[i];
    if (name.toLowerCase().includes(input)) {
      if (!sortedRecipes.includes(data[i])) {
        sortedRecipes.push(data[i]);
      }
    }
    if (description.toLowerCase().includes(input)) {
      if (!sortedRecipes.includes(data[i])) {
        sortedRecipes.push(data[i]);
      }
    }
    for (let j = 0; j < ingredients.length; j++) {
      const { ingredient } = ingredients[j];
      if (ingredient.toLowerCase().includes(input)) {
        if (!sortedRecipes.includes(data[i])) {
          sortedRecipes.push(data[i]);
        }
      }
    }
  }
  return sortedRecipes;
}
