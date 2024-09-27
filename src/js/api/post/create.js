import { headers } from "../headers";
import { API_SOCIAL_POSTS } from "../constants";

export async function createPost({ title, body, tags, media }) {
  const bodyElement = {
    title: title,
    body: body,
    tags: tags,
    media: media,
  };

  try {
    const response = await fetch(API_SOCIAL_POSTS, {
      method: "POST",
      headers: headers(true),
      body: JSON.stringify(bodyElement),
    });

    if (response.ok) {
      alert("You created a post!");
      window.location.href = "/";
  } else {
    const errorMessage = await response.json();
    console.error("Error message from API:", errorMessage);
    alert("Could not create post. Please check your token.");
  }
} catch (error) {
  alert("Something went wrong trying to create a post!");
  console.error(error);
}
}