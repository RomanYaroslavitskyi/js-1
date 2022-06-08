// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>
const inputCurr = document.getElementById("font-size-control");
const spanCurr = document.getElementById("text");
inputCurr.addEventListener("input", handleInputRange);
function handleInputRange(event) {
    spanCurr.style.fontSize = event.currentTarget.value + "px";
}