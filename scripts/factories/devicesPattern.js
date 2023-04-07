export function devicePattern(devices) {
  const devicesContainer = document.querySelector(".devices-container");
  devicesContainer.innerHTML = "";
  for (let i = 0; i < devices.length; i++) {
    let deviceTag = document.createElement("span");
    deviceTag.innerText = devices[i];
    deviceTag.classList.add("tag");
    devicesContainer.appendChild(deviceTag);
  }
}
