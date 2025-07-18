// 他作品遷移エリアが表示されている時は、PC･SP切り替えボタンを非表示にする
const other = document.querySelector('.other'); // 他作品遷移エリア
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      btn.style.display = 'none';
    } else {
      btn.style.display = 'block';
    }
  });
});
observer2.observe(other);



// 後の作品が登録されていない場合、リンク無効・透明度の変更
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


// 前の作品が登録されていない場合、リンク無効・透明度の変更
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