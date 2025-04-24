const togglebtn = document.querySelector(".toggle-button");
const dropdownmenu = document.querySelector(".dropdown-menu");

togglebtn.addEventListener("click", () => {
  dropdownmenu.classList.toggle("top-[-100%]");
  dropdownmenu.classList.toggle("top-16");
});

//-------------------

document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".toggle-btn");

  toggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      const bloco = btn.closest("div");
      const texto = bloco.querySelector(".texto-expandido");

      texto.classList.toggle("line-clamp-3");

      const estaExpandido = !texto.classList.contains("line-clamp-3");
      btn.textContent = estaExpandido ? "Ver menos ↑" : "Ver mais ↓";
    });
  });
});

//------------------------

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".vertical-slide-carousel", {
    loop: true,
    direction: "vertical",
    mousewheel: {
      releaseOnEdges: true,
    },
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
      el: ".vertical-slide-carousel .swiper-pagination",
      clickable: true,
    },
  });
});
