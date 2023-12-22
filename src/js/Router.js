import { welcome } from "./welcome/index.js";
import { utils } from "./utils/index.js";
import { login } from "./login/index.js";
import { profile } from "./profile/index.js";
import { tasks } from "./tasks/index.js";
import { notes } from "./notes/index.js";

export class Router {
  routes = {};


  selectRoute() {
    // Refactor
    console.log(localStorage.getItem("login"));
    console.log(localStorage.getItem("first"));

    if(localStorage.getItem("first") === "false" && window.location.pathname === "/"){
      window.location.href = "/login";
    }

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
        welcome();
        login();
        profile();
        notes();
        tasks();
        this.selectRoute();
      });
  }
}
