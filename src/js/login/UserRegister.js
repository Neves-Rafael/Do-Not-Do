import { Router } from "../Router.js";
export class UserRegister {
  inputs() {
    const inputUserName = document.querySelector(".login .login-username");
    const inputEmail = document.querySelector(".login .login-email");
    // localStorage.removeItem("login");
    if (!inputUserName) {
      return;
    }

    document.querySelector(".login button").addEventListener("click", () => {
      localStorage.setItem("user", JSON.stringify(inputUserName.value));
      localStorage.setItem("email", JSON.stringify(inputEmail.value));
      localStorage.setItem("login", true);
      console.log("click");
      console.log(localStorage.getItem("login"));
    });
  }

  loginPage() {
    const buttonConfirm = document.querySelector(".login-button button");
    if (buttonConfirm) {
      const router = new Router();
      buttonConfirm.addEventListener("click", () => {
        window.history.pushState({}, "", "/home");
        router.routes["/home"] = "./src/pages/home.html";
        router.togglePage();
      })
    }
    
  }
}
