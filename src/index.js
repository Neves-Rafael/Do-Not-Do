import { Router } from "./js/Router.js";
const router = new Router();

router.add("/", "./src/pages/welcome.html");
router.add("/login", "./src/pages/login.html");
router.add("/home", "./src/pages/home.html");
router.add("/tasks", "./src/pages/tasks.html");
router.add("/profile", "./src/pages/profile.html");
router.add("/content", "./src/pages/content.html");
router.add("/notes", "./src/pages/notes.html");
router.add(404, "./src/pages/404.html");

// const activeRout = document.querySelectorAll("nav a");
// activeRout.forEach((element) => {
//   element.addEventListener("click", (event) => {
//     event.preventDefault();
//     window.history.pushState({}, "", event.target.href);
//     router.togglePage();
//   });
// });

const activeRout = document.querySelectorAll("nav ul li a svg");

activeRout.forEach((element) => {
  //refactor
  element.addEventListener("click", (event) => {

    // console.log(event.parentElement.getAttribute("href"))
    event.preventDefault();
    window.history.pushState({}, "", event.currentTarget.parentElement.href);
    router.togglePage();
  });
});


router.togglePage();

window.onpopstate = () => {
  router.togglePage();
};

window.route = () => router.togglePage();

// localStorage.clear();
