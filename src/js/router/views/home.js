import { readPosts } from "../../api/post/read";
import { setLogoutListener } from "../../ui/global/logout";
import { authGuard } from "../../utilities/authGuard";

authGuard();
setLogoutListener();

const readHomePagePosts = async () => {
  const posts = await readPosts();
  console.log("All posts: ", posts);

};

readHomePagePosts();