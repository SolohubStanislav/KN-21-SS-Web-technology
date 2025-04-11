let circle = document.getElementById("circle");
let button = document.getElementById("moveBtn");

let duration = 13 * 0.2 + "s";

button.onclick = function () {
    circle.style.animation = "moveCircle " + duration + " ease-in-out infinite";
}