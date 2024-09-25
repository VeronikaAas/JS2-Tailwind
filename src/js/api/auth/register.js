import { API_BASE,  API_AUTH, API_AUTH_REGISTER } from "../constants.js";
import { headers } from "../headers.js";

export async function register(name, email, password) {
  const response = await fetch(API_BASE + API_AUTH + API_AUTH_REGISTER, { 
    headers: headers(true),
    method: "POST",
    body: JSON.stringify({name, email, password})
  });
  
  if (response.ok) {
    return await response.json();
  }

  throw new Error("Could not register the account")
}