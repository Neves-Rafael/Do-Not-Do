import { Router } from "../Router.js";


export class UserRegister{
    inputs(){
        const inputUserName = document.querySelector(".login input");
        // localStorage.removeItem("user");
        if(!inputUserName){
            return;
        }

        document.querySelector(".login button").addEventListener("click", ()=>{
            localStorage.setItem("user", inputUserName.value);
        })
    }

    verifyLogin(){
        const router = new Router();
        const userName = localStorage.getItem("user");

        // if(window.location.pathname === "/" && userName){
        //     console.log(userName);
        //     console.log("go to home")
        //     window.location.pathname = "/home";
        //     router.togglePage();
        // }

    }
}