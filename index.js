import data from "./data/recipes.js";
import { recipesPattern } from "./scripts/factories/recipePattern.js";
import {
  getDevices,
  getUstensils,
  getIngredients,
} from "./scripts/algorithms/getTags.js";
import { sortByInput } from "./scripts/algorithms/sortRecipes.js";
import {
  sortDevicesTags,
  sortIngredientsTags,
  sortUstensilsTags,
} from "./scripts/algorithms/sortTags.js";
import {
  ingredientTagPattern,
  ustensilsTagPattern,
  deviceTagPattern,
} from "./scripts/factories/tagPatterns.js";

var howManyTagOn = 0;

function main() {
  recipesPattern(data, howManyTagOn);
  ingredientTagPattern(getIngredients(data));
  deviceTagPattern(getDevices(data));
  ustensilsTagPattern(getUstensils(data));
  TagsDisplayEvent();
  tagSearchEvent(data);
}

main();

//Event - input barre de recherche
//Met à jour les recettes et les tags disponibles conformément à l'input
document.querySelector("#search-input").addEventListener("input", (e) => {
  let input = e.target.value.toLowerCase();
  searchbarSort(input);
});

//Fonction de maj des recettes affichées selon l'input de l'utilisateur
function searchbarSort(input) {
  if (input.length > 2) {
    let sortedrecipes = sortByInput(data);
    recipesPattern(sortedrecipes, howManyTagOn);
    ingredientTagPattern(getIngredients(sortedrecipes));
    deviceTagPattern(getDevices(sortedrecipes));
    ustensilsTagPattern(getUstensils(sortedrecipes));
  } else {
    //En dessous de 3 caractère, on affiche toutes les recettes
    recipesPattern(data, howManyTagOn);
    ingredientTagPattern(getIngredients(data));
    deviceTagPattern(getDevices(data));
    ustensilsTagPattern(getUstensils(data));
  }
}

//Fonction prévoit un évènement au moment du changement d'input des champs de tags
function tagSearchEvent(data) {
  document.querySelector("#ingredients").addEventListener("input", (e) => {
    let input = e.target.value.toLowerCase();
    if (input.length >= 1) {
      let searchInput = document.querySelector("#search-input").value;
      //On vérifie d'abord si le champs de recherche général est supérieur à 3
      //SI oui, on tri d'abord les données de recette en conséquence
      if (searchInput.length >= 3) {
        ingredientTagPattern(sortIngredientsTags(input, sortByInput(data)));
      } else {
        ingredientTagPattern(sortIngredientsTags(input, data));
      }
    } else {
      let searchInput = document.querySelector("#search-input").value;
      if (searchInput.length >= 3) {
        ingredientTagPattern(sortIngredientsTags(input, sortByInput(data)));
      } else {
        ingredientTagPattern(sortIngredientsTags(input, data));
      }
    }
    //A chaque changement de caractère, on ajoute à nouveau les évènement de tag uniques
    tagEvents();
  });

  document.querySelector("#devices").addEventListener("input", (e) => {
    let input = e.target.value.toLowerCase();
    if (input.length >= 1) {
      let searchInput = document.querySelector("#search-input").value;
      if (searchInput.length >= 3) {
        deviceTagPattern(sortDevicesTags(input, sortByInput(data)));
      } else {
        deviceTagPattern(sortDevicesTags(input, data));
      }
    } else {
      let searchInput = document.querySelector("#search-input").value;
      if (searchInput.length >= 3) {
        deviceTagPattern(sortDevicesTags(input, sortByInput(data)));
      } else {
        deviceTagPattern(sortDevicesTags(input, data));
      }
    }
    tagEvents();
  });

  document.querySelector("#ustensils").addEventListener("input", (e) => {
    let input = e.target.value.toLowerCase();
    if (input.length >= 1) {
      let searchInput = document.querySelector("#search-input").value;
      if (searchInput.length >= 3) {
        ustensilsTagPattern(sortUstensilsTags(input, sortByInput(data)));
      } else {
        ustensilsTagPattern(sortUstensilsTags(input, data));
      }
    } else {
      let searchInput = document.querySelector("#search-input").value;
      if (searchInput.length >= 3) {
        ustensilsTagPattern(sortUstensilsTags(input, sortByInput(data)));
      } else {
        ustensilsTagPattern(sortUstensilsTags(input, data));
      }
    }
    tagEvents();
  });
}
//Fonction Evenement d'ouverture/fermeture du conteneur de tags via le BTN
function tagContainerEvent(tags, tagBtn) {
  tagBtn.addEventListener("click", () => {
    if (tagsList === false) {
      tags.classList.add("extended");
      tagBtn.classList.add("open");
      tagsList = true;
      tagEvents();
    } else {
      tagBtn.classList.remove("open");
      tags.classList.remove("extended");
      tagsList = false;
    }
  });
  return { tagBtn, tags };
}

let tagsList = false;

//Fonction qui appelle la fonction d'affichage des containers
// + ajoute un évènement pour la fermeture du container
function TagsDisplayEvent() {
  let ingredients = document.querySelector(".ingredients-container");
  let ingredientsBtn = document.querySelector(".ingredients");
  tagContainerEvent(ingredients, ingredientsBtn);

  let devices = document.querySelector(".devices-container");
  let devicesBtn = document.querySelector(".devices");
  tagContainerEvent(devices, devicesBtn);

  let ustensils = document.querySelector(".ustensils-container");
  let ustensilsBtn = document.querySelector(".ustensils");
  tagContainerEvent(ustensils, ustensilsBtn);

  //Evenements de fermeture des containers de tag
  document.querySelector("body").addEventListener("click", (e) => {
    let tagSelector = e.target.parentNode;
    if (tagSelector != ingredientsBtn) {
      ingredientsBtn.classList.remove("open");
      ingredients.classList.remove("extended");
      tagsList = false;
      document.querySelector("#ingredients").value = "";
      ingredientTagPattern(getIngredients(sortByInput(data)));
    }
  });

  document.querySelector("body").addEventListener("click", (e) => {
    let tagSelector = e.target.parentNode;
    if (tagSelector != devicesBtn) {
      devicesBtn.classList.remove("open");
      devices.classList.remove("extended");
      tagsList = false;
      document.querySelector("#devices").value = "";
      deviceTagPattern(getDevices(sortByInput(data)));
    }
  });

  document.querySelector("body").addEventListener("click", (e) => {
    let tagSelector = e.target.parentNode;
    if (tagSelector != ustensilsBtn) {
      ustensilsBtn.classList.remove("open");
      ustensils.classList.remove("extended");
      tagsList = false;
      document.querySelector("#ustensils").value = "";
      ustensilsTagPattern(getUstensils(sortByInput(data)));
    }
  });
}

//Fonction qui appel la fonction de TagPickingEvent (ci-dessous) sur tous les container
function tagEvents() {
  let ingredientsTags = document.querySelectorAll(".ingredients-container .tag");
  tagPickingEvent(ingredientsTags, "ingredients-tag");

  let devicesTags = document.querySelectorAll(".devices-container .tag");
  tagPickingEvent(devicesTags, "devices-tag");

  let ustensilsTags = document.querySelectorAll(".ustensils-container .tag");
  tagPickingEvent(ustensilsTags, "ustensils-tag");
}

//Function qui ajoute un évènement sur chaque tag unique
function tagPickingEvent(tags, className) {
  for (let i = 0; i < tags.length; i++) {
    let tagDisplaySection = document.querySelector("#tags-displaying");
    tags[i].addEventListener("click", (e) => {
      howManyTagOn++;
      let tagPicked = document.createElement("span");
      tagPicked.classList.add("text");
      tagPicked.innerText = e.target.innerText;
      let tagPickedContainer = document.createElement("div");
      let deleteIcone = document.createElement("span");
      deleteIcone.classList.add("fa-regular", "fa-circle-xmark", "fa-lg", "close-icon");
      tagPickedContainer.classList.add("tag-picked-container");
      tagPickedContainer.classList.add(className);
      tagDisplaySection.appendChild(tagPickedContainer);
      tagPickedContainer.appendChild(tagPicked);
      tagPickedContainer.appendChild(deleteIcone);
      recipesPattern(sortByInput(data), howManyTagOn);
      deleteIcone.addEventListener("click", (e) => {
        howManyTagOn--;
        e.target.parentNode.remove();
        recipesPattern(sortByInput(data), howManyTagOn);
      });
    });
  }
}
