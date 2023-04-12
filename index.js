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

function main() {
  recipesPattern(data);
  ingredientTagPattern(getIngredients(data));
  deviceTagPattern(getDevices(data));
  ustensilsTagPattern(getUstensils(data));
  TagsDisplayEvent();
  TagPicking();
  tagSearchEvent(data);
}

main();

function tagSearchEvent(data) {
  document.querySelector("#ingredients").addEventListener("input", (e) => {
    let input = e.target.value.trim().toLowerCase();
    if (input.length >= 1) {
      let searchInput = document.querySelector("#search-input").value.trim();
      if (searchInput.length >= 3) {
        ingredientTagPattern(sortIngredientsTags(input, sortByInput(searchInput, data)));
      } else {
        ingredientTagPattern(sortIngredientsTags(input, data));
      }
    } else {
      let searchInput = document.querySelector("#search-input").value.trim();
      if (searchInput.length >= 3) {
        ingredientTagPattern(sortIngredientsTags(input, sortByInput(searchInput, data)));
      } else {
        ingredientTagPattern(sortIngredientsTags(input, data));
      }
    }
  });

  document.querySelector("#devices").addEventListener("input", (e) => {
    let input = e.target.value.trim().toLowerCase();
    if (input.length >= 1) {
      let searchInput = document.querySelector("#search-input").value.trim();
      if (searchInput.length >= 3) {
        deviceTagPattern(sortDevicesTags(input, sortByInput(searchInput, data)));
      } else {
        deviceTagPattern(sortDevicesTags(input, data));
      }
    } else {
      let searchInput = document.querySelector("#search-input").value.trim();
      if (searchInput.length >= 3) {
        deviceTagPattern(sortDevicesTags(input, sortByInput(searchInput, data)));
      } else {
        deviceTagPattern(sortDevicesTags(input, data));
      }
    }
  });

  document.querySelector("#ustensils").addEventListener("input", (e) => {
    let input = e.target.value.trim().toLowerCase();
    if (input.length >= 1) {
      let searchInput = document.querySelector("#search-input").value.trim();
      if (searchInput.length >= 3) {
        ustensilsTagPattern(sortUstensilsTags(input, sortByInput(searchInput, data)));
      } else {
        ustensilsTagPattern(sortUstensilsTags(input, data));
      }
    } else {
      let searchInput = document.querySelector("#search-input").value.trim();
      if (searchInput.length >= 3) {
        ustensilsTagPattern(sortUstensilsTags(input, sortByInput(searchInput, data)));
      } else {
        ustensilsTagPattern(sortUstensilsTags(input, data));
      }
    }
  });
}

//Event - input barre de recherche
//Met à jour les recettes et les tags disponibles conformément à l'input
document.querySelector("#search-input").addEventListener("input", (e) => {
  let input = e.target.value.trim().toLowerCase();
  searchbarSort(input);
});

function searchbarSort(input) {
  if (input.length > 2) {
    let sortedrecipes = sortByInput(input, data);
    recipesPattern(sortedrecipes);
    ingredientTagPattern(getIngredients(sortedrecipes));
    deviceTagPattern(getDevices(sortedrecipes));
    ustensilsTagPattern(getUstensils(sortedrecipes));
    TagPicking();
  } else {
    //En dessous de 3 caractère, on affiche toutes les recettes
    recipesPattern(data);
    ingredientTagPattern(getIngredients(data));
    deviceTagPattern(getDevices(data));
    ustensilsTagPattern(getUstensils(data));
    TagPicking();
  }
}

