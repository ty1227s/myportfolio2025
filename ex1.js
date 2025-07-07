// // ハンバーガーメニューを開いているときの動作
// const openBtn = document.querySelector();
// const menu = document.querySelector();

// openBtn.addEventListener('click', () => {
//   openBtn.classList.toggle('active');
//   menu.classList.toggle('active');
//   document.body.classList('no-scroll');
// })
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelectorAll('.header__menuButton'); /* メニューボタン */
  const header = document.querySelector('.header'); /* headerエリア */
      
      
  menuBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      this.classList.toggle('active'); /* クラス名末尾にactiveを付与 */

      const menuSp = document.querySelector('.header__menu-sp'); /* メニューエリアを取得 */
      
      if (menuSp) {
        menuSp.classList.toggle('active'); /* メニューエリアクラス名末尾にactiveを付与 */
        
        // activeクラスの有無で背景色を変更
        if (menuSp.classList.contains('active')) {
          header.style.backgroundColor = "#fff";  
        } else {
          header.style.backgroundColor = "transparent"; // 元に戻す
        }
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

  /* headerエリア */
  const header = document.querySelector('.header');
      
  // 画面サイズの変更を検知
  window.addEventListener('resize', () => {
        
    // もし1000pxより広い幅であれば…
    if (window.innerWidth > 1000) {
          
      // ｸﾗｽ名から「.active」を除去→ﾒﾆｭｰﾎﾞﾀﾝ･ﾚｽﾎﾟﾝｼﾌﾞﾒﾆｭｰ非表示化
      menuBtn.classList.remove('active');
      menuSp.classList.remove('active');
      header.style.backgroundColor = "#fff";
    } else {
      header.style.backgroundColor = "transparent";
    }
  });
});


// process各要素に番号を付与（レスポンシブ用の表示）
// index = 番号
const wrappers = document.querySelectorAll('.process__content-wrapper');

document.addEventListener('DOMContentLoaded', () => {
  wrappers.forEach((wrapper, index) => {
    const numberE1 = wrapper.querySelector('.process__content-number');
    const child = wrapper.querySelector('.process__content');
    if (numberE1) {
      const value = index + 1;
      numberE1.textContent = value;
      child.dataset.index = value;
    }
  });  
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





//お問い合わせボタンをクリックした時にメニューを閉じる
document.querySelector('.header__menu-sp-forContact').addEventListener("click", () => {
  const menuToggle = document.querySelector('.header__menuButton.active');
  const navMenu = document.querySelector('.header__menu-sp.active');
  const header = document.querySelector('.header');
  

  if (menuToggle && navMenu) {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
    // header.style.backgroundColor = "transparent";
  }
});
