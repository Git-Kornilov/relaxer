"use strict";

const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 7500; //7.5sec like animation .pointer-container
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

const breathAnimation = () => {
  text.innerText = "Breath In!";

  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "HOLD! (ツ)";

    setTimeout(() => {
      text.innerText = "Breath Out!";

      container.className = "container shrink";
    }, holdTime);
  }, breathTime);
};

setInterval(breathAnimation, totalTime);
