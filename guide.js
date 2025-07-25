//works各要素に番号を付与・ファイルパスを生成
// index = 番号
const items = document.querySelectorAll('.works__unit');
const total = items.length;

items.forEach((item, index) => {
  const number = total - index;
  // ダブルクォートで囲む
  const quoteValue = `"${number}"`;
  // ファイルパスを生成
  const filePass = `img/pc${number}.jpg`;
  // const grandchild = document.querySelector('a .works__unit-img');
  // console.log(filePass);
  console.log(quoteValue);
  // grandchild.style.backgroundImage = `url(${filePass})`;
  // console.log(grandchild.style.backgroundImage);

  // CSS変数を定義
  item.style.setProperty('--works-number', quoteValue);
});