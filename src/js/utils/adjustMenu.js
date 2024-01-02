const settingsButton = document.querySelector(".user-information>img");
const settingsClose = document.querySelector(".settings-exit");
const settingsContainer = document.querySelector(".settings-container");
const header = document.querySelector("header");
const userInformation = document.querySelector(".user-information");
let path;

export function adjustMenu() {
  if (path === "/" || path === "/login") {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
}

export function adjustUserInformation() {
  path = window.location.pathname;
  userInformation.classList.remove("hidden");

  if (path === "/profile" || path === "/login" || path === "/") {
    toggleUser();
  }

  function toggleUser() {
    userInformation.classList.add("hidden");
  }
}

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

export function showActualPage() {
  path = window.location.pathname;
  const profilePage = document.querySelector("nav ul li:nth-child(1) svg");
  const taskPage = document.querySelector("nav ul li:nth-child(2) svg");
  const homePage = document.querySelector("nav ul li:nth-child(3) svg");
  const notePage = document.querySelector("nav ul li:nth-child(4) svg");
  const contentPage = document.querySelector("nav ul li:nth-child(5) svg");

  const removeClassActive = [profilePage, taskPage, homePage, notePage, contentPage];
  removeClassActive.forEach((element) => {
    element.classList.remove("active");
  })

  switch (path) {
    case "/profile":
      profilePage.classList.add("active");
      break;
    case "/tasks":
      taskPage.classList.add("active");
      break;
    case "/home":
      homePage.classList.add("active");
      break;
    case "/notes":
      notePage.classList.add("active");
      break;
    case "/content":
      contentPage.classList.add("active");
      break;
  }
}

export function changeHeaderImg(){
  const teste = document.querySelector(".header-img-user");
  const profileImg = localStorage.getItem("profileImg");

  teste.src = profileImg;

  if (profileImg) {
    console.log("profileImg");
  }

}