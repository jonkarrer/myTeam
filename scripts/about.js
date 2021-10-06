const crossButtons = document.querySelectorAll("#cross-button");

crossButtons.forEach((item) =>
  item.addEventListener("click", (e) => changeArticle(e))
);

const changeArticle = (e) => {
  const button = e.currentTarget;

  const children = button.parentElement.children;
  const img = children[0];
  const career = children[2];
  const quote = children[3];
  const social = children[4];

  if (button.dataset.toggle === "open") {
    img.style.display = "block";
    career.style.display = "block";
    quote.style.display = "none";
    social.style.display = "none";

    button.style.transform = "translateY(50%)";
    button.style.background = "var(--light-coral)";
    button.dataset.toggle = "closed";
  } else {
    img.style.display = "none";
    career.style.display = "none";
    quote.style.display = "block";
    social.style.display = "block";

    button.style.transform = "translateY(50%) rotate(135deg)";
    button.style.background = "var(--rapture-blue)";
    button.dataset.toggle = "open";
  }
};
