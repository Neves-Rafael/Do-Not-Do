const settingsButton = document.querySelector(".user-information>img");
const settingsClose = document.querySelector(".settings-exit");
const settingsContainer = document.querySelector(".settings-container");

function toggleSettings() {
  settingsContainer.classList.toggle("hidden");
  console.log("open menu");
}

function cleanupEvents() {
  settingsButton.removeEventListener("click", toggleSettings);

  if (settingsClose) {
    settingsClose.removeEventListener("click", toggleSettings);
  }
}

export function settingsMenu() {
  settingsButton.addEventListener("click", toggleSettings);

  if (settingsClose) {
    settingsClose.addEventListener("click", toggleSettings);
  }

  window.addEventListener("beforeunload", cleanupEvents);
}

