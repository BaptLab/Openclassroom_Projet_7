//Fonction qui récupère tous les appareils différents de la BD
export function devices(recipes) {
  let devicesTag = [];
  for (let i = 0; i < recipes.length; i++) {
    const { appliance } = recipes[i];
    if (!devicesTag.includes(recipes[i].appliance)) {
      devicesTag.push(recipes[i].appliance);
    }
  }
  console.log(devicesTag.sort());
  return devicesTag.sort();
}
