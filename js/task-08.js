const registerForm = document.querySelector('.login-form');

function registration(event) {
  event.preventDefault();
  const form = event.target;
  const { email, password } = event.currentTarget.elements;
  //   const email = form.elements.email;
  //   const password = form.elements.password;
  if (email.value === '' || password.value === '') {
    return alert('Всі поля повинні бути заповнені!');
  }

  const feedback = {
    Email: email.value,
    Password: password.value,
  };
  console.log(feedback);
  form.reset();
}
registerForm.addEventListener('submit', registration);
