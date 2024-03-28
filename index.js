// Your code here
const dodger = document.getElementById("dodger");
const game = document.getElementById("game");

function moveDodgerLeft() {
  var leftPosition = parseInt(dodger.style.left);
  if (leftPosition > 0) {
    dodger.style.left = `${leftPosition - 1}px`;
  }
}

function moveDodgerRight() {
  var leftPosition = parseInt(dodger.style.left);
  if (leftPosition < 360) {
    dodger.style.left = `${leftPosition + 1}px`;
  }
}
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
