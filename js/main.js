const model = document.querySelector(".model");
const btnDone = document.querySelector(".btn-done");
const btnUzb = document.querySelector(".btn-uzb");
const btnCross = document.querySelector("#btn-cross");
btnUzb.addEventListener("click", () => {
  model.style.display = "block";
});
btnDone.addEventListener("click", () => {
  model.style.display = "none";
});

const btnSidebar = document.querySelector(".btn-sidebar");
const btnClose = document.querySelector(".btn-close");
const sidebar = document.querySelector(".sidebar");
btnSidebar.addEventListener("click", () => {
  sidebar.classList.add("show");
});
btnClose.addEventListener("click", () => {
  sidebar.classList.remove("show");
  btnCross.style.display = "none";
});
btnSidebar.addEventListener("click", () => {
  btnCross.style.display = "block";
});
