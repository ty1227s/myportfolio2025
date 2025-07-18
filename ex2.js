// MVを表示しているとき？or一番上にある時、固定表示のヘッダーを表示しない
// function hiddenHeader() {

// }

// 一番上にいない時、backtotopボタンを作動させる
// →hiddenheaderと合体させてもいいか？
// function displayBackToTop() {

// }



//MV表示中はheaderを非表示にする
const header = document.querySelector('.header'); // header
const mv = document.querySelector('.mv1'); // MV

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      header.style.display = 'none'; // 非表示にする
    } else {
      header.style.display = 'block';
    }
  });
}, {
  threshold: 0.1 // 10%以上見えたら反応
});
observer.observe(mv);


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


// 標語の登場
window.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.slogan__content');

  setTimeout(() => {

    const observer = new IntersectionObserver((entries, observer) => {
    
      entries.forEach(entry => {

        if (entry.isIntersecting) { 
        
          entry.target.classList.add('wipe-in');
          observer.unobserve(entry.target);
        }
      });
    },{

    // 完全に表示されたときに発火
    threshold: 0.5
    });

    targets.forEach(target => observer.observe(target));
  }, 3000);
});


    
      



