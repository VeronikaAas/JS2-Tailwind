import { createPost } from "../../api/post/create";

export async function onCreatePost(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const media = {
    url: formData.get("url"),
    alt: formData.get("alt"),
  };

  const createPostData = {
    title: formData.get("title"),
    body: formData.get("text"),
    tags: formData.get("tags").split(" "),
    media: media,
  };

  console.log("Data to send:", createPostData);

  try {
    await createPost(createPostData);
  } catch (error) {
    console.error("Failed to create post:", error);
  }
}