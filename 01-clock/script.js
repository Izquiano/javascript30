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

// Animated Background
function generate() {
  var hexValues = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
  ];

  function populate(a) {
    for (var i = 0; i < 6; i++) {
      var x = Math.round(Math.random() * 14);
      var y = hexValues[x];
      a += y;
    }
    return a;
  }

  var newColor1 = populate("#");
  var newColor2 = populate("#");
  var newColor3 = populate("#");
  var angle = "90";

  var gradient =
    "linear-gradient(" +
    angle +
    "deg, " +
    newColor1 +
    ", " +
    newColor2 +
    ", " +
    newColor3 +
    ")";

  document.getElementById("container").style.background = gradient;
}

setInterval(() => {
  generate();
}, 5000);
