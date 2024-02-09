const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("back");
const toggleOn = document.querySelector(".fa-toggle-on");
const toggleOff = document.querySelector(".fa-toggle-off");
const hover = document.querySelectorAll(".plans-box");

const monthly = document.getElementById("monthly");
const yearly = document.getElementById("yearly");

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

let boxClicked = false;

//Plans box
hover.forEach((box) => {
  box.addEventListener("mouseover", (event) => {
    if (!boxClicked) {
      event.target.style.borderColor = "hsl(243, 100%, 62%)";
    }
  });

  box.addEventListener("mouseout", (event) => {
    if (!boxClicked) {
      event.target.style.borderColor = "";
    }
  });

  box.addEventListener("click", () => {
    // Set the flag to true when a box is clicked
    boxClicked = true;

    // Set background and border color for the clicked box
    box.style.backgroundColor = "hsl(217, 100%, 97%)";
    box.style.borderColor = "hsl(243, 100%, 62%)";

    // Reset styles for other boxes
    hover.forEach((otherBox) => {
      if (otherBox !== box) {
        otherBox.style.backgroundColor = "hsl(0, 0%, 100%)";
        otherBox.style.borderColor = "hsl(229, 24%, 87%)";
      }
    });
  });
});

// Toggle time
toggleOn.addEventListener("click", () => {
  toggleOn.style.display = "none";
  toggleOff.style.display = "block";
  monthly.style.color = "hsl(213, 96%, 18%)";
  yearly.style.color = "hsl(231, 11%, 63%)";
});
toggleOff.addEventListener("click", () => {
  toggleOff.style.display = "none";
  toggleOn.style.display = "block";
  monthly.style.color = "hsl(231, 11%, 63%)";
  yearly.style.color = "hsl(213, 96%, 18%)";
});
