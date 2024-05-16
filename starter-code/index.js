const menuOpen = document.querySelector(".navigation__menu-open");
const menuClose = document.querySelector(".navigation__menu-close");

const openTextBox = document.querySelector(".header__text-box");
console.log(menuOpen);

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
