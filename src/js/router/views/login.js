import { onLogin } from "../../ui/auth/login";

export function setAuthListener() {
    document.forms.auth.addEventListener("submit", onLogin);
}