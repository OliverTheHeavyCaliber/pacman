"use strict";
const container = document.querySelector("#app");
const pacman = document.querySelector("#pacman");
let desigion = 0;
const close = () => {
  if (desigion === 0) {
    pacman.classList.remove("entity--pac");
    pacman.classList.add("entity--pac--close");
    desigion = 1;
  } else if (desigion === 1) {
    pacman.classList.remove("entity--pac--close");
    pacman.classList.add("entity--pac");
    desigion = 0;
  }
};
container.addEventListener("click", close);
console.log("it wogbvgrks!");
