import { appendDeleteButton } from "../../utilities/appendDeleteButton";
import { appendEditLink } from "../../utilities/appendEditLink";

export function singlePostTemplate(post) {
    // Main container for the post
    const postElement = document.createElement("div");
    postElement.classList.add(
        "post-element",
        "bg-teal-950", 
        "rounded-lg", 
        "shadow-lg", 
        "p-6", 
        "dark:bg-neutral-800", 
        "max-w-3xl", 
        "mx-auto", 
        "my-10", 
        "break-words"
    );

    // Author info
    const user = document.createElement("p");
    user.innerText = `Posted by: ${post.author.name}`;
    user.classList.add("text-sm", "text-emerald-100", "dark:text-white", "mb-4");
    postElement.appendChild(user);

    // Post title
    const title = document.createElement("h2");
    title.innerText = post.title;
    title.classList.add("text-2xl", "font-bold", "text-white", "dark:text-white", "mb-4");
    postElement.appendChild(title);

    // Media (if any)
    if (post.media && post.media.url) {
        const mediaContainer = document.createElement("div");
        mediaContainer.classList.add("overflow-hidden", "rounded-md", "mb-4");

        const media = document.createElement("img");
        media.setAttribute("src", post.media.url);
        media.setAttribute("alt", post.media.alt || "Post image");
        media.classList.add("w-full", "h-auto");
        
        mediaContainer.appendChild(media);
        postElement.appendChild(mediaContainer);
    }

    // Post body
    const body = document.createElement("p");
    body.innerText = post.body;
    body.classList.add("text-white", "dark:text-white", "mb-4");
    postElement.appendChild(body);

    // Tags
    const tags = document.createElement("p");
    tags.innerText = post.tags;
    tags.classList.add("text-sm", "text-emerald-100", "dark:text-white", "mb-4");
    postElement.appendChild(tags);

    // Edit and Delete Buttons
    postElement.append(
        appendEditLink(post, post.author.name),
        appendDeleteButton(post, post.author.name)
    );

    return postElement;
}
