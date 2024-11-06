import { load } from "../api/storage/load";
import { onDeletePost } from "../ui/post/delete";

export const appendDeleteButton = (post, author) => {
    const profile = load("profile");
    const userName = profile.name;

    if (author === userName) {
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.setAttribute("id", `${post.id}`);
        deleteButton.addEventListener("click", onDeletePost);

        // Add Tailwind CSS classes for button styling
        deleteButton.classList.add(
            "text-teal-100",            // Teal text color
            "hover:text-teal-600",      // Darker color on hover
            "px-4", "py-2",             // Padding for clickable area
            "rounded-md",               // Rounded corners
            "focus:outline-none",       // Remove default focus outline
        );

        return deleteButton;
    } else {
        return "";
    }
}