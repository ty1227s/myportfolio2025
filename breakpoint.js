// レスポンシブ対応用
const breakPoint = 768;

function handleResize() {
  if (window.innerWidth <= breakPoint) {
    document.body.classList.add('is-sp');
  } else {
    document.body.classList.remove('is-sp');
  }
}

// 初回実行時
handleResize();

// ウィンドウサイズが変わったときにも実行
window.addEventListener('resize', handleResize);