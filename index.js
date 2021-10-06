const x = document.getElementById("close_nav");
const hamburger = document.querySelector("header.mobile .hamburger");
const nav = document.querySelector("header.mobile nav");

window.onload = () => (nav.style.transition = "transform 0.6s ease");

hamburger.addEventListener("click", () => toggleNav(true));
x.addEventListener("click", () => toggleNav(false));

const toggleNav = (bool) => {
  if (bool) return (nav.style.transform = "translateX(0)");
  if (!bool) {
    nav.style.transform = "translateX(-10%)";
    setTimeout(() => (nav.style.transform = "translateX(100%)"), 300);
  }
};
