// p_info.js

(function($){

  // 체크박스 미동의 시 안내 문구 표시 및 동의 시 사이트 이동
  var yesBtn = $('.yes');
  var checkWar = $('.check_text');

  yesBtn.click(function(e){
    e.preventDefault();

    if($("input:checkbox[name=pointCheck]").is(":checked") == true){
      location.href="./p_warning.html";
    }else {
      checkWar.show();
    }

  })

})(jQuery);