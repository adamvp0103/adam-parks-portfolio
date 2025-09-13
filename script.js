const navButton = document.getElementById("nav-button");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const nav = document.getElementById("nav");
const largerScreenQuery = window.matchMedia("(min-width: 641px)");

function toggleNav() {
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  nav.classList.toggle("hidden");
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

navButton.addEventListener("click", toggleNav);
largerScreenQuery.addEventListener("change", handleScreenSize);

handleScreenSize();