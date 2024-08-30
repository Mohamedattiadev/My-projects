"use strict";
const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const xAxis = event.offsetX;
  const yAxis = event.offsetY;
  const spanEl = document.createElement("span");
  const size = Math.random() * 100;
  spanEl.style.left = xAxis + "px";
  spanEl.style.top = yAxis + "px";
  spanEl.style.height = size + "px";
  spanEl.style.width = size + "px";

  bodyEl.appendChild(spanEl);
  setTimeout(() => { spanEl.remove() }, 3000)
});
