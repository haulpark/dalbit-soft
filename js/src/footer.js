//footer.js - 하단 로딩바 테스트 화면

(function($){

  const progress = document.querySelector('.progress-done');

  progress.style.width = progress.getAttribute('data-done') + '%';
  progress.style.opacity = 1;

})(jQuery); 