let counterValue = 0;
const value = document.querySelector('#value');
const incBtn = document.querySelector(
  '#counter button[data-action="increment"]'
);
const decBtn = document.querySelector(
  '#counter button[data-action="decrement"]'
);
const handleClickInc = () => {
  counterValue += 1;
  value.innerHTML = counterValue;
};
const handleClickDec = () => {
  counterValue -= 1;
  value.innerHTML = counterValue;
};
incBtn.addEventListener('click', handleClickInc);
decBtn.addEventListener('click', handleClickDec);
