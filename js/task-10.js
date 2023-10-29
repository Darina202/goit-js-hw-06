function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector('#controls');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const createEl = document.querySelector('#boxes');
const inputElement = document.querySelector('#controls input');

let amount = 0;

inputElement.addEventListener('change', () => {
  console.clear();
  amount = Number(inputElement.value);
  console.log(amount);
});
// function createBoxes(amount) {
//   const boxEl = `<div style = width: 30px; height: 30px; background-color: rgb(236, 220, 141);>`;
// }

function createBoxes(amount) {
  for (let i = 1; i < amount + 1; i++) {
    const boxEl = document.createElement('div');
    boxEl.style.width = 20 + i * 10 + 'px';
    boxEl.style.height = 20 + i * 10 + 'px';

    const color = getRandomHexColor();
    boxEl.style.backgroundColor = color;
    console.log(boxEl);
    createEl.append(boxEl);
  }
}

function destroyBoxes() {
  createEl.innerHTML = '';
  inputElement.value = '';
}
createBtn.addEventListener('click', () => {
  createBoxes(amount);
  inputElement.value = '';
});
destroyBtn.addEventListener('click', destroyBoxes);
