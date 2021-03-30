//index.js
  
  var windowW = window.innerWidth;

  if(windowW < 480){
    window.location = "./html/p_intro.html";
    
  }else{
    document.write("<a href=javascript:openNewWindow('./html/p_intro.html')>새창열기</a>");

    function openNewWindow(window) {
      open (window,"NewWindow","left=0, top=0, toolbar=no, location=no,\
            directories=no, status=no, menubar=no, scrollbars=no\
            resizable=yes, width=479, height=700");}
  }
 
