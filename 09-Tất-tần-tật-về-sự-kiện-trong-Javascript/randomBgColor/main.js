const button = document.querySelector(".change");
button.addEventListener("click", handleColor);
const colors = ["#ffa400", "#00aefd", "#07a787", "#e74c3c"];
function handleColor(params) {
  console.log(colors[Math.floor(Math.random() * colors.length)]);
  // document.body.setAttribute("style", "background-color: red");
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
