export function devicePattern(devices) {
  const devicesContainer = document.querySelector(".devices-container");
  devicesContainer.innerHTML = "";
  if (devices.length === 0) {
    devicesContainer.innerHTML =
      '<span class="tag-error">Aucun appareil ne correspond à votre recherche</span>';
  }
  for (let i = 0; i < devices.length; i++) {
    let deviceTag = document.createElement("span");
    deviceTag.innerText = devices[i];
    deviceTag.classList.add("tag");
    devicesContainer.appendChild(deviceTag);
  }
}
