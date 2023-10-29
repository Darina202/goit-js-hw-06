const sizeOfFont = document.querySelector('#font-size-control');
const label = document.querySelector('#text');
// const maxSize = sizeOfFont.max;
// const minSize = sizeOfFont.min;
// console.log(minSize);
// console.log(maxSize);

label.style.fontSize = sizeOfFont.value + 'px';
function sizeChange(event) {
  label.style.fontSize = event.currentTarget.value + 'px';
}
sizeOfFont.addEventListener('input', sizeChange);
