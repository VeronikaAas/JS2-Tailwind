export function onLogout() {
  console.log("click");

  remove("userinfo");
  remove("token");
  alert("You have been logged out.");
  window.location.href = "/auth/login/";
}