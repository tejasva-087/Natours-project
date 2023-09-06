const checkBtn = document.querySelector(".navigation__checkbox");
const navLink = document.querySelectorAll(".navigation__link");

navLink.forEach((val) => {
  val.addEventListener("click", function () {
    checkBtn.checked = false;
  });
});
