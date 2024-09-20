import { API_BASE, API_ENDPOINT_NAME, API_SOCIAL_POSTS } from "../constants.js"

const method = "post";

export async function createPost(postData) {
    const createPostURL = API_BASE + API_SOCIAL_POSTS + API_ENDPOINT_NAME;
    
    const response = await authFetch(createPostURL, {
        method,
        body: JSON.stringify(postData)
    });

    if (response.ok) {
        alert("You have created a post!");
        window.location.href = `/index.html`
    } else {
        alert("We couldn't create your post, please try again.")
    }

    return await response.json();
}