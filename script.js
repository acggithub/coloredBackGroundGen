var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var cssInput1 = document.querySelector("input");


function setGradient() {
body.style.background = "linear-gradient(to right, "+
                   color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function setGradientForInputElement() {
input.style.background = color1.value;

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

cssInput1.addEventListener("input", setGradientForInputElement);