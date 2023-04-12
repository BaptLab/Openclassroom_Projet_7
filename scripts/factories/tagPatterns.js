//Fonction de création des tags (une fois récupérés via une autre fonction)
export function ingredientTagPattern(ingredients) {
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

export function ustensilsTagPattern(ustensils) {
  const ustensilsContainer = document.querySelector(".ustensils-container");
  ustensilsContainer.innerHTML = "";
  if (ustensils.length === 0) {
    ustensilsContainer.innerHTML =
      '<span class="tag-error">Aucun ustensil ne correspond à votre recherche</span>';
  }
  for (let i = 0; i < ustensils.length; i++) {
    let ustensilTag = document.createElement("span");
    ustensilTag.innerText = ustensils[i];
    ustensilTag.classList.add("tag");
    ustensilsContainer.appendChild(ustensilTag);
  }
}

export function deviceTagPattern(devices) {
  const devicesContainer = document.querySelector(".devices-container");
  devicesContainer.innerHTML = "";
  if (devices.length === 0) {
    devicesContainer.innerHTML =
      '<span class="tag-error">Aucun appareil ne correspond à votre recherche</span>';
  }
  for (let i = 0; i < devices.length; i++) {
    let deviceTag = document.createElement("span");
    deviceTag.innerText = devices[i];
    deviceTag.classList.add("tag");
    devicesContainer.appendChild(deviceTag);
  }
}
