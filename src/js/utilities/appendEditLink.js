import { load } from "../api/storage/load";

export const appendEditLink = (post, author) => {
    const profile = load("profile");
    const userName = profile.name;

    if (author === userName) {
        const editLink = document.createElement("a");
        editLink.innerText = "Edit";
        editLink.setAttribute("href", `/post/edit/?id=${post.id}`);
        editLink.setAttribute("id", "edit-link");

        // Add Tailwind CSS classes for styling
        editLink.classList.add(
            "text-teal-100",            
            "hover:text-teal-600",      
            "px-4", "py-2",             
            "rounded-md",               
            "focus:outline-none", 
            "dark:text-white"      
        );

        return editLink;
    } else {
        return "";
    }
}
