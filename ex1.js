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

    // 画面サイズ変更時にメニューを自動で閉じる → 要改善
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1000) {
        menuBtn.classList.remove('active');
        menuSp.classList.remove('active');
      }
    });