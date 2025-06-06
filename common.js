// ハンバーガーメニュー
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelectorAll('.header__menu-button'); /* メニューボタン */

  menuBtn.forEach(function(btn) {
    btn.addEventListener('click', function() {
      this.classList.toggle('active');

      const menuSp = document.querySelector('.header__menu-sp'); // Spﾒﾆｭｰ範囲

      if (menuSp) {
        menuSp.classList.toggle('active');
      }
    });
  });
});



// 画面サイズ変更時にメニューを自動で閉じる
document.addEventListener('DOMContentLoaded', function() {
  
  // メニューボタンのクラスを取得
  const menuBtn = document.querySelector('.header__menu-button');

  // レスポンシブメニューのクラスを取得
  const menuSp = document.querySelector('.header__menu-sp');

  // 画面サイズの変更を検知
  window.addEventListener('resize', () => {
  
    // もし767pxよち広い幅であれば…
    if (window.innerWidth > 767) {

      // クラス名から「.active」を除去→ﾒﾆｭｰﾎﾞﾀﾝ･ﾚｽﾎﾟﾝｼﾌﾞﾒﾆｭｰ非表示化
      menuBtn.classList.remove('active');
      menuSp.classList.remove('active');
    }
  });
});