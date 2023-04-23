export function sortByInput(data) {
  const input = document.querySelector("#search-input").value.toLowerCase();
  const sortedRecipes = [];
  for (let i = 0; i < data.length; i++) {
    const { ingredients, name, description } = data[i];
    if (name.toLowerCase().includes(input)) {
      sortedRecipes.push(data[i]);
      continue;
    } else if (description.toLowerCase().includes(input)) {
      sortedRecipes.push(data[i]);
      continue;
    }
    for (let j = 0; j < ingredients.length; j++) {
      const { ingredient } = ingredients[j];
      if (ingredient.toLowerCase().includes(input)) {
        sortedRecipes.push(data[i]);
        break;
      }
    }
  }
  return sortedRecipes;
}
