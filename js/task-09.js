function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyCurr = document.body;
const spanCurr = document.querySelector(".color");
const bottonCurr = document.querySelector(".change-color");
console.log("object :>>" ,bodyCurr, bottonCurr, spanCurr);

function updateColor(){
  const colorNew = getRandomHexColor();
  bodyCurr.style.background = colorNew;
  bottonCurr.textContent = colorNew;
}

bottonCurr.addEventListener("click", updateColor)
