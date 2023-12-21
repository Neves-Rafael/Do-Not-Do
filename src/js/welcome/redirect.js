import { Router } from "../Router.js";
export function redirect() {
  const signIn = document.querySelector(".signin-btn");

  if (signIn) {
    signIn.addEventListener("click", () => {
      localStorage.setItem("first", "false");
      window.history.pushState({}, "", "/login");
      const router = new Router();
      router.routes["/login"] = "./src/pages/login.html";
      router.togglePage();
    });
  }
}
