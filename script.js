// Find the button and popup elements once the page has loaded.
const considerButton = document.querySelector("#consider-button");
const popup = document.querySelector("#popup");

// Shake the button and reveal the playful message when clicked.
considerButton.addEventListener("click", () => {
  // Restart the animation so it plays on every click.
  considerButton.classList.remove("shake");
  void considerButton.offsetWidth;
  considerButton.classList.add("shake");

  // Show the popup text.
  popup.hidden = false;
});

// Remove the temporary shake class after its animation finishes.
considerButton.addEventListener("animationend", (event) => {
  if (event.animationName === "shake") {
    considerButton.classList.remove("shake");
  }
});