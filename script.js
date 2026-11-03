// SPARC website interactions
// Keep this file in the same folder as index.html and style.css.

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const open = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    mainNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Photo-only gallery: place these exact image files in assets/photos/.
  const galleryPhotos = [
    "assets/photos/20260810_152823.jpg",
    "assets/photos/IMG-20260721-WA0076.jpg",
    "assets/photos/IMG-20260827-WA0021.jpg",
    "assets/photos/IMG-20260902-WA0035.jpg",
    "assets/photos/IMG-20260902-WA0036.jpg"
  ];

  const grid = document.getElementById("galleryGrid");
  if (grid) {
    grid.replaceChildren();
    galleryPhotos.forEach((src, index) => {
      const card = document.createElement("figure");
      card.className = "gallery-item";
      const img = document.createElement("img");
      img.src = src;
      img.alt = `SPARC training and programme photograph ${index + 1}`;
      img.loading = "lazy";
      img.onerror = () => card.remove();
      card.appendChild(img);
      grid.appendChild(card);
    });
  }
});
