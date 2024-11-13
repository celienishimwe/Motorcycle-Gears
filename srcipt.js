const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
hamburger.addEventListener("click", () => {
  if (nav.classList != "active") {
    nav.classList.add("active");
    hamburger.innerHTML = "&#10006;";
  } else {
    nav.classList.remove("active");
    hamburger.innerHTML = "&#9776;";
  }
});
