import { welcome } from "./welcome/index.js";
import { utils } from "./utils/index.js";
import { login } from "./login/index.js";
import { profile } from "./profile/index.js";

export class Router {
  routes = {};

  // verifyRoute() {
  //   if (window.location.pathname === "/" && localStorage.getItem("login")) {
  //     window.history.pushState({}, "", "/home");
  //     this.routes["/home"] = "./src/pages/home.html";
  //     this.togglePage();
  //   }
  // }

  selectRoute() {
    // Refactor
    console.log(localStorage.getItem("login"));
    console.log(localStorage.getItem("first"));

    // if(localStorage.getItem("first") === "true"){
    //   window.history.pushState({}, "", "/");
    //   this.routes["/"] = "./src/pages/login.html";
    // }

    // if (localStorage.getItem("login")) {
    //   window.history.pushState({}, "", "/home");
    //   this.routes["/home"] = "./src/pages/home.html";
    // } else if (localStorage.getItem("first") !== "true") {
    //   localStorage.setItem("first", "true");
    //   window.history.pushState({}, "", "/welcome");
    //   this.routes["/welcome"] = "./src/pages/welcome.html";
    //   welcome();
    // }
    // localStorage.removeItem("first");
  }

  add(pathName, page) {
    this.routes[pathName] = page;
  }

  togglePage() {
    const { pathname } = window.location;
    const captureRoute = this.routes[pathname] || this.routes[404];

    fetch(captureRoute)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector(".app").innerHTML = html;
        utils();
        login();
        profile();
        this.selectRoute();
      });
  }
}
