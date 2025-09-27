document.addEventListener("DOMContentLoaded", () => {
  const spans = document.querySelectorAll(".mv .inner h1 span");

  spans.forEach((span, i)=> {
    setTimeout(() => {
      span.classList.add("show");
    }, i * 500); // 0.5秒ごとで順に表示
  });
});

