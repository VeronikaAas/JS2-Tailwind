import "/style.css";
import router from "./js/router/index.js";

await router(window.location.pathname);

const htmlElement = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");

// Funksjon for å sette tema basert på localStorage
function applyTheme() {
    if (localStorage.getItem("theme") === "dark") {
        htmlElement.classList.add("dark");
        themeToggle.textContent = "Light mode"; // Endre knappeteksten
    } else {
        htmlElement.classList.remove("dark");
        themeToggle.textContent = "Dark mode"; // Endre knappeteksten
    }
}

// Kjør tema ved hver lasting
applyTheme();

// EventListener for å bytte tema og lagre valget
themeToggle.addEventListener("click", () => {
    if (htmlElement.classList.contains("dark")) {
        htmlElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        themeToggle.textContent = "Dark mode"; // Endre knappeteksten
    } else {
        htmlElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "Light mode"; // Endre knappeteksten
    }
});
