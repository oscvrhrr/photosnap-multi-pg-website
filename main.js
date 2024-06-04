const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("hide");
});

const switchBall = document.getElementsByClassName("switch-ball")[0];
const capsule = document.getElementsByClassName("switch__capsule")[0];


let state = false;

capsule.addEventListener('click', () => {

    if (state) {
      switchBall.classList.remove("switch-ball--turn-on");
      state = false;
    } else {
      switchBall.classList.add("switch-ball--turn-on")
      state = true;
    }

});







