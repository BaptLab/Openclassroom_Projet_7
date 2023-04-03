import data from "./data/recipes.js";
import { recipesPattern } from "./scripts/factories/recipePattern.js";
import { ingredients } from "./scripts/algorithms/ingredients.js";
import { ustensils } from "./scripts/algorithms/ustensils.js";
import { devices } from "./scripts/algorithms/devices.js";
import { ingredientPattern } from "./scripts/factories/ingredientPattern.js";

function main() {
  recipesPattern(data);
  ingredientPattern(ingredients(data));
  ustensils(data);
  devices(data);
}

main();
