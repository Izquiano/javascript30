const secondsHand = document.getElementById("seconds");
const minutesHand = document.getElementById("minutes");
const hoursHand = document.getElementById("hours");

setInterval(() => {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  const secDeg = (360 / 60) * seconds + 90;
  const minDeg = (360 / 60) * minutes + 90;
  const houDeg = (360 / 12) * hours + 90;

  secondsHand.style.transform = `rotate(${secDeg}deg)`;
  minutesHand.style.transform = `rotate(${minDeg}deg)`;
  hoursHand.style.transform = `rotate(${houDeg}deg) `;
}, 1000);
