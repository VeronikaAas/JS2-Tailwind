import { API_BASE, API_KEY } from "./constants.js";


export async function headers() {
  const options = {
    headers: {
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidmVyb3RoZXJvIiwiZW1haWwiOiJ2ZXJhYXMwMDA0M0BzdHVkLm5vcm9mZi5ubyIsImlhdCI6MTcyNjg0NDk4MX0.rYFyA9AX5Zh8_tMwNyCuaT-WTFqRoLSUZ1I_1btexVQ',
      'X-Noroff-API-Key': 'a3565760-278b-4102-855f-9527d9fac17d'
    }
  };
  
  const response = await fetch(`${API_BASE}/social/posts`, API_KEY, options)
  const data = await response.json()
}
