// p_warning.js

(function(){

  // 체크박스 미동의 시 안내 문구 표시 및 동의 시 사이트 이동
  var yesBtn = $('.yes');
  var checkWar = $('.check_text');

  yesBtn.click(function(e){
    e.preventDefault();

    if($("input:checkbox[name=pointCheck]").is(":checked") == true){
      location.href="./p_loding.html";
    }else {
      checkWar.show();
    }

  })

  // guide_icon 모달 창
  var modal = $('.guideBox');
  var btn = $('.guide_icon');
  var btnX = $('.guide_exit');

  // -- open modal
  btn.click(function(e){
    e.preventDefault();

    modal.fadeIn();
  })
  
  // -- close modal
  btnX.click(function(e){
    e.preventDefault();

    modal.fadeOut();
  });


  // 이용약관 모달 창
  var cs = $('.cs');
  var csBox = $('.cs_box');
  var csX = $('.cs_box_exit');

  cs.click(function(e){
    e.preventDefault();

    csBox.fadeIn();
  })

  csX.click(function(e){
    e.preventDefault();

    csBox.fadeOut();
  })

})(jQuery);