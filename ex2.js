// header関連処理 レスポンシブの時、MVに被っていない場合背景色を変更
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header'); // header
  const mv = document.querySelector('.mv'); // mvセクション
  
  if (!header || !mv) return;

  let observer = null;

  const setHeaderObserver = () => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }

    // スマホサイズのみ(<=767)監視
    if (window.innerWidth <= 767) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // MVの上になるとき → 透明
            header.style.backgroundColor = "transparent";
          } else {
            // MVを抜けたら → 背景色を付ける
            header.style.backgroundColor = "var(--main-color)";
          }
        });
      }, { threslold: 0.8 });

      observer.observe(mv);
    } else {
      // PCサイズのときは常に背景付き
      header.style.backgroundColor = "white";
    }
  };
  
  // 初期化・リサイズ時の再判定
  setHeaderObserver();
  window.addEventListener('resize', setHeaderObserver);
});

        



// MV関連処理
window.addEventListener('DOMContentLoaded', () => {
  const mv = document.querySelector('.mv');
  mv.style.opacity = "1"; // MV領域全体をフェードイン
  const content = document.querySelector('.mv__content');
  content.style.opacity = "1";
  content.style.transform = "translateX(0)";
  // transform: translateX(-5px);
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

// 各見出しの領域に来たら表示させる
document.addEventListener('scroll', () => {
  const headline = document.querySelectorAll('.section__title');

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
  headline.forEach(el => io.observe(el));
});

// data 表示領域に到達したらフェードイン
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.data__content');
  if (!items.length) return;


  let enabled = false; //有効化フラグ

  // 最初のスクロール（またはタッチ）で有効化
  const enable = () => {
    enabled = true;
    window.removeEventListener('scroll', enable);
    window.removeEventListener('touchmove', enable);
  };
  window.addEventListener('scroll', enable, { once: true, passive: true});
  window.addEventListener('touchmove', enable, { once: true, passive: true });

  // カウントアップ関数
  function countUp(element, targetValue, duration) {
    let current = 0;
    const interval = 20;
    const increment = targetValue/ (duration / interval);
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        current = targetValue;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current);
    }, interval)
  }
  
  // Intersection Observer
  const io = new IntersectionObserver((entries, observer) => {
    if (!enabled) return; // まだスクロールが起きていないから何もしない

    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('show');

      // カウントアップ処理
      const percentE1 = entry.target.querySelector('.data__content-percent');
      const minuteE1 =entry.target.querySelector('.data__content-minute');
      if (percentE1) countUp(percentE1, 78, 1500);
      if (minuteE1) countUp(minuteE1, 15, 1500);

      observer.unobserve(entry.target); // 一度きり発動
    });
  }, {
    root: null,
    rootMargin: '0px 0px -15% 0px',
    threshold: 0.2
  });

  items.forEach(el => io.observe(el));
});

// 高さ変動の保険
// window.addEventListener('load', () => {
//   window.dispatchEvent(new Event('scroll'));
// });



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
  const items = document.querySelectorAll('.qanda__unit-a');

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


// Q&A 開閉機構
document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.qanda__unit-a dl dt');

  questions.forEach((q) => {
    q.addEventListener("click", () => {
      const answer = q.nextElementSibling;

      q.classList.toggle("active");
      answer.classList.toggle("open");
    });
  });
});