import { UserRegister } from "./login/UserRegister.js";
import { Content } from "./home/Content.js";
const userRegister = new UserRegister();
const content = new Content();

export class Router {
  routes = {};

  add(pathName, page) {
    this.routes[pathName] = page;
  }

  togglePage() {
    const { pathname } = window.location;
    const captureRoute = this.routes[pathname] || this.routes[404];
    console.log(captureRoute);

    fetch(captureRoute)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector(".app").innerHTML = html;
        userRegister.inputs();
        content.user();
        userRegister.verifyLogin();
      });
  }
}
