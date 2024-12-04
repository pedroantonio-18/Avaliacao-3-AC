const toggleButtons = document.querySelectorAll(".toggle-button");

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const contentInfo = button.closest(".container").querySelector(".extra-text");
    const isHidden = contentInfo.style.display === "none" || !contentInfo.style.display;
    contentInfo.style.display = isHidden ? "block" : "none";
    button.textContent = isHidden ? "-" : "+";
  });
});
