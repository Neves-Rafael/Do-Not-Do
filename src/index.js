import { Router } from "./js/Router.js";

const router = new Router();

router.add("/", "./src/pages/home.html");
router.add("/login", "./src/pages/login.html");
router.add("/tasks", "./src/pages/tasks.html");
router.add(404, "./src/pages/404.html");
router.add();

const activeRout = document.querySelectorAll("nav a");
activeRout.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    router.togglePage();
  });
});


window.onpopstate = () => {
    router.togglePage();
}

window.route = () => router.togglePage();