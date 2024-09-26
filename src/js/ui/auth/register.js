//export async function onRegister(event) {}

// Importer register-funksjonen fra din API-modul
import { register } from "../../api/auth/register.js";

// Funksjon for å håndtere registrering
export async function onRegister(event) {
    event.preventDefault(); // Forhindre standard form-innsending
    const form = event.target; // Hent form-elementet
    const formData = new FormData(form); // Hent alle input fra form-data
    const account = Object.fromEntries(formData.entries()); // Lag et objekt fra form-data

    try {
        // Kall register-funksjonen for å sende brukerdata til backend
        await register(account);
        // Her kan du legge til ekstra logikk, som f.eks. videresending til en innlogget side
        console.log("Bruker registrert vellykket");
    } catch (error) {
        // Håndter eventuelle feil, f.eks. vise en feilmelding til brukeren
        console.error("Feil under registrering:", error);
    }
}