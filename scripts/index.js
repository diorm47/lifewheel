const setEmail = document.querySelector(".continue_email");
const continue_btn_to_password = document.querySelector(
  ".continue_btn_to_password"
);
const to_socials_auth = document.querySelector(".to_socials_auth");
const to_email_auth = document.querySelector(".to_email_auth");
const logo = document.querySelector(".logo_content");

setEmail.addEventListener("click", () => {
  document.querySelector(".auth_socials_block").style.display = "none";
  document.querySelector(".email_block").style.display = "block";
  document.querySelector(".back_page").style.display = "flex";
  if (window.matchMedia("(max-width: 450px)").matches) {
    logo.style.display = "none";
  }
});

to_socials_auth.addEventListener("click", () => {
  document.querySelector(".auth_socials_block").style.display = "block";
  document.querySelector(".email_block").style.display = "none";
  document.querySelector(".back_page").style.display = "none";

  if (window.matchMedia("(max-width: 450px)").matches) {
    logo.style.display = "flex";
  }
});

continue_btn_to_password.addEventListener("click", () => {
  document.querySelector(".email_block").style.display = "none";
  document.querySelector(".password_block").style.display = "block";
  to_socials_auth.style.display = "none";
  to_email_auth.style.display = "flex";
});

to_email_auth.addEventListener("click", () => {
  document.querySelector(".email_block").style.display = "block";
  document.querySelector(".password_block").style.display = "none";
  to_socials_auth.style.display = "flex";
  to_email_auth.style.display = "none";
});
