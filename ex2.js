// MVを表示しているとき？or一番上にある時、固定表示のヘッダーを表示しない
// function hiddenHeader() {

// }

// 一番上にいない時、backtotopボタンを作動させる
// →hiddenheaderと合体させてもいいか？
// function displayBackToTop() {

// }



//表示位置によりheaderの表示方法を変更
//(クラス名に「」を付与する)
if (window.innerWidth > 768) {
  window.addEventListener('scroll', () => {
    // headerを取得
    const header = document.querySelector('.header');
    // headerのロゴを取得
    const logo = document.querySelector('.header__logo-content');
    // sloganの高さを取得
    const slogan = document.querySelector('.slogan');
    const sloganHeight = slogan.offsetHeight;

    // スクロール位置がsloganの高さを超えたらクラスを追加
    if (window.scrollY > sloganHeight) {
      header.classList.add('top');
      logo.classList.add('top');
    } else {
      header.classList.remove('top');
      logo.classList.remove('top');
    }
  });
}

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





