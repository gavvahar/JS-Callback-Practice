const inventory = newInventory();
move(inventory).to(0, 0);

const character = newImage("assets/GIF/green-character/static.gif");
move(character).to(100, 250);

move(newImage("assets/PNG/tree.png")).to(200, 450);
move(newImage("assets/PNG/pillar.png")).to(350, 250);
move(newImage("assets/PNG/pine-tree.png")).to(450, 350);
move(newImage("assets/PNG/crate.png")).to(150, 350);
move(newImage("assets/PNG/well.png")).to(500, 575);
move(newItem("assets/PNG/sword.png")).to(500, 555);
move(newItem("assets/PNG/shield.png")).to(165, 335);
move(newItem("assets/PNG/staff.png")).to(600, 250);
