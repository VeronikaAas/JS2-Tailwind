//export async function readPost(id) {}

//export async function readPosts(limit = 12, page = 1, tag) {}

//export async function readPostsByUser(username, limit = 12, page = 1, tag) {}

import { headers } from "../headers.js";
import { API_BASE, API_SOCIAL_POSTS } from "../constants.js";

export async function getPosts() {
    const response = await fetch (API_BASE + API_SOCIAL_POSTS, {
        headers: headers()
    });
    return await response.json();
}