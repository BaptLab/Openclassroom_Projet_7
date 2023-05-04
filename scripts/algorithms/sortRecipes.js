//Fonction qui filtre les recettes comprenant l'input et les intègre dans un autre tableau
export function sortByInput(data) {
  const input = document.querySelector("#search-input").value.toLowerCase();
  let sortedRecipes = data.filter((recipe) => {
    const { name, description, ingredients } = recipe;
    if (name.toLowerCase().includes(input)) {
      return true;
    } else if (description.toLowerCase().includes(input)) {
      return true;
    } else if (
      ingredients.some((ingredients) =>
        ingredients.ingredient.toLowerCase().includes(input)
      )
    ) {
      return true;
    } else {
      return false;
    }
  });
  return sortedRecipes;
}
