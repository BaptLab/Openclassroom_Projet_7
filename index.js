import data, { recipes } from "./data/recipes.js";
import { recipesPattern } from "./scripts/factories/recipePattern.js";
import { ingredients } from "./scripts/algorithms/ingredients.js";
import { ustensils } from "./scripts/algorithms/ustensils.js";
import { devices } from "./scripts/algorithms/devices.js";
import { ingredientPattern } from "./scripts/factories/ingredientPattern.js";
import { devicePattern } from "./scripts/factories/devicesPattern.js";
import { sort } from "./scripts/algorithms/sort.js";
import { ustensilsPattern } from "./scripts/factories/ustensilsPattern.js";

function main() {
  recipesPattern(data);
  ingredientPattern(ingredients(data));
  devicePattern(devices(data));
  ustensilsPattern(ustensils(data));
  ustensils(data);
  devices(data);
  TagsDisplayEvent();
}

main();

//Event - input barre de recherche
document.querySelector("#search-input").addEventListener("input", (e) => {
  let input = e.target.value;
  if (input.length > 2) {
    sort(input, recipes);
  }
});

//A refactoriser
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
    console.log(tagSelector);
    if (tagSelector != document.querySelector(".ingredients")) {
      ingredientsBtn.classList.remove("open");
      ingredients.classList.remove("extended");
      ingredientList = false;
    }
  });

  document.querySelector("body").addEventListener("click", (e) => {
    let tagSelector = e.target.parentNode;
    console.log(tagSelector);
    if (tagSelector != document.querySelector(".devices")) {
      devicesBtn.classList.remove("open");
      devices.classList.remove("extended");
      deviceList = false;
    }
  });

  document.querySelector("body").addEventListener("click", (e) => {
    let tagSelector = e.target.parentNode;
    console.log(tagSelector);
    if (tagSelector != document.querySelector(".ustensils")) {
      ustensilsBtn.classList.remove("open");
      ustensils.classList.remove("extended");
      ustensilList = false;
    }
  });
}
