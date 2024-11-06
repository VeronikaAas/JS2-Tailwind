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
            "text-teal-100",            // Teal text color
            "hover:text-teal-600",      // Darker color on hover
            "px-4", "py-2",             // Padding for clickable area
            "rounded-md",               // Rounded corners
            "focus:outline-none",       // Remove default focus outline
        );

        return editLink;
    } else {
        return "";
    }
}
