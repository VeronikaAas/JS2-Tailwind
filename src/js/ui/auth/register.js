import { register } from "../../api/auth/register.js";

export async function onRegister(event) {
    event.preventDefault(); 
    const form = event.target; 
    const formData = new FormData(form); 
    const account = Object.fromEntries(formData.entries()); 

    try {
        await register(account);
        window.location.href = '/';
        console.log("Success!");
    } catch (error) {
    
        console.error("Could not register user", error);
    }
}