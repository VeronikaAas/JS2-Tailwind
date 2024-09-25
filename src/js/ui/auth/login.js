import { register } from "../../api/auth/register.js";
import { login } from "../../api/auth/login.js";
import { getPosts } from "../../api/post/read.js";

export async function onLogin(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (event.submitter.dataset.auth === "login") {
        await login(email, password);
    } else {
    await register(name. email, password);
    await login(email, password);
}
await getPosts();
}