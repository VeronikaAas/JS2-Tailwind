import { appendDeleteButton } from "../../utilities/appendDeleteButton";
import { appendEditLink } from "../../utilities/appendEditLink";

export function postsTemplate(posts) {
    return posts.map(post => {
        // Main container for each post
        const postElement = document.createElement("div");
        postElement.classList.add(
            "post-element", 
            "bg-teal-950", 
            "rounded-lg", 
            "shadow-lg", 
            "p-6", 
            "mb-6", 
            "dark:bg-neutral-800",
            "max-w-3xl",
            
        );

        // Clickable thumbnail or link to the full post
        const clickableThumbnail = document.createElement("a");
        clickableThumbnail.setAttribute("href", `/post/?id=${post.id}`);
        clickableThumbnail.classList.add("block", "hover:underline");

        // Author name
        const user = document.createElement("p");
        user.innerText = `Posted by: ${post.author.name}`;
        user.classList.add("text-sm", "text-emerald-100", "dark:text-gray-200", "mb-2");
        clickableThumbnail.appendChild(user);

        // Post title
        const title = document.createElement("h2");
        title.innerText = post.title;
        title.classList.add("text-xl", "font-semibold", "text-white", "dark:text-white", "mb-2");
        clickableThumbnail.appendChild(title);

        // Media (if any)
        if (post.media && post.media.url) {
            const mediaContainer = document.createElement("div");
            mediaContainer.classList.add("overflow-hidden", "rounded-md", "mb-4");

            const media = document.createElement("img");
            media.setAttribute("src", post.media.url);
            media.setAttribute("alt", post.media.alt || "Post image");
            media.classList.add("w-full", "h-auto");
            
            mediaContainer.appendChild(media);
            clickableThumbnail.appendChild(mediaContainer);

        }

        // Post body
        const body = document.createElement("p");
        body.innerText = post.body;
        body.classList.add("text-white", "dark:text-gray-200", "mb-4");
        clickableThumbnail.appendChild(body);

        // Tags
        const tags = document.createElement("p");
        tags.innerText = post.tags;
        tags.classList.add("text-sm", "text-emerald-100","dark:text-gray-200", "mb-4");
        clickableThumbnail.appendChild(tags);

        // Add all elements to the post element
        postElement.append(
            clickableThumbnail,
            appendEditLink(post, post.author.name),
            appendDeleteButton(post, post.author.name)
        );

        return postElement;
    });
}