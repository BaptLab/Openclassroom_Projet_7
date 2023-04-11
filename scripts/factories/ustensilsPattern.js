export function ustensilsPattern(ustensils) {
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
