// header関連処理
window.addEventListener('DOMContentLoaded', () => {
  const icon = document.querySelector('.header__logo-img'); // アイコン
  icon.style.left = "0%";
  const name = document.querySelector('.header__logo-name'); // アプリ名
  name.style.opacity= "1";
})


// MV関連処理
window.addEventListener('DOMContentLoaded', () => {
  const mv = document.querySelector('.mv');
  mv.style.opacity = "1"; // MV領域全体をフェードイン
  const symbol = document.querySelector('.mv__branding'); // シンボルマーク
  const catchCopy = document.querySelector('.mv__catchcopy');
  const downloadBtn = document.querySelector('.mv__download');
  symbol.style.opacity = "1";
  catchCopy.style.opacity = "1";
  downloadBtn.style.opacity = "1";
});

// ページを読み込んでから3秒後にシンボルマークを表示
window.addEventListener('load', () => {
  // PC表示時のシンボルマーククラスを取得
  const target1 = document.querySelector('.mv__symbol-img');
  // SP表示時のシンボルマーククラスを取得
  const target2 = document.querySelector('.mv__symbol-sp-img');

  // ページ読み込み後すぐにクラスを追加
  setTimeout(() => {
    target1.classList.add('fade-in');
    target2.classList.add('fade-in');
  }, 0);
});


// 機能紹介表示領域に到達したらフェードイン
window.addEventListener('load', () => {
  const items = document.querySelectorAll('.introduction__content-item');

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('show');
      io.unobserve(entry.target);
    });
  }, {
    threshold: 0.8,
    rootMargin: '0px 0px -10% 0px'
  });

  items.forEach(el => io.observe(el));
});

// Q&A 各ペア単位に到達したらフェードイン
document.addEventListener('scroll', () => {
  const items = document.querySelectorAll('.qanda__unit');

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('show');
      io.unobserve(entry.target);
    });
  }, {
    threshold: 0.8,
    rootMargin: '0px 0px -10% 0px'
  });

  items.forEach(el => io.observe(el));
});