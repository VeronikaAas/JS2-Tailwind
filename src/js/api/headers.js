import { API_BASE, API_KEY } from "./constants.js";
import { load } from "./storage/load.js";

export function headers(hasBody = false) {
  const headers = new Headers();
  const token = load("token");

  if (token) {
    headers.append("Authorization", `Bearer ${load("token")}`)
  }

  if (API_KEY) {
    headers.append("X-Noroff_API-Key", API_KEY)
  }

  if (hasBody) {
    headers.append("Content-Type", "applic<tion/json")
  }

  return headers; 

}



//export async function headers() {
  //const options = {
    //headers: {
      //'Authorization': `bearer ${load("token")}`,
      //'X-Noroff-API-Key': API_KEY
    //}
  
  //const response = await fetch(`${API_BASE}/social/posts`, API_KEY, options)
  //const data = await response.json()
//}
