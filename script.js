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

// active and inactive button

// filtering active extension
// active.addEventListener("click", () => {
//   active.style.backgroundColor = "#f25e54";
//   active.style.color = "white";
//   all.style.color = "black";
//   all.style.backgroundColor = "white";
//   inactive.style.color = "black";
//   inactive.style.backgroundColor = "white";

//   let hasActive = false;

//   // show only active extensions
//   switchDivs.forEach((div) => {
//     // div.style.display = div.classList.contains("active") ? "block" : "none";
//     if (div.classList.contains("active")) {
//       div.style.display = "block"; // Show active extensions
//       div.scrollIntoView({ behavior: "smooth" });
//       hasActive = true;
//     } else {
//       div.style.display = "none"; // Hide inactive extensions
//     }
//   });
// });


active.addEventListener("click", () => {
  active.style.backgroundColor = "#f25e54";
  active.style.color = "white";
  all.style.color = "black";
  all.style.backgroundColor = "white";
  inactive.style.color = "black";
  inactive.style.backgroundColor = "white";

  let hasActive = false;

  // Show only active elements, hide inactive ones
  switchDivs.forEach((div) => {
    if (div.classList.contains("active")) {
      div.style.display = "flex"; // Ensure the correct display type
      div.scrollIntoView({ behavior: "smooth" });
      hasActive = true;
    } else {
      div.style.display = "none"; // Hide inactive ones
    }
  });
});

