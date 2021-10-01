"use strict";
const container = document.querySelector("#app");
const pacman = document.querySelector("#pacman");
let xpos = 0;
let ypos = 0;
pacman.style.left = xpos + "px";
pacman.style.top = ypos + "px";
let desigion = 0;
const walls = [[171, 1]];
const close = () => {
  if (desigion === 0) {
    pacman.classList.remove("entity--pac");
    pacman.classList.add("entity--pac--closed");
    desigion = 1;
  } else if (desigion === 1) {
    pacman.classList.remove("entity--pac--closed");
    pacman.classList.add("entity--pac");
    desigion = 0;
  }
};
container.addEventListener("click", close);
document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight" && xpos <= 850) {
    const newPosition = xpos + 85;
    const isMatch = collision(newPosition, ypos);
    if (isMatch) return;
    xpos += 85;
    pacman.classList.add("entity--pac--right");
    pacman.classList.remove("entity--pac--left");
    pacman.classList.remove("entity--pac--up");
    pacman.classList.remove("entity--pac--down");
    movement();
  } else if (event.code === "ArrowLeft" && xpos >= 85) {
    const newPosition = xpos - 85;
    const isMatch = collision(newPosition, ypos);
    if (isMatch) return;
    xpos -= 85;
    pacman.classList.add("entity--pac--left");
    pacman.classList.remove("entity--pac--right");
    pacman.classList.remove("entity--pac--up");
    pacman.classList.remove("entity--pac--down");
    movement();
  }
  console.log(xpos, ypos);
});
const movement = () => {
  {
    pacman.style.left = xpos + "px";
  }
};
document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp" && ypos >= 85) {
    const newPosition = ypos - 85;
    const isMatch = collision(xpos, newPosition);
    if (isMatch) return;
    ypos -= 85;
    pacman.classList.add("entity--pac--up");
    pacman.classList.remove("entity--pac--down");
    pacman.classList.remove("entity--pac--left");
    pacman.classList.remove("entity--pac--right");
    movementUp();
  } else if (event.code === "ArrowDown" && ypos <= 340) {
    const newPosition = ypos + 85;
    const isMatch = collision(xpos, newPosition);
    if (isMatch) return;
    ypos += 85;
    pacman.classList.add("entity--pac--down");
    pacman.classList.remove("entity--pac--up");
    pacman.classList.remove("entity--pac--left");
    pacman.classList.remove("entity--pac--right");
    movementUp();
  }
});
const movementUp = () => {
  pacman.style.top = ypos + "px";
};
console.log("it wogbvgrks!");

class Entity {
  constructor(y, x, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  render() {
    this.element = document.createElement("div");
    this.element.className = `entity entity--${this.type}`;
  }
  mount() {
    this.render();
    this.update();
    return this.element;
  }
  update() {
    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";
    console.log();
  }
}

const briks = [
  new Entity(85, 85, "wall"),
  new Entity(0, 255, "wall"),
  new Entity(85, 170, "wall"),
  new Entity(85, 255, "wall"),
  new Entity(85, 340, "wall"),
  new Entity(170, 255, "wall"),
  new Entity(255, 255, "wall"),
  new Entity(255, 85, "wall"),
  new Entity(255, 595, "wall"),
  new Entity(255, 680, "wall"),
  new Entity(0, 850, "wall"),
  new Entity(85, 850, "wall"),
  new Entity(170, 850, "wall"),
  new Entity(170, 935, "wall"),
  new Entity(340, 0, "wall"),
  new Entity(340, 85, "wall"),
  new Entity(340, 595, "wall"),
  new Entity(425, 595, "wall"),
];

briks.forEach((brick) => {
  document.querySelector(".stage").appendChild(brick.mount());
});

const collision = (x, y) => {
  const isMatch = briks.filter((element) => {
    if (element.x === x && element.y === y) {
      if (element.type === "wall") {
        return true;
      } else {
        return false;
      }
    }
  });

  return !!isMatch[0];
};

class Entitytwo {
  constructor(y, x, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  render() {
    this.element = document.createElement("div");
    this.element.className = `entity entity--${this.type}`;
  }
  mount() {
    this.render();
    this.update();
    return this.element;
  }
  update() {
    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";
    console.log();
  }
}

const apples = [
  new Entitytwo(0, 85, "apple"),
  new Entitytwo(0, 425, "apple"),
  new Entitytwo(340, 425, "apple"),
  new Entitytwo(85, 765, "apple"),
  new Entitytwo(340, 850, "apple"),
  new Entitytwo(170, 170, "apple"),
  new Entitytwo(425, 340, "apple"),
  new Entitytwo(255, 765, "apple"),
];

apples.forEach((brick) => {
  document.querySelector(".stage").appendChild(brick.mount());
});

class Entitythree {
  constructor(y, x, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  render() {
    this.element = document.createElement("div");
    this.element.className = `entity entity--${this.type}`;
  }
  mount() {
    this.render();
    this.update();
    return this.element;
  }
  update() {
    this.element.style.left = this.x + "px";
    this.element.style.top = this.y + "px";
    console.log();
  }
}

const bombs = [
  new Entitythree(0, 680, "bomb"),
  new Entitythree(340, 170, "bomb"),
  new Entitythree(255, 935, "bomb"),
  new Entitythree(425, 85, "bomb"),
  new Entitythree(340, 510, "bomb"),
];

bombs.forEach((brick) => {
  document.querySelector(".stage").appendChild(brick.mount());
});
