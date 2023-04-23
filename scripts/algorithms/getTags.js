//Fonction qui récupère tous les appareils différents de la BD et les retourne dans un tableau
export function getDevices(recipes) {
  let devicesTag = [];
  for (let i = 0; i < recipes.length; i++) {
    if (!devicesTag.includes(recipes[i].appliance)) {
      devicesTag.push(recipes[i].appliance);
    }
  }
  devicesTag.sort();
  return devicesTag;
}

//Fonction qui récupère tous les ingrédients différents de la BD
export function getIngredients(recipes) {
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

//Fonction qui récupère tous les ustensils différents de la BD
export function getUstensils(recipes) {
  let ustensilsTags = [];
  for (let i = 0; i < recipes.length; i++) {
    const { ustensils } = recipes[i];
    for (let j = 0; j < ustensils.length; j++) {
      if (!ustensilsTags.includes(ustensils[j])) {
        ustensilsTags.push(ustensils[j]);
      }
    }
  }
  ustensilsTags.sort();
  return ustensilsTags;
}
