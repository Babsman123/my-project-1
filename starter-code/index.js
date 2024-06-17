const menuOpen = document.querySelector(".navigation__menu-open");
const menuClose = document.querySelector(".navigation__menu-close");

const openTextBox = document.querySelector(".header__text-box");
const sliderBox = document.querySelectorAll(".radio__crew-group");
const sliderCrew1 = document.querySelectorAll(".crew-details");
// const sliderCrew2 = document.querySelector(".details--2");

console.log(sliderCrew1);

menuOpen.addEventListener("click", () => {
  openTextBox.style.opacity = 1;
  openTextBox.style.visibility = "visible";
  menuOpen.style.display = "none";
  menuClose.style.display = "block";
});

menuClose.addEventListener("click", () => {
  openTextBox.style.opacity = 0;
  openTextBox.style.visibility = "hidden";
  menuClose.style.display = "none";
  menuOpen.style.display = "block";
});

console.log(sliderBox);
// sliderBox[0].addEventListener("click", () => {
//   console.log("Helo");
// });

for (let i = 0; i < sliderBox.length; i++) {
  sliderBox[0].addEventListener("click", () => {
    console.log("Helo");
    sliderCrew1[0].style.display = "block";
    sliderCrew1[1].style.display = "none";
    sliderCrew1[2].style.display = "none";
    sliderCrew1[3].style.display = "none";
  });

  sliderBox[1].addEventListener("click", () => {
    console.log("my life");
    sliderCrew1[0].style.display = "none";
    sliderCrew1[1].style.display = "block";
    sliderCrew1[1].style.opacity = 1;
    sliderCrew1[1].style.visibility = "visible";
    sliderCrew1[2].style.display = "none";
    sliderCrew1[3].style.display = "none";
    // sliderCrew1.style.visibility = "hidden";
    // sliderCrew1.style.visibility = 0;
    // sliderCrew2.style.display = "block";
  });

  sliderBox[2].addEventListener("click", () => {
    console.log("come here");
    sliderCrew1[0].style.display = "none";
    sliderCrew1[1].style.display = "none";
    sliderCrew1[2].style.display = "block";
    sliderCrew1[3].style.display = "none";
  });

  sliderBox[3].addEventListener("click", () => {
    console.log("green");
    sliderCrew1[0].style.display = "none";
    sliderCrew1[1].style.display = "none";
    sliderCrew1[2].style.display = "none";
    sliderCrew1[3].style.display = "block";
  });
}
