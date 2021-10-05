const x = document.getElementById("close_nav");
const hamburger = document.querySelector("header.mobile .hamburger");

hamburger.addEventListener("click", () => toggleNav(true));
x.addEventListener("click", () => toggleNav(false));

const toggleNav = (bool) => {
  const nav = document.querySelector("header.mobile nav");
  if (bool) return (nav.style.transform = "translateX(0)");
  if (!bool) return (nav.style.transform = "translateX(100%)");
};
