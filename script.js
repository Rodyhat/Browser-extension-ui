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
const messageContainer = document.getElementById("displayText"); // Element to show the message

// moon and sun , light and dark mode

moon.addEventListener("click", () => {
  moon.style.display = "none";
  sun.style.display = "block";
  body.style.background = "linear-gradient(180deg, #040918 0%, #091540 100%)";
  genLogo.style.backgroundColor = "#1F2535";
  lensDiv.forEach((element) => {
    element.style.backgroundColor = "#1F2535";
  });
  //
  paragraph.forEach((element) => {
    element.style.color = "rgba(243, 242, 242, 0.48)";
  });
  headingDiv.forEach((element) => {
    element.style.color = "white";
  });
  remove.forEach((element) => {
    element.style.color = "white";
  });
  remove.forEach((element) => {
    element.style.backgroundColor = "#1F2535";
  });
  h1.style.color = "white";
  remove.forEach((element) => {
    element.style.border = "1px solid rgba(243, 242, 242, 0.3)";
  });
});

sun.addEventListener("click", () => {
  moon.style.display = "block";
  sun.style.display = "none";
  genLogo.style.backgroundColor = "white";
  body.style.background = "linear-gradient(180deg, #ebf2fc 0%, #eef8f9 100%)";
  h1.style.color = "black";
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
});

// toggle button, for active and inactive mode

switchControls.forEach((control, index) => {
  control.addEventListener("click", () => {
    let div = switchDivs[index];
    div.classList.toggle("active");
    control.classList.toggle("moved");

    // Toggle position of switchControl using transform
    if (
      control.style.transform === "translateX(0px)" ||
      control.style.transform === ""
    ) {
      control.style.transform = "translateX(19px)"; // Move to the left
    } else {
      control.style.transform = "translateX(0px)"; // Move back to the right
    }
  });
});

// Function to hide the message
const hideMessage = () => {
  messageContainer.textContent = "";
  messageContainer.style.display = "none";
};

// all button
all.addEventListener("click", () => {
  all.style.color = "white";
  all.style.backgroundColor = "#f25e54";
  active.style.color = "black";
  active.style.backgroundColor = "white";
  inactive.style.color = "black";
  inactive.style.backgroundColor = "white";

  // Show all elements
  switchDivs.forEach((div) => {
    div.style.display = "flex"; // Ensures the correct display type
  });

  lensDiv.forEach((lens) => {
    lens.style.display = "block"; // Show the parent container
  });
});

// active and inactive button

// active button
active.addEventListener("click", () => {
  active.style.backgroundColor = "#f25e54";
  active.style.color = "white";
  all.style.color = "black";
  all.style.backgroundColor = "white";
  inactive.style.color = "black";
  inactive.style.backgroundColor = "white";

  let hasActive = false;

  // Iterate over all lens containers
  lensDiv.forEach((lens) => {
    let switchDiv = lens.querySelector(".switchDiv"); // Find switchDiv inside lens
    if (switchDiv && switchDiv.classList.contains("active")) {
      lens.style.display = "block"; // Show parent lens
      switchDiv.style.display = "flex"; // Ensure the switchDiv is displayed
      switchDiv.scrollIntoView({ behavior: "smooth" });
      hasActive = true;
    } else {
      lens.style.display = "none"; // Hide if no active switchDiv is found
    }
  });

  if (!hasActive) {
    messageContainer.textContent = "No active element found!";
    messageContainer.style.display = "block";
  } else {
    hideMessage();
  }
});

// inactive button
inactive.addEventListener("click", () => {
  inactive.style.backgroundColor = "#f25e54";
  inactive.style.color = "white";
  all.style.color = "black";
  all.style.backgroundColor = "white";
  active.style.color = "black";
  active.style.backgroundColor = "white";

  let hasInActive = false;

  // Iterate over all lens containers
  lensDiv.forEach((lens) => {
    let switchDiv = lens.querySelector(".switchDiv"); // Find switchDiv inside lens
    if (switchDiv && !switchDiv.classList.contains("active")) {
      lens.style.display = "block"; // Show parent lens
      switchDiv.style.display = "flex"; // Ensure the switchDiv is displayed
      switchDiv.scrollIntoView({ behavior: "smooth" });
      hasInActive = true;
    } else {
      lens.style.display = "none"; // Hide if no active switchDiv is found
    }
  });

  if (!hasInActive) {
    messageContainer.textContent = "No inactive element found!";
    messageContainer.style.display = "block";
  } else {
    hideMessage();
  }
});
