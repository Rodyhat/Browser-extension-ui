// new code();
const all = document.getElementById("all");
const active = document.getElementById("active");
const inactive = document.getElementById("inactive");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const lensDiv = document.querySelectorAll(".lens");
const body = document.querySelector("body");
const genLogo = document.querySelector(".gen-logo");
const headingDiv = document.querySelectorAll("#heading");
const paragraph = document.querySelectorAll("p");
const remove = document.querySelectorAll("#remove");
const h1 = document.querySelector("h1");
const switchDivs = document.querySelectorAll(".switchDiv");
const switchControls = document.querySelectorAll("#switchControl");
const messageContainer = document.getElementById("displayText");
const extension = document.getElementById("extension");

let isDarkMode = false;

// Function to reset button styles in dark mode
function resetButtonStyles() {
  all.style.color = "white";
  all.style.backgroundColor = "#2F354B";
  active.style.color = "white";
  active.style.backgroundColor = "#525869";
  inactive.style.color = "white";
  inactive.style.backgroundColor = "#525869";
}
// Function to reset button styles in light mode
function resetButtonStylesLight() {
  all.style.color = "black";
  all.style.backgroundColor = "white";
  active.style.color = "black";
  active.style.backgroundColor = "white";
  inactive.style.color = "black";
  inactive.style.backgroundColor = "white";
}

// Function to handle button clicks
function handleButtonClick(button) {
  if (isDarkMode) {
    resetButtonStyles(); // Reset all buttons before applying the active style
    button.style.color = "black";
    button.style.backgroundColor = "red";
  }

  if (!isDarkMode) {
    resetButtonStylesLight(); // Reset all buttons before applying the active style
    button.style.color = "white";
    button.style.backgroundColor = "#C9221C";
  }
}

// Dark mode activation
moon.addEventListener("click", () => {
  isDarkMode = true;

  moon.style.display = "none";
  sun.style.display = "block";
  body.style.background = "linear-gradient(180deg, #040918 0%, #091540 100%)";
  genLogo.style.backgroundColor = "#1F2535";
  extension.style.color = "white";

  lensDiv.forEach((element) => {
    element.style.backgroundColor = "#1F2535";
  });

  paragraph.forEach((element) => {
    element.style.color = "rgba(243, 242, 242, 0.48)";
  });

  headingDiv.forEach((element) => {
    element.style.color = "white";
  });

  remove.forEach((element) => {
    element.style.color = "white";
    element.style.backgroundColor = "#1F2535";
    element.style.border = "1px solid rgba(243, 242, 242, 0.3)";
  });

  h1.style.color = "white";
  resetButtonStyles(); // Apply dark mode button styles
});

// Light mode activation
sun.addEventListener("click", () => {
  isDarkMode = false;

  moon.style.display = "block";
  sun.style.display = "none";
  genLogo.style.backgroundColor = "white";
  body.style.background = "linear-gradient(180deg, #ebf2fc 0%, #eef8f9 100%)";
  h1.style.color = "black";
  extension.style.color = "black";

  lensDiv.forEach((element) => {
    element.style.backgroundColor = "white";
  });

  headingDiv.forEach((element) => {
    element.style.color = "black";
  });

  paragraph.forEach((element) => {
    element.style.color = "rgba(0, 0, 0, 0.69)";
  });

  remove.forEach((element) => {
    element.style.color = "black";
    element.style.backgroundColor = "white";
    element.style.border = "1px solid #0000003c";
  });

  // Default button styles for light mode
  all.style.color = "white";
  all.style.backgroundColor = "#c9221c";
  active.style.color = "black";
  active.style.backgroundColor = "white";
  inactive.style.color = "black";
  inactive.style.backgroundColor = "white";
});

// // Toggle button for active/inactive mode
switchControls.forEach((control, index) => {
  control.addEventListener("click", () => {
    let div = switchDivs[index];
    div.classList.toggle("active");
    control.classList.toggle("moved");

    if (
      control.style.transform === "translateX(0px)" ||
      control.style.transform === ""
    ) {
      control.style.transform = "translateX(19px)";
    } else {
      control.style.transform = "translateX(0px)";
    }
  });
});

// Function to hide the message
const hideMessage = () => {
  messageContainer.textContent = "";
  messageContainer.style.display = "none";
};

// Click event for "All" button
all.addEventListener("click", () => {
  handleButtonClick(all);

  switchDivs.forEach((div) => {
    div.style.display = "flex";
  });

  lensDiv.forEach((lens) => {
    lens.style.display = "block";
  });
});

// Click event for "Active" button
active.addEventListener("click", () => {
  handleButtonClick(active);

  let hasActive = false;
  lensDiv.forEach((lens) => {
    let switchDiv = lens.querySelector(".switchDiv");
    if (switchDiv && switchDiv.classList.contains("active")) {
      lens.style.display = "block";
      switchDiv.style.display = "flex";
      switchDiv.scrollIntoView({ behavior: "smooth" });
      hasActive = true;
    } else {
      lens.style.display = "none";
    }
  });

  if (!hasActive) {
    messageContainer.textContent = "No active element found!";
    messageContainer.style.display = "block";
  } else {
    hideMessage();
  }
});

// Click event for "Inactive" button
inactive.addEventListener("click", () => {
  handleButtonClick(inactive);

  let hasInActive = false;
  lensDiv.forEach((lens) => {
    let switchDiv = lens.querySelector(".switchDiv");
    if (switchDiv && !switchDiv.classList.contains("active")) {
      lens.style.display = "block";
      switchDiv.style.display = "flex";
      switchDiv.scrollIntoView({ behavior: "smooth" });
      hasInActive = true;
    } else {
      lens.style.display = "none";
    }
  });

  if (!hasInActive) {
    messageContainer.textContent = "No inactive element found!";
    messageContainer.style.display = "block";
  } else {
    hideMessage();
  }
});

// remove functionality
// select all remove button

document.querySelectorAll("#remove").forEach((button) => {
  button.addEventListener("click", function () {
    this.closest(".lens").remove(); // Removes the closest parent div with class "lens"
  });
});
