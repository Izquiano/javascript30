const image = document.getElementById("image");

function handleChange(e) {
  const color = document.getElementById("color").value;
  const blur = document.getElementById("blur").value;
  const spacing = document.getElementById("spacing").value;
  const letters = document.getElementById("letters")

  image.style.backgroundColor = color;
  letters.style.color = color
  image.style.border = `${spacing}px solid black`;
  image.style.filter = `blur(${blur}px)`;
}
window.addEventListener("mousemove", handleChange);
