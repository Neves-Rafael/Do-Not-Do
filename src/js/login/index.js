import { UserRegister } from "./UserRegister.js";

export function login() {
    const userRegister = new UserRegister();
    userRegister.loginPage();
    userRegister.inputs();
}




