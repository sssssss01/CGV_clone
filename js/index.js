


$(document).ready(function(){
   /*
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
              slidesToShow: 5,
              slidesToScroll: 5,

            }
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,

            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,

            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow:3,
              slidesToScroll:3
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
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }           
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },           
          }
        ]
      });                                            
*/

     
        //메뉴에 마우스를 올렸을 때 나오게 하기

        const widthPoint = 600;

        //넓이가 600이상이면 메뉴의 서브메뉴가 나오고
        //넓이가 600이하면 서브메뉴 감추기
        if( window.innerWidth > widthPoint){
          $(".nav > li > h2 > a").mouseenter(function(){      
            $(".sub_menu").slideDown();
         });
 
          $(".navigation").mouseleave(function(){      
            $(".sub_menu").slideUp();
        });
      
        }else {
          $(".nav > li > h2 > a").mouseenter(function(){ 
           $(".sub_menu").css("display","none");
          });
        }
         
  
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


//swiper
$(document).ready(function(){
/*
  var swiper = new Swiper(".img_slider1", {
    slidesPerView: 5,
    slidesPerGroup : 5,
    spaceBetween: 10,
    navigation: {
        nextEl: ".img1.swiper-button-next",
        prevEl: ".img1.swiper-button-prev",
    },

  });
*/
var swiper = new Swiper(".img_slider1", {
  slidesPerView: 1,
  spaceBetween: 10,
  // init: false,
  navigation: {
    nextEl: ".img1.swiper-button-next",
    prevEl: ".img1.swiper-button-prev",
},
  breakpoints: {
    300: {
      slidesPerView: 3,
      slidesPerGroup : 1,
      spaceBetween: 5,
    },
    480: {
      slidesPerView: 3,
      slidesPerGroup : 3,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 4,
      slidesPerGroup : 4,
      spaceBetween: 20,
    },
    860: {
      slidesPerView: 5,
      slidesPerGroup : 5,
      spaceBetween: 20,
    },
   
  }
});

  var swiper = new Swiper(".img_slider2", {
    slidesPerView: 5,
    slidesPerGroup : 5,
    spaceBetween: 30,
    navigation: {
        nextEl: ".img2.swiper-button-next",
        prevEl: ".img2.swiper-button-prev",
    },
      breakpoints: {
    300: {
      slidesPerView: 3,
      slidesPerGroup : 1,
      spaceBetween: 5,
    },
    480: {
      slidesPerView: 3,
      slidesPerGroup : 3,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 4,
      slidesPerGroup : 4,
      spaceBetween: 20,
    },
    860: {
      slidesPerView: 5,
      slidesPerGroup : 5,
      spaceBetween: 20,
    },
   
  }
  });
  
  var swiper = new Swiper(".event_slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: {
      delay:3000,
    },
    loop:true,
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 10,
      },

      790: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }
  
  });
  
});
