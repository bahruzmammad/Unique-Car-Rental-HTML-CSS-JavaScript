const menuButton = document.getElementById("menu-button");
const navigationLinks = document.getElementById("navigation-links");
const menuButtonIcon = menuButton.querySelector("i");
menuButton.addEventListener("click", () => {
  navigationLinks.classList.toggle("open");
  const isMenuOpen = navigationLinks.classList.contains("open");
  menuButtonIcon.setAttribute(
    "class",
    isMenuOpen ? "ri-close-line" : "ri-menu-3-line",
  );
});
navigationLinks.addEventListener("click", () => {
  navigationLinks.classList.remove("open");
  menuButtonIcon.setAttribute("class", "ri-menu-3-line");
});
const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
ScrollReveal().reveal(".header-image img", {
  ...scrollRevealOptions,
  origin: "right",
});
ScrollReveal().reveal(".header-content h1", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".header-content .section-description", {
  ...scrollRevealOptions,
  delay: 1000,
});
ScrollReveal().reveal(".about-image img", {
  ...scrollRevealOptions,
  origin: "left",
});
ScrollReveal().reveal(".about-content .section-subheader", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".about-content .section-header", {
  ...scrollRevealOptions,
  delay: 1000,
});
ScrollReveal().reveal(".about-content .section-description", {
  ...scrollRevealOptions,
  delay: 1500,
  interval: 500,
});
ScrollReveal().reveal(".about-button", { ...scrollRevealOptions, delay: 2500 });
const fleetRows = document.querySelectorAll(".fleet-row");
fleetRows.forEach((fleetRow) => {
  const fleetImages = fleetRow.querySelector(".fleet-images");
  const fleetItems = Array.from(fleetImages.children);
  fleetItems.forEach((item) => {
    const duplicateItem = item.cloneNode(true);
    duplicateItem.setAttribute("aria-hidden", "true");
    fleetImages.appendChild(duplicateItem);
  });
});
ScrollReveal().reveal(".feature-card", {
  ...scrollRevealOptions,
  interval: 500,
});
ScrollReveal().reveal(".contact-container .section-header", {
  ...scrollRevealOptions,
});
ScrollReveal().reveal(".contact-container .section-description", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".contact-button", {
  ...scrollRevealOptions,
  delay: 1000,
});
