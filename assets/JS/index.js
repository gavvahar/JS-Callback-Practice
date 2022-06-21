const inventory = newInventory();
move(inventory).to(0, 0);

const character = newImage("assets/GIF/green-character/static.gif");
let direction = null;
let x = 100;
let y = 250;

document.addEventListener("keydown", function (e) {
  if (e.repeat) return;
  switch (e.key) {
    case "ArrowLeft":
      direction = "west";
      break;
    case "ArrowUp":
      direction = "north";
      break;
    case "ArrowRight":
      direction = "east";
      break;
    case "ArrowDown":
      direction = "south";
      break;
  }
});

document.addEventListener("keyup", function (e) {
  direction = null;
});

setInterval(function () {
  switch (direction) {
    case "west":
      x = x - 1;
      break;
    case "north":
      y = y + 1;
      break;
    case "east":
      x = x + 1;
      break;
    case "south":
      y = y - 1;
      break;
  }
  character.style.left = x + "px";
  character.style.bottom = y + "px";
}, 1);

move(character).to(100, 250);

move(newImage("assets/PNG/tree.png")).to(200, 450);
move(newImage("assets/PNG/pillar.png")).to(350, 250);
move(newImage("assets/PNG/pine-tree.png")).to(450, 350);
move(newImage("assets/PNG/crate.png")).to(150, 350);
move(newImage("assets/PNG/well.png")).to(500, 575);
move(newItem("assets/PNG/sword.png")).to(500, 555);
move(newItem("assets/PNG/shield.png")).to(165, 335);
move(newItem("assets/PNG/staff.png")).to(600, 250);
