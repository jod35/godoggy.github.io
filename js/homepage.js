const home_menu = document.querySelector("#menu-home");
const vert_navBar = document.querySelector(".vertical-menu");
const menu_items = document.querySelectorAll(".menu-item");
const menu_close_btn = document.querySelector(".menu-close-btn");

home_menu.addEventListener("click", () => {
  vert_navBar.style.display = "block";
  vert_navBar.style.padding = "0px";
  vert_navBar.style.color = "coral";
  vert_navBar.style.fontWeight = "bolder";
  // vert_navBar.style.borderRadius = "7px";

  for (i of menu_items) {
    i.addEventListener("mouseOver", () => {
      i.style.backgroundColor = "coral";
      i.style.color = "white";
      i.transform = "scale(1.2)";
    });
  }
});

menu_close_btn.addEventListener("click", () => {
  vert_navBar.style.display = "none";
});
