export function getInfo() {
  const userName = document.querySelector(".profile-info h2");
  const userEmail = document.querySelector(".profile-info p");
  if (userName) {
    userName.innerText = JSON.parse(localStorage.getItem("user"));
    console.log(localStorage.getItem("user"));
  }

  if (userEmail) {
    userEmail.innerText = JSON.parse(localStorage.getItem("email"));
  }
}
