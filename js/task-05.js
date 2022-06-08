// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>


const inputCurr = document.querySelector("#name-input");
const outputCurr = document.querySelector("#name-output");

function updateTextOutput(a){
    const value = a.target.value.trim();
    outputCurr.textContent = value ? value : "Anonymous";
    console.log("object :>>", value)
}

inputCurr.addEventListener("input", updateTextOutput);