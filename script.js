const all = document.getElementById("all");
const active = document.getElementById("active");
const inactive = document.getElementById("inactive");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const lensDiv = document.querySelectorAll(".lens");
const body = document.querySelector("body");
const genLogo = document.querySelector(".gen-logo");
const h4 = document.getElementById("h4");
const paragraph = document.querySelector("p");
const remove = document.getElementById("remove");
const h1 = document.querySelector("h1")

moon.addEventListener("click", () => {
  moon.style.display = "none";
  sun.style.display = "block";
  body.style.background = "linear-gradient(180deg, #040918 0%, #091540 100%)";
  genLogo.style.backgroundColor = "#1F2535";
  lensDiv.forEach(element => {
    element.style.backgroundColor = "#1F2535";
  });
  h4.style.color = "white";
  paragraph.style.color = "white";
  remove.style.color = "white";
  remove.style.backgroundColor = "#1F2535";
  h1.style.color = "white";
  remove.style.border = "1px solid white"
});
