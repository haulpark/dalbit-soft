// p_loding.js


(function($){

  // 타이머 
  var time = 299; // -1초 (html에 05:00 띄웠음)
  var min = " ";
  var sec = " ";

  var x = setInterval(function(){
    min = parseInt(time/60);
    sec = time%60;

    if (min < 10) {min = "0"+ min;}
    if (sec < 10) {sec = "0"+ sec;} // min,sec 10미만 시 앞에 0 붙이기

    document.getElementById("timer").innerHTML = min + ":" + sec + ""; // min : sec
    time--; // -1초씩 차감

    

    if(time < 0 ){
      location.href="./p_late.html";
    } // 1분 초과 시 late 페이지 이동
    },1000);


    // 로딩 화면 구현
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    if(!isChrome) {
      document.getElementsByClassName('infinityChrome')[0].style.display = "none";
      document.getElementsByClassName('infinity')[0].style.display = "block";
    }

})(jQuery);