const ingredientsCurr = document.querySelector("#ingredients");
console.log("object :>>", ingredientsCurr);
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const layout = ingredients.map((item) => {
 const li = document.createElement("li");
 li.textContent = item;
 li.classList.add("item");
 return li;
});
ingredientsCurr.append(...layout);
console.log("layout :>> ", layout);