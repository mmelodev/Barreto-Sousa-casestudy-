const togglebtn = document.querySelector(".toggle-button");
const dropdownmenu = document.querySelector(".dropdown-menu");

togglebtn.addEventListener("click", () => {
  dropdownmenu.classList.toggle("top-[-100%]");
  dropdownmenu.classList.toggle("top-16");
});
