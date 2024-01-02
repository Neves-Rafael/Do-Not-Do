import {
  adjustMenu,
  settingsMenu,
  showActualPage,
  adjustUserInformation,
  changeHeaderImg
} from "./adjustMenu.js";
export function utils() {
  console.log("utils");
  showActualPage();
  settingsMenu();
  adjustMenu();
  adjustUserInformation();
  changeHeaderImg();
}
