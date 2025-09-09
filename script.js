// Function with parameters and return value
function calculateTechScore(speed, innovation) {
  let score = speed * innovation; // local scope
  return score;
}

// Trigger animation on button click
document.getElementById("animateBtn").addEventListener("click", function () {
  const box = document.getElementById("box");
  box.classList.add("animate");

  // Use the function
  const techScore = calculateTechScore(8, 9);
  console.log("Rebbrown Tech Score:", techScore);
});
