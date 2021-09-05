const counterNumber = document.querySelector(".counter-number");
const btnDecrease = document.querySelector(".counter-decrease");
const btnIncrease = document.querySelector(".counter-increase");
let counterValue = parseInt(counterNumber.textContent);

btnIncrease.addEventListener("click", function () {
  if (counterValue >= 10) return 10;
  counterValue++;
  console.log(counterValue);
  counterNumber.textContent = counterValue;
});

btnDecrease.addEventListener("click", function () {
  if (counterValue <= 0) return 0;
  counterValue--;
  console.log(counterValue);
  counterNumber.textContent = counterValue;
});