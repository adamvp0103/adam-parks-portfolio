const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const nav = document.querySelector(".nav");
const largerScreenQuery = window.matchMedia("(min-width: 641px)");

function toggleNav() {
  nav.classList.toggle("hidden");
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
}

function handleScreenSize() {
  if (largerScreenQuery.matches) {
    // Show nav immediately on larger screens
    nav.classList.remove("hidden");
  } else {
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
    nav.classList.add("hidden");
  }
}

largerScreenQuery.addEventListener("change", handleScreenSize);

handleScreenSize();
