function move(element) {
  element.style.position = "fixed";

  function moveToCoordinates(left, bottom) {
    element.style.left = left + "px";
    element.style.bottom = bottom + "px";
  }

  function moveWithArrowKeys(left, bottom) {
    let direction = null;
    let x = left;
    let y = bottom;

    character.style.left = x + "px";
    character.style.bottom = y + "px";

    function moveCharacter() {
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
    });

    document.addEventListener("keyup", function (e) {
      direction = null;
    });
  }

  return {
    to: moveToCoordinates,
    withArrowKeys: moveWithArrowKeys,
  };
}
