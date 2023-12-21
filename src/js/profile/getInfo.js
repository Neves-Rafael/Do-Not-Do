export function getInfo() {
    const userName = document.querySelector(".profile-info h2");
    userName.innerText = JSON.parse(localStorage.getItem("user"));
    console.log(localStorage.getItem("user"));

    const userEmail = document.querySelector(".profile-info p");
    userEmail.innerText = JSON.parse(localStorage.getItem("email"));
}