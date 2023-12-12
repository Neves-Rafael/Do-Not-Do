export class Content {
    user() {
        let userName = document.querySelector(".user");
        if(!userName){
            return;
        }

        userName.innerHTML = localStorage.getItem("user");
    }
}