var x = window.matchMedia("(min-width: 700px)");
const keys = [...document.querySelectorAll(".key")];

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  e.target.classList.remove("playing");
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function playSoundClick(e) {
  const audio = document.querySelector(
    `audio[data-key="${e.currentTarget.getAttribute("data-key")}"]`
  );
  const key = document.querySelector(
    `div[data-key="${e.currentTarget.getAttribute("data-key")}"]`
  );
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

window.addEventListener("keydown", playSound);

keys.forEach((key) => key.addEventListener("click", playSoundClick));

// const height = window.innerHeight;
// console.log(height);

// const container = document.querySelector(".keys");
// console.log(container);
// container.style.minHeight = `"${height}px"`;
