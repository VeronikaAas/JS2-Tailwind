import { API_KEY } from '../constants.js'; 

fetch('https://v2.api.noroff.dev/social/posts', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`, 
    'X-Noroff-API-Key': API_KEY, // Legg til API-nøkkelen her
    'Content-Type': 'application/json'
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Nettverksrespons var ikke ok');
  }
  return response.json();
})
.then(data => {
  console.log('Suksess:', data);
})
.catch(error => {
  console.error('Det oppstod en feil:', error);
});