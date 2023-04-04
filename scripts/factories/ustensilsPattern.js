export function ustensilsPattern(ustensils) {
  const ustensilsContainer = document.querySelector(".ustensils-container");
  for (let i = 0; i < ustensils.length; i++) {
    let ustensilTag = document.createElement("span");
    ustensilTag.innerText = ustensils[i];
    ustensilTag.classList.add("tag");
    ustensilsContainer.appendChild(ustensilTag);
  }
}
