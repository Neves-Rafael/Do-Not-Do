import { Router } from "../Router.js";
export function redirect() {
  const signIn = document.querySelector(".signin-btn");

  if (signIn) {
    signIn.addEventListener("click", () => {
      window.history.pushState({}, "", "/");
      const router = new Router();
      router.add("/", "./src/pages/login.html");
      router.togglePage();
    });
  }
}
