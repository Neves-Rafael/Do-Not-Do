export function adjustMenu() {
  console.log("menuHidden");
  const header = document.querySelector("header");
  const path = window.location.pathname;
  if (path === "/" || path === "/login") {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
}
