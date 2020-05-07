const menu_button = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const show_case = document.querySelector(".show-case");
const body = document.querySelector("body");

const menu_close = document.querySelector(".menu-close");
// const header = document.querySelector(".show-case");

menu_button.addEventListener("click", () => {
  console.log("Hello");
  overlay.style.display = "block";
  overlay.style.background = "darkslategray";
  overlay.style.height = "100%";
  overlay.style.display = "flex";
  overlay.style.width = "100%";
  overlay.style.justifyContent = "center";
  overlay.style.alignItems = "center";
  overlay.style.flexDirection = "column";
  // body.style.position = "fixed";
  show_case.style.width = "100%";
});

menu_close.addEventListener("click", () => {
  overlay.style.display = "none";
  show_case.style.width = "100%";
});