//A refactoriser pour éviter les duplications
function TagsDisplayEvent() {
  let ingredientList = false;
  let ingredients = document.querySelector(".ingredients-container");
  let ingredientsBtn = document.querySelector(".ingredients");

  document.querySelector("#ingredients").addEventListener("click", () => {
    if (ingredientList === false) {
      ingredients.classList.add("extended");
      ingredientsBtn.classList.add("open");
      ingredientList = true;
    } else {
      ingredientsBtn.classList.remove("open");
      ingredients.classList.remove("extended");
      ingredientList = false;
    }
  });

  let deviceList = false;
  let devices = document.querySelector(".devices-container");
  let devicesBtn = document.querySelector(".devices");

  document.querySelector("#devices").addEventListener("click", () => {
    if (deviceList === false) {
      devices.classList.add("extended");
      devicesBtn.classList.add("open");
      deviceList = true;
    } else {
      devicesBtn.classList.remove("open");
      devices.classList.remove("extended");
      deviceList = false;
    }
  });

  let ustensilList = false;
  let ustensils = document.querySelector(".ustensils-container");
  let ustensilsBtn = document.querySelector(".ustensils");

  document.querySelector("#ustensils").addEventListener("click", () => {
    if (ustensilList === false) {
      ustensils.classList.add("extended");
      ustensilsBtn.classList.add("open");
      ustensilList = true;
    } else {
      ustensilsBtn.classList.remove("open");
      ustensils.classList.remove("extended");
      ustensilList = false;
    }
  });

  document.querySelector("body").addEventListener("click", (e) => {
    let tagSelector = e.target.parentNode;
    if (tagSelector != document.querySelector(".ingredients")) {
      ingredientsBtn.classList.remove("open");
      ingredients.classList.remove("extended");
      ingredientList = false;
    }
  });

  document.querySelector("body").addEventListener("click", (e) => {
    let tagSelector = e.target.parentNode;
    if (tagSelector != document.querySelector(".devices")) {
      devicesBtn.classList.remove("open");
      devices.classList.remove("extended");
      deviceList = false;
    }
  });

  document.querySelector("body").addEventListener("click", (e) => {
    let tagSelector = e.target.parentNode;
    if (tagSelector != document.querySelector(".ustensils")) {
      ustensilsBtn.classList.remove("open");
      ustensils.classList.remove("extended");
      ustensilList = false;
    }
  });
}

//refactoriser pour éviter la duplication
function TagPicking() {
  let ingredientsTags = document.querySelectorAll(".ingredients-container .tag");
  let tagDisplaySection = document.querySelector("#tags-displaying");
  for (let i = 0; i < ingredientsTags.length; i++) {
    ingredientsTags[i].addEventListener("click", (e) => {
      let tagPicked = document.createElement("span");
      tagPicked.classList.add("text");
      tagPicked.innerText = e.target.innerText;
      let tagPickedContainer = document.createElement("div");
      let deleteIcone = document.createElement("span");
      deleteIcone.classList.add("fa-regular", "fa-circle-xmark", "fa-lg", "close-icon");
      tagPickedContainer.classList.add("tag-picked-container");
      tagPickedContainer.classList.add("ingredients-tag");
      tagDisplaySection.appendChild(tagPickedContainer);
      tagPickedContainer.appendChild(tagPicked);
      tagPickedContainer.appendChild(deleteIcone);
      deleteIcone.addEventListener("click", (e) => {
        e.target.parentNode.remove();
      });
    });
  }

  let devicesTags = document.querySelectorAll(".devices-container .tag");
  for (let i = 0; i < devicesTags.length; i++) {
    devicesTags[i].addEventListener("click", (e) => {
      let tagPicked = document.createElement("span");
      tagPicked.classList.add("text");
      tagPicked.innerText = e.target.innerText;
      let tagPickedContainer = document.createElement("div");
      let deleteIcone = document.createElement("span");
      deleteIcone.classList.add("fa-regular", "fa-circle-xmark", "fa-lg", "close-icon");
      tagPickedContainer.classList.add("tag-picked-container");
      tagPickedContainer.classList.add("devices-tag");
      tagDisplaySection.appendChild(tagPickedContainer);
      tagPickedContainer.appendChild(tagPicked);
      tagPickedContainer.appendChild(deleteIcone);
      deleteIcone.addEventListener("click", (e) => {
        e.target.parentNode.remove();
      });
    });
  }

  let ustensilsTags = document.querySelectorAll(".ustensils-container .tag");
  for (let i = 0; i < ustensilsTags.length; i++) {
    ustensilsTags[i].addEventListener("click", (e) => {
      let tagPicked = document.createElement("span");
      tagPicked.classList.add("text");
      tagPicked.innerText = e.target.innerText;
      let tagPickedContainer = document.createElement("div");
      let deleteIcone = document.createElement("span");
      deleteIcone.classList.add("fa-regular", "fa-circle-xmark", "fa-lg", "close-icon");
      tagPickedContainer.classList.add("tag-picked-container");
      tagPickedContainer.classList.add("ustensils-tag");
      tagDisplaySection.appendChild(tagPickedContainer);
      tagPickedContainer.appendChild(tagPicked);
      tagPickedContainer.appendChild(deleteIcone);
      deleteIcone.addEventListener("click", (e) => {
        e.target.parentNode.remove();
      });
    });
  }
}
