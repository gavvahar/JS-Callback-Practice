function move(element) {
  element.style.position = "fixed";

  function moveToCoordinates(left, bottom, right, top) {
    element.style.left = left + "px";
    element.style.bottom = bottom + "px";
    element.style.right = right + "px";
    element.style.top = top + "px";
  }

  function moveWithArrowKeys(left, bottom, right, top, callback) {
    let direction = null;
    let x = left;
    let y = bottom;
    let x1 = right;
    let y1 = top;

    character.style.left = x + "px";
    character.style.bottom = y + "px";
    character.style.right = x1 + "px";
    character.style.top = y1 + "px";

    function moveCharacter() {
      switch (direction) {
        case "west":
          if (x > 0) x = x - 1;
          break;
        case "north":
          if (y1 > 0) y1 = y1 - 1;
          break;
        case "east":
          if (x < 1484) x = x + 1;
          break;
        case "south":
          if (y > 103) y = y - 1;
          break;
      }
      character.style.left = x + "px";
      character.style.bottom = y + "px";
      character.style.right = x1 + "px";
      character.style.top = y1 + "px";
    }

    setInterval(moveCharacter, 1);

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
      callback(direction);
    });

    document.addEventListener("keyup", function (e) {
      direction = null;
      callback(direction);
    });
  }

  return {
    to: moveToCoordinates,
    withArrowKeys: moveWithArrowKeys,
  };
}
