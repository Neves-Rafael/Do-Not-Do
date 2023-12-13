export class UserRegister {
  inputs() {
    const inputUserName = document.querySelector(".login input");
    // localStorage.removeItem("login");
    if (!inputUserName) {
      return;
    }

    document.querySelector(".login button").addEventListener("click", () => {
      localStorage.setItem("user", inputUserName.value);
      localStorage.setItem("login", true);
      console.log("click");
      console.log(localStorage.getItem("login"));
    });
  }

  loginPage() {
    const registerLogin = document.querySelector(".register");
    const loginInfo = document.querySelector(".login-info");
    
    if(localStorage.getItem("login") && window.location.pathname === "/") {
      registerLogin.classList.add("hidden");
      loginInfo.classList.remove("hidden");
      console.log("Perfil");
    }
  }
}
