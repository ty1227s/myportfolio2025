//works各要素に番号を付与
// index = 番号
const items = document.querySelectorAll('.works__unit');
const total = items.length;

items.forEach((item, index) => {
  const number = total - index;
  item.querySelector('.works__unit-number').textContent = number;
});