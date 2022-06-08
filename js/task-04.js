const decrementCurr = document.querySelector('[data-action="decrement"]') ;
const incrementCurr = document.querySelector('[data-action="increment"]') ;
const valueCurr = document.querySelector("#value") ;
let counterValue = 0;
function decrement() {
    counterValue -= 1;
    valueCurr.textContent = counterValue;
}
function increment() {
    counterValue += 1;
    valueCurr.textContent = counterValue;
}
decrementCurr.addEventListener("click", decrement);
incrementCurr.addEventListener("click", increment);