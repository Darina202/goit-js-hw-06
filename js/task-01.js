const list = document.querySelector(`#categories`);
const listLength = list.children.length;
console.log(`Number of categories: ${listLength}`);
console.log('');
const listEl = document.querySelectorAll('.item');

listEl.forEach(liEl => {
  const title = liEl.querySelector('h2');
  console.log(`Category: ${title.textContent}`);
  const quantity = liEl.querySelectorAll('li');
  console.log(`Elements: ${quantity.length}`);
  console.log('');
});
