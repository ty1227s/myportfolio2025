// MVを表示しているとき？or一番上にある時、固定表示のヘッダーを表示しない
// function hiddenHeader() {

// }

// 一番上にいない時、backtotopボタンを作動させる
// →hiddenheaderと合体させてもいいか？
// function displayBackToTop() {

// }

//Q&Aにおいて、矢印ボタンを押すと下から右向きになり、Aが開く、再び押すと閉じる
//↓指定された CSS セレクターに一致する文書中の要素のリストを示す
// document.querySelectorAll('.qanda__unit-question').forEach(item => {
  // ↓ターゲットに特定のイベントが配信されるたびに呼び出される関数を設定
  // item.addEventListener('click', () => {
    // const qaItem = item.parentElement; /* 当該要素の親要素を取得 */
    // classList＝その要素の class 属性を返す
    // toggle＝渡されたトークンをリストから削除し、 false を返す
    // qaItem.classList.toggle('active');
  // });
// });

//上記のコードをjQueryに書き換え
$(document).ready(function() {
  // ↓動作しなければ「-content」を削除
  $('.qanda__unit-question-content').click(function() {
    const parent = $(this).closest('.qanda__unit');
    parent.toggleClass('active');
    parent.find('.qanda__unit-answer').slideToggle(300);
  });
});




