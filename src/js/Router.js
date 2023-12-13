import { UserRegister } from "./login/UserRegister.js";
import { TaskView } from "./tasks/UpdateTasks.js";
const userRegister = new UserRegister();


export class Router {
  routes = {};

  verifyRoute() {
    if (window.location.pathname === "/" && localStorage.getItem("login")) {
      window.history.pushState({}, "", "/home");
      this.routes["/home"] = "./src/pages/home.html";
      this.togglePage();
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
        userRegister.inputs();
        userRegister.loginPage();
        const taskView = new TaskView(".app");
        // taskView.load();
      });
  }
}
