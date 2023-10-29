const textInput = document.getElementById('validation-input');
// console.log(textInput.dataset.length);

function blurEvent(elem) {
  const textLength = Number(textInput.dataset.length);
  const userLength = Number(textInput.value.trim().length);
  //   console.log(userLength);
  if (textLength === userLength) {
    textInput.classList.add('valid');
    textInput.classList.remove('invalid');
  } else {
    textInput.classList.add('invalid');
    textInput.classList.remove('valid');
  }
}
textInput.addEventListener('blur', blurEvent);
