const toggleButtons = document.querySelectorAll(".toggle-button");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const extraText =
      button.parentElement.nextElementSibling.querySelector(".extra-text");
    const isHidden =
      extraText.style.display === "none" || !extraText.style.display;
    extraText.style.display = isHidden ? "block" : "none";
    button.textContent = isHidden ? "-" : "+";
  });
});
