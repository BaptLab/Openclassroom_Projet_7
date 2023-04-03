//Fonction qui récupère tous les ustensils différents de la BD
export function ustensils(recipes) {
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
