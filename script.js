const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("back");

const info = document.getElementById("info");
const planSelection = document.getElementById("planSelection");

//SIDEBAR STEPS COLOR
const stepOne = document.getElementById("stepOne");
const stepTwo = document.getElementById("stepTwo");

//PLANS BOXES
const arcadeBox = document.getElementById("arcade");
const advancedBox = document.getElementById("advanced");
const proBox = document.getElementById("pro");

// First Next Button
nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  info.style.display = "none";
  planSelection.style.display = "block";

  // STEP ONE
  stepOne.style.backgroundColor = "transparent";
  stepOne.style.color = "hsl(0, 0%, 100%)";

  // STEP TWO
  stepTwo.style.backgroundColor = "hsl(206, 94%, 87%)";
  stepTwo.style.color = "black";
  stepTwo.style.fontFamily = "Ubuntu-Bold";
});
backBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

// Arcade Box
arcadeBox.addEventListener("click", () => {
  arcadeBox.style.backgroundColor = "hsl(217, 100%, 97%)";
  arcadeBox.style.borderColor = "hsl(243, 100%, 62%)";

  advancedBox.style.backgroundColor = "hsl(0, 0%, 100%)";
  advancedBox.style.borderColor = "hsl(229, 24%, 87%)";
  proBox.style.backgroundColor = "hsl(0, 0%, 100%)";
  proBox.style.borderColor = "hsl(229, 24%, 87%)";
});
// Advanced Box
advancedBox.addEventListener("click", () => {
  advancedBox.style.backgroundColor = "hsl(217, 100%, 97%)";
  advancedBox.style.borderColor = "hsl(243, 100%, 62%)";

  arcadeBox.style.backgroundColor = "hsl(0, 0%, 100%)";
  arcadeBox.style.borderColor = "hsl(229, 24%, 87%)";
  proBox.style.backgroundColor = "hsl(0, 0%, 100%)";
  proBox.style.borderColor = "hsl(229, 24%, 87%)";
});
// Pro Box
proBox.addEventListener("click", () => {
  proBox.style.backgroundColor = "hsl(217, 100%, 97%)";
  proBox.style.borderColor = "hsl(243, 100%, 62%)";

  advancedBox.style.backgroundColor = "hsl(0, 0%, 100%)";
  advancedBox.style.borderColor = "hsl(229, 24%, 87%)";
  arcadeBox.style.backgroundColor = "hsl(0, 0%, 100%)";
  arcadeBox.style.borderColor = "hsl(229, 24%, 87%)";
});
