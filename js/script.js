$(document).ready(function(){
  
    //   상황 - 신발을 누르면.. 기능이 작동한다.
    //   기능 1 - 랩에 active 가 붙는다.
    //   기능 2 - 내가누른 번호와 같은 컨텐츠에 active 가 붙는다.
    //   기능 3 - 배경에 active 가 붙는다.
    //   기능 4 - 내가누른게 몇번인지 확인한다.
      $(".menu-box > ul > li").click(function(){
        
        var indexNum = $(this).index();
        
        
    //     조건 - 내가누른 버튼에 해당하는 2차메뉴가 활성화 되어있으면.. 기능이 작동한다.
        
        if( $(".nav-left > .content").eq(indexNum).hasClass("active") ){
          //     여기아래는 메뉴야 꺼져라 입니다.
          setTimeout(function(){
            $(".nav-2-depth-wrap").removeClass("active");
          },500);
          $(".nav-left > .content").removeClass("active");
          $(".nav-2-bg").removeClass("active");
          //     여기까지는 메뉴야 꺼져라 입니다.
        } else {
          //     여기 아래는 메뉴야 켜저라 입니다.
          $(".nav-2-depth-wrap").addClass("active");
          $(".nav-left > .content").eq(indexNum).addClass("active");
          $(".nav-left > .content").eq(indexNum).siblings().removeClass("active");
          $(".nav-2-bg").addClass("active");
          //     여기 까지는 메뉴야 켜저라 입니다.
        }
        
    //     기능 - 메뉴야 꺼져라
    //     그렇지 않으면....
    //     기능 - 메뉴야 켜저라
    
      });
      
      $(".nav-2-bg").click(function(){
        
        //     여기아래는 메뉴야 꺼져라 입니다.
        setTimeout(function(){
          $("nav-left > .content").removeClass("active");
        },500);
        $(".nav-2-depth-wrap").removeClass("active");
        $(".nav-2-bg").removeClass("active");
        //     여기까지는 메뉴야 꺼져라 입니다.
        
      });
      
    //   console.log("타임아웃 시작 전")
    //   setTimeout(function(){
    //     console.log("타임아웃 시작")
    //   },5000)
      
    });