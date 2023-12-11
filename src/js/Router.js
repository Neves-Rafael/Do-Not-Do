export class Router {
  routes = {};

  add(pathName, page) {
    this.routes[pathName] = page;
  }

  togglePage() {
    const { pathname } = window.location;
    const captureRoute = this.routes[pathname] || this.routes[404];
    console.log(captureRoute)
    if(!captureRoute) {
      return;
    }

    fetch(captureRoute)
      .then((data) => data.text())
      .then((html) => {
        document.querySelector(".app").innerHTML = html;
      });
  }
}
