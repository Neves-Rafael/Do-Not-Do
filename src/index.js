import { Router } from "./js/Router.js";
const router = new Router();

router.add("/", "./src/pages/login.html");
router.add("/home", "./src/pages/home.html");
router.add("/tasks", "./src/pages/tasks.html");
router.add("/welcome", "./src/pages/welcome.html");
router.add("/profile", "./src/pages/profile.html");
router.add(404, "./src/pages/404.html");

const activeRout = document.querySelectorAll("nav a");
activeRout.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    router.togglePage();
  });
});

router.verifyRoute();
router.togglePage();

window.onpopstate = () => {
  router.togglePage();
};

window.route = () => router.togglePage();
