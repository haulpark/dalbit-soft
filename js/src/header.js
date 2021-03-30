(function($){

  var lang = $('.languageList');
  var langDt = lang.find('dt');
  var langDdUl = $('.world_list');
  var langDdLi = langDdUl.find('li');

  langDt.click(function(e){
    e.preventDefault();
    langDdUl.slideToggle();
  })

  langDdLi.eq(0).click(function(e){
    e.preventDefault();

    langDt.css({"background-image":"url(../../img/image/korea.png"});
    $(this).css({"display":"none"});
    langDdLi.eq(1).css({"display":"block"});
    langDdLi.eq(2).css({"display":"block"});
    langDdLi.eq(3).css({"display":"block"});
    langDdLi.eq(4).css({"display":"block"});
    langDdUl.slideUp();
  })

  langDdLi.eq(1).click(function(e){
    e.preventDefault();

    langDt.css({"background-image":"url(../../img/image/china.png"});
    $(this).css({"display":"none"});
    langDdLi.eq(0).css({"display":"block"});
    langDdLi.eq(2).css({"display":"block"});
    langDdLi.eq(3).css({"display":"block"});
    langDdLi.eq(4).css({"display":"block"});
    langDdUl.slideUp();
  })

  langDdLi.eq(2).click(function(e){
    e.preventDefault();

    langDt.css({"background-image":"url(../../img/image/japan.png"});
    $(this).css({"display":"none"});
    langDdLi.eq(0).css({"display":"block"});
    langDdLi.eq(1).css({"display":"block"});
    langDdLi.eq(3).css({"display":"block"});
    langDdLi.eq(4).css({"display":"block"});
    langDdUl.slideUp();
  })

  langDdLi.eq(3).click(function(e){
    e.preventDefault();

    langDt.css({"background-image":"url(../../img/image/usa.png"});
    $(this).css({"display":"none"});
    langDdLi.eq(0).css({"display":"block"});
    langDdLi.eq(1).css({"display":"block"});
    langDdLi.eq(2).css({"display":"block"});
    langDdLi.eq(4).css({"display":"block"});
    langDdUl.slideUp();
  })

  langDdLi.eq(4).click(function(e){
    e.preventDefault();

    langDt.css({"background-image":"url(../../img/image/veitnam.png"});
    $(this).css({"display":"none"});
    langDdLi.eq(0).css({"display":"block"});
    langDdLi.eq(1).css({"display":"block"});
    langDdLi.eq(2).css({"display":"block"});
    langDdLi.eq(3).css({"display":"block"});
    langDdUl.slideUp();
  })

})(jQuery);