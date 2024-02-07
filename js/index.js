


$(document).ready(function(){
   
    //충돌방지
    var $371 = $.noConflict();

    //무비차트 슬라이드
    $371('.slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        setPosition:0,  //깨짐방지
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      //자동 슬라이드
      $371('.slickAutoplay').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 5000,
      });                                            

   
     
        //메뉴에 마우스를 올렸을 때 나오게 하기

        $(".nav > li > h2 > a").mouseenter(function(){      
           $(".sub_menu").slideDown();
          
        });

        $(".navigation").mouseleave(function(){      
            $(".sub_menu").slideUp();
      });
   
    
  
      //영화 슬라이드 메뉴 무비차트 상영예정작
      var movBtn = $(".movie_chart .movie_int i");  //슬라이드 메뉴
      var movCon = $(".slider");
      movCon.hide().eq(0).show();

      movBtn.click(function(e) {
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        
        movBtn.removeClass("active");
        target.addClass("active");

        movCon.css("display","none");//안보이게
  
        movCon.eq(index).css("display","block"); //보이게
        $371('.slider').slick('setPosition');//깨짐방지
    });





    //상단 메뉴 고정
    var $fix = $(".fix_button");
    var $navi = $(".navigation");
    //윈도우에 스크롤이 생기면 하게될 일
    $(window).scroll(function(){
        if($(this).scrollTop() > 0) {
            $navi.addClass('sticky');
            $fix.addClass('sticky');
        }else {
            $navi.removeClass('sticky'); 
            $fix.removeClass('sticky'); 
        }
    });



    //특별관 
    var hall = $(".specialHall_list li");
    var hall_img = $(".event_img .img");
  
    hall.hover(function(e){
        
        e.preventDefault();
        var target = e.target;
        var index = $(target).closest('li').index();
        $(target).closest('li').addClass('active').siblings('li').removeClass('active');
        hall_img.eq(index).addClass('active').siblings('img').removeClass('active');


    });
    

});//ready(function())
 
