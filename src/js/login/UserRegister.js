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
    const registerLogin = document.querySelector(".register");
    const loginInfo = document.querySelector(".login-info");
    
    if(localStorage.getItem("login") && window.location.pathname === "/") {
      loginInfo.classList.remove("hidden");
      console.log("Perfil");
    }
  }
}
