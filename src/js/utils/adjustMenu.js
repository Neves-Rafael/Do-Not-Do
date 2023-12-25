export function adjustMenu() {
  const header = document.querySelector("header");
  const userInformation = document.querySelector(".user-information");
  const path = window.location.pathname;
  if (path === "/" || path === "/login") {
    header.classList.add("hidden");
    userInformation.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
    userInformation.classList.remove("hidden");
  }

  if (path === "/profile") {
    userInformation.classList.add("hidden");
  }else{
    userInformation.classList.remove("hidden");
  }
}
