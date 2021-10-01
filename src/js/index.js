"use strict";
const container = document.querySelector("#app");
const pacman = document.querySelector("#pacman");
const close = () => {
  pacman.classList.remove("entity--pac");
  pacman.classList.add("entity--pac--close");
};
container.addEventListener("click", close());
console.log("it wogbvgrks!");
