import "./styles.css";
import "./styles.scss";

import imgSRC from "./static/comida.png";

let img1 = document.querySelector(".img-comida");

img1.src = imgSRC;

const iconoMenu = document.querySelector(".icono-menu");
const menuD = document.querySelector(".menu-D");

iconoMenu.addEventListener("click", () => {
	iconoMenu.classList.remove("bg-M");
	iconoMenu.classList.toggle("bg-C");
	iconoMenu.classList.add("bg-M");
	menuD.classList.toggle("opacity");
	iconoMenu.classList.toggle("colocacion");
});
