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
            "text-teal-100",            
            "hover:text-teal-600",      
            "px-4", "py-2",             
            "rounded-md",               
            "focus:outline-none",  
            "dark:text-white"     
        );

        return deleteButton;
    } else {
        return "";
    }
}