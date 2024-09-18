import { API_BASE, API_KEY } from "./constants.js";


export async function headers() {
  const options = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "X-Noroff-API-Key": API_KEY,
      "Content-Type": "application/json"
    }
  }
  
  const response = await fetch(`${API_BASE}/social/posts`, options)
  const data = await response.json()
}