$(function(){
  //1. 슬라이드
  $('#scroll2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  //헤더 고정

  let headerSpot = $("header").offset().top; 
  console.log(headerSpot);

  let win = $(window);

  //기준 1920 = 1043, 1199 


 
  win.scroll(() => {
    console.log(win.scrollTop());
    if(win.scrollTop() >= 1000){
      $("header").addClass("fix6");
    }
    else if(win.scrollTop() >= 587){
    

      $("header").addClass("fix1");
      
    }
    else if(win.scrollTop() >= 464){
      // 991px 사이즈
    
      $("header").addClass("fix2");
    } 
    else if(win.scrollTop() >= 371){
      // 767px 사이즈
     
      

      $("header").addClass("fix3");
    } 
    else if(win.scrollTop() >= 288){
      // 575px 사이즈
     
      $("header").addClass("fix4");
    } 
    else if(win.scrollTop() >= 220){
      // 450px 사이즈
      $("header").addClass("fix5");
    } 
    else{
      
    };
  });


  
  //기준 1920 = 1043, 1199 

  $(".scrollMove").click(function(event){
    console.log(".scrollMove")
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top},500);
  })
// 예시

  ////////////////////////////
});