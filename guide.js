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
  console.log(quoteValue);

  // CSS変数を定義
  item.style.setProperty('--works-number', quoteValue);
});


// 要素を順番に登場させる
window.addEventListener('load', () => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('show');
      io.unobserve(entry.target);
    });
  } , {
    threslold: 0.5,
    rootMargin: '50px 50px -10% 50px'
  });

  items.forEach(el => io.observe(el));
});