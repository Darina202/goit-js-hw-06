function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorBtn = document.querySelector('.change-color');
const backColor = document.querySelector('.color');

colorBtn.addEventListener('click', getButtonHexColor);

function getButtonHexColor() {
  const color = getRandomHexColor();
  backColor.textContent = color;
  document.body.style.backgroundColor = color;
}
