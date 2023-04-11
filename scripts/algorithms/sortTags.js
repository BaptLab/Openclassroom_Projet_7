export function sortIngredientsTags(input, data) {
  let sortedIngredientsTag = [];
  for (let i = 0; i < data.length; i++) {
    const ingredients = data[i].ingredients;
    for (let j = 0; j < ingredients.length; j++) {
      if (ingredients[j].ingredient.toLowerCase().includes(input)) {
        if (!sortedIngredientsTag.includes(ingredients[j].ingredient)) {
          sortedIngredientsTag.push(ingredients[j].ingredient);
        }
      }
    }
  }
  return sortedIngredientsTag;
}

export function sortDevicesTags(input, data) {
  let sortedDevicesTag = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].appliance.toLowerCase().includes(input)) {
      if (!sortedDevicesTag.includes(data[i].appliance)) {
        sortedDevicesTag.push(data[i].appliance);
      }
    }
  }
  return sortedDevicesTag;
}

export function sortUstensilsTags(input, data) {
  let sortedUstensilsTag = [];
  for (let i = 0; i < data.length; i++) {
    const ustensils = data[i].ustensils;
    for (let j = 0; j < ustensils.length; j++) {
      if (ustensils[j].toLowerCase().includes(input)) {
        if (!sortedUstensilsTag.includes(ustensils[j])) {
          sortedUstensilsTag.push(ustensils[j]);
        }
      }
    }
  }
  return sortedUstensilsTag;
}
