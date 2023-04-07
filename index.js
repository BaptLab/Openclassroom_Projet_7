import data, { recipes } from "./data/recipes.js";
import { recipesPattern } from "./scripts/factories/recipePattern.js";
import { ingredients } from "./scripts/algorithms/ingredients.js";
import { ustensils } from "./scripts/algorithms/ustensils.js";
import { devices } from "./scripts/algorithms/devices.js";
import { ingredientPattern } from "./scripts/factories/ingredientPattern.js";
import { devicePattern } from "./scripts/factories/devicesPattern.js";
import { sortRecipes } from "./scripts/algorithms/sort.js";
import { ustensilsPattern } from "./scripts/factories/ustensilsPattern.js";

function main() {
  recipesPattern(data);
  ingredientPattern(ingredients(data));
  devicePattern(devices(data));
  ustensilsPattern(ustensils(data));
  ustensils(data);
  devices(data);
  TagsDisplayEvent();
  TagPicking();
}

main();

//Event - input barre de recherche
document.querySelector("#search-input").addEventListener("input", (e) => {
  let input = e.target.value;
  if (input.length > 2) {
    recipesPattern(sortRecipes(input, data));
  }
});

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
