import {
  adjustMenu,
  settingsMenu,
  showActualPage,
  adjustUserInformation,
} from "./adjustMenu.js";
export function utils() {
  console.log("utils");
  showActualPage();
  settingsMenu();
  adjustMenu();
  adjustUserInformation();
}
