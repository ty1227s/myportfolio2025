// ボタンが押されると、PCスクショとSPスクショが切り替わる
// また矢印のアイコン画像が回転することで、切り替わることを表現
const btn = document.querySelector('.switching-button'); //ボタン
const btnText = document.querySelector('.switching-button-text'); //ボタン内テキスト
const pc = document.querySelector('.screenshot__pc'); //PCスクショ
const sp = document.querySelector('.screenshot__sp'); //SPスクショ

btn.addEventListener("click", function() {
  const isAshown = pc.classList.contains("show");

  pc.classList.toggle("show", !isAShown);
  sp.classList.toggle("show", isAShown);

  btnText.textContent = isAShown ? "ＰＣ表示に切り替え" : "ＳＰ表示に切り替え";
});

// 他作品遷移エリアが表示されている時は、PC･SP切り替えボタンを非表示にする
const other = document.querySelector('.other'); // 他作品遷移エリア
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      btn.style.display = 'none';
    } else {
      btn.style.display = 'block';
    }
  });
});
observer.observe(other);



// 後の作品が登録されていない場合、文字色を変える
document.querySelectorAll('.other__next a').forEach(a => {
  const href = a.getAttribute('href');
  const link = document.querySelector('.other__next');

  if (!href || href.trim() === '') {
    a.style.opacity = '0.5';
    a.style.cursor = 'initial';
    a.style.pointerEvents = 'none';
    link.style.backgroundColor = 'initial';
  }
});


// 前の作品が登録されていない場合、文字色を変える
document.querySelectorAll('.other__previous a').forEach(a => {
  const href = a.getAttribute('href');
  const link = document.querySelector('.other__previous');

  if (!href || href.trim() === '') {
    a.style.opacity = '0.5';
    a.style.cursor = 'initial';
    a.style.pointerEvents = 'none';
    link.style.backgroundColor = 'initial';
  }
});