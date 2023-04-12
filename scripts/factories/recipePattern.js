export function recipesPattern(recipes, howManyTagOn) {
  //Message d'erreur
  if (recipes.length === 0) {
    document.querySelector("#error-section").style.display = "flex";
  } else {
    document.querySelector("#error-section").style.display = "none";
  }

  if (howManyTagOn >= 1) {
    let tagOn = document.querySelectorAll(".tag-picked-container .text");
    let newArray = [];
    checkForTags(recipes, tagOn);
    function checkForTags(recipes, tagOn) {
      for (let i = 0; i < recipes.length; i++) {
        let hasAllTags = true;
        for (let k = 0; k < tagOn.length; k++) {
          const { appliance, ustensils, ingredients } = recipes[i];
          let tagMatches = false;
          for (let l = 0; l < ingredients.length; l++) {
            if (ingredients[l].ingredient === tagOn[k].innerText) {
              tagMatches = true;
            }
          }
          for (let l = 0; l < ustensils.length; l++) {
            if (ustensils[l] === tagOn[k].innerText) {
              tagMatches = true;
            }
          }
          if (appliance === tagOn[k].innerText) {
            tagMatches = true;
          }
          if (!tagMatches) {
            hasAllTags = false;
            break;
          }
        }
        if (hasAllTags) {
          newArray.push(recipes[i]);
        }
      }
    }
    console.log(newArray);
    recipes = newArray;
  }

  //Affichage des recettes
  const recipeContainer = document.querySelector("#recipes-container");
  recipeContainer.innerHTML = "";
  for (let i = 0; i < recipes.length; i++) {
    const { id, name, servings, ingredients, time, description, appliance, ustensils } =
      recipes[i];

    const recipeArticle = document.createElement("article");
    recipeArticle.setAttribute("id", id);
    recipeArticle.classList.add("recipe");
    const imgEmplacement = document.createElement("div");
    imgEmplacement.classList.add("img-emplacement");
    const descriptionSection = document.createElement("div");
    descriptionSection.classList.add("description");
    const recipeDescription = document.createElement("div");
    recipeDescription.classList.add("description-header");
    const recipeName = document.createElement("h2");
    recipeName.innerText = name;
    const timerSection = document.createElement("div");
    timerSection.classList.add("cooking-time");
    const timeIcon = document.createElement("i");
    timeIcon.classList.add("fa-regular", "fa-clock");
    const cookingTime = document.createElement("span");
    cookingTime.innerText = `${time} min`;

    const contentDescription = document.createElement("div");
    contentDescription.classList.add("description-content");
    const ingredientList = document.createElement("div");
    ingredientList.classList.add("ingredients-list");

    recipeArticle.appendChild(imgEmplacement);
    descriptionSection.appendChild(recipeDescription);
    recipeDescription.appendChild(recipeName);
    recipeDescription.appendChild(timerSection);
    timerSection.appendChild(timeIcon);
    timerSection.appendChild(cookingTime);
    recipeDescription.appendChild(contentDescription);
    contentDescription.appendChild(ingredientList);
    descriptionSection.appendChild(contentDescription);

    for (let j = 0; j < ingredients.length; j++) {
      const { ingredient, quantity, unit } = ingredients[j];
      const ingredientLine = document.createElement("div");
      ingredientLine.classList.add("ingredient-line");
      const ingredientName = document.createElement("span");
      ingredientName.classList.add("ingredient");
      ingredientName.innerText = `${ingredients[j].ingredient}`;
      ingredientList.appendChild(ingredientLine);
      ingredientLine.appendChild(ingredientName);

      if (Object.prototype.hasOwnProperty.call(ingredients[j], "quantity")) {
        const ingredientQuantity = document.createElement("span");
        ingredientQuantity.classList.add("quantity");
        ingredientQuantity.innerText = ` : ${ingredients[j].quantity} `;
        ingredientLine.appendChild(ingredientQuantity);
      }

      if (Object.prototype.hasOwnProperty.call(ingredients[j], "unit")) {
        const quantityUnit = document.createElement("span");
        quantityUnit.classList.add("unit");
        quantityUnit.innerText = ingredients[j].unit;
        ingredientLine.appendChild(quantityUnit);
      }
    }

    const recipeTextContainer = document.createElement("div");
    recipeTextContainer.classList.add("recipe-text-container");
    const recipeText = document.createElement("p");
    recipeText.classList.add("recipe-text");
    recipeText.innerText = description;

    contentDescription.appendChild(recipeTextContainer);
    recipeTextContainer.appendChild(recipeText);
    recipeArticle.appendChild(descriptionSection);

    recipeContainer.appendChild(recipeArticle);
  }
}
