"use strict";

const ballItem = document.querySelector(".ball");
ballItem.style.cursor = "pointer";

ballItem.onmousedown = (event) => {
  let shiftX = event.clientX - ballItem.getBoundingClientRect().left;
  let shiftY = event.clientY - ballItem.getBoundingClientRect().top;

  ballItem.style.position = "absolute";
  ballItem.style.zIndex = 1000;

  document.body.append(ballItem);

  const moveAt = (pageX, pageY) => {
    ballItem.style.left = pageX - shiftX + "px";
    ballItem.style.top = pageY - shiftY + "px";
  };

  moveAt(event.pageX, event.pageY);

  const onMouseMove = (event) => {
    moveAt(event.pageX, event.pageY);
  };

  document.addEventListener("mousemove", onMouseMove);

  ballItem.onmouseup = (event) => {
    document.removeEventListener("mousemove", onMouseMove);
    ballItem.onmouseup = null;
  };
};

ballItem.ondragstart = (event) => {
  return false;
};
