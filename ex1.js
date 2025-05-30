// // ハンバーガーメニューを開いているときの動作
// const openBtn = document.querySelector();
// const menu = document.querySelector();

// openBtn.addEventListener('click', () => {
//   openBtn.classList.toggle('active');
//   menu.classList.toggle('active');
//   document.body.classList('no-scroll');
// })
/* ハンバーガーメニューボタン用 wx1.jsに移植する？*/
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelectorAll('.header__menuButton'); /*? */
      
      
  menuBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      this.classList.toggle('active');

      const menuSp = document.querySelector('.header__menu-sp');
      
      if (menuSp) {
        menuSp.classList.toggle('active');
      }

    });
  });
});


// 画面サイズ変更時にメニューを自動で閉じる
// ※「DOM」はすべて大文字にすること。
document.addEventListener('DOMContentLoaded', function() {
  
  // メニューボタンのクラスを取得
  const menuBtn = document.querySelector('.header__menuButton');
      
  // レスポンシブメニューのクラスを取得
  const menuSp = document.querySelector('.header__menu-sp');
      
  // 画面サイズの変更を検知
  window.addEventListener('resize', () => {
        
    // もし1000pxより広い幅であれば…
    if (window.innerWidth > 1000) {
          
      // ｸﾗｽ名から「.active」を除去→ﾒﾆｭｰﾎﾞﾀﾝ･ﾚｽﾎﾟﾝｼﾌﾞﾒﾆｭｰ非表示化
      menuBtn.classList.remove('active');
      menuSp.classList.remove('active');
    }
  });
});


//process各要素に番号を付与
// index = 番号
document.querySelectorAll('.process__content').forEach((el, index) => {
  el.setAttribute('data-index', index + 1);
});


// スクロールで到達したら表示させる
// 'fade-in'の含まれるクラスを取得
const fadeTargets = document.querySelectorAll('.fade-in');

// 対象クラスすべてに’.active'を付与
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
});

fadeTargets.forEach(target => observer.observe(target));



// レスポンシブメニューを開いているとき、
// どこかしらリンクをクリックしたら、自動的にメニューが閉じる

// const navLinks = navMenu.querySelectorAll("a");


// menuToggle.addEventListener("click", () => {
//   navMenu.classList.toggle("hidden"); 
// });

// 各リンクをクリックした時にメニューを閉じる
// navLinks.forEach(link => {
//   link.addEventListener("click", () => {
//     navMenu.classList.add("hidden");
//   });
// });

//お問い合わせボタンをクリックした時にメニューを閉じる
document.querySelector('.header__menu-sp-forContact').addEventListener("click", () => {
  const menuToggle = document.querySelector('.header__menuButton.active');
  const navMenu = document.querySelector('.header__menu-sp.active');

  if (menuToggle && navMenu) {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');  
  }
});
