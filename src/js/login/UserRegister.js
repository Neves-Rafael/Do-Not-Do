import { Router } from "../Router.js";
export class UserRegister {
  inputs() {
    const inputUserName = document.querySelector(".login .login-username");
    const inputEmail = document.querySelector(".login .login-email");
    // localStorage.removeItem("login");
    if (!inputUserName) {
      return;
    }
    
    this.loginButton(inputUserName, inputEmail);
    this.getImgUser();
  }

  loginButton(inputUser, inputEmail) {
    document.querySelector(".login button").addEventListener("click", () => {
      localStorage.setItem("user", JSON.stringify(inputUser.value));
      localStorage.setItem("email", JSON.stringify(inputEmail.value));
      localStorage.setItem("login", true);
      console.log("click");
      console.log(localStorage.getItem("login"));
    });
  }

  getImgUser() {
    document
      .querySelector(".avatar-container")
      .addEventListener("change", () => {
        const fileInput = event.target;
        const file = fileInput.files[0];

        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const imageBase64 = e.target.result;
            console.log(imageBase64);
            localStorage.setItem("profileImg", imageBase64);
          };
          reader.readAsDataURL(file);
        }
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
      });
    }
  }
}
