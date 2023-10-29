const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const menu = document.querySelector('#ingredients');

ingredients.forEach(plate => {
  const ingredient = document.createElement('li');
  ingredient.classList.add('item');
  ingredient.textContent = plate;
  menu.append(ingredient);
});
