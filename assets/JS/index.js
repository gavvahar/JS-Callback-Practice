const inventory = newInventory();
move(inventory).to(0, 0);

const character = newImage("assets/GIF/green-character/static.gif");

function handleDirectionChange(direction) {
  switch (direction) {
    default:
      character.src = "assets/GIF/green-character/static.gif";
      break;
    case "west":
      character.src = "assets/GIF/green-character/west.gif";
      break;
    case "north":
      character.src = "assets/GIF/green-character/north.gif";
      break;
    case "east":
      character.src = "assets/GIF/green-character/east.gif";
      break;
    case "south":
      character.src = "assets/GIF/green-character/south.gif";
      break;
  }
}

move(character).withArrowKeys(100, 250, handleDirectionChange);
move(newImage("assets/PNG/tree.png")).to(200, 450);
move(newImage("assets/PNG/pillar.png")).to(350, 250);
move(newImage("assets/PNG/pine-tree.png")).to(450, 350);
move(newImage("assets/PNG/crate.png")).to(150, 350);
move(newImage("assets/PNG/well.png")).to(500, 575);
move(newItem("assets/PNG/sword.png")).to(500, 555);
move(newItem("assets/PNG/shield.png")).to(165, 335);
move(newItem("assets/PNG/staff.png")).to(600, 250);
