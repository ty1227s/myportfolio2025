//works各要素に番号を付与
// index = 番号
const items = document.querySelectorAll('.works__unit');
const total = items.length;

items.forEach((item, index) => {
  const number = total - index;
  // ダブルクォートで囲む
  const quoteValue = `"${number}"`;
  // CSS変数を定義
  item.style.setProperty('--works-number', quoteValue);
});