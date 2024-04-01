$(function(){    
    let sct=null;
    let winHeight=$("#intro").height();
    let profileOffset=$("#profile").offset().top;
    let statusOffset=$("#status").offset().top;
    let portfolioOffset=$("#portfolio").offset().top;
    let sectionOffset=[winHeight,profileOffset,statusOffset,portfolioOffset];
    let changeGnb=null;
//intro
    $(".btn_start").click(function(){
        $("html, body").animate({"scrollTop":profileOffset},500);
    });
    $("#logo").click(function(){
        $("html, body").animate({"scrollTop":profileOffset},500);
    });
//gnb
    $(".gnb>div>a").click(function(){
        $(this).addClass("gnb_active");
        $(this).parent().siblings().children("a").removeClass("gnb_active");
        changeGnb=$(this).parent().index()+1;
        $("html, body").animate({"scrollTop":sectionOffset[changeGnb]},500);
    });


//profile
//status

//portfolio
    $(".tab_menu>a").click(function(){
        $("html, body").animate({"scrollTop":portfolioOffset},100);
        return false;
    });

//tab_function
    $(".tab_menu>a").click(function(){
        $(this).addClass("tab_open");
        $(this).siblings().removeClass("tab_open");
        let count=$(this).index();
        $(".tab_contents>div").removeClass("tab_open");
        $(".tab_contents>div").eq(count).addClass("tab_open");
    }); 

    $(window).scroll(function(){
        sct=$(window).scrollTop();
        if(sct>=winHeight){
            $("#gnb_wrap").addClass("on sec1");
            $("#m_gnb").addClass("on sec1");
        }else{
            $("#gnb_wrap").removeClass("on sec3");
            $("#m_gnb").removeClass("on sec3");
        };
        if(sct>=portfolioOffset){
            $("#gnb_wrap").removeClass("sec1");
            $("#gnb_wrap").addClass("sec3");
            $("#m_gnb").removeClass("sec1");
            $("#m_gnb").addClass("sec3");
        }else if(sct>=winHeight && sct<portfolioOffset){
            $("#gnb_wrap").removeClass("sec3");
            $("#m_gnb").removeClass("sec3");
        };

        $(".gnb>div>a").removeClass("on");
        if(sct>=profileOffset && sct<statusOffset){
            $(".gnb>div").eq(0).children().addClass("on");
            $(".exp_bar").addClass("on");
            $(".skill_bar").removeClass("on");
        }else if(sct>=statusOffset && sct<portfolioOffset){
            $(".gnb>div").eq(1).children().addClass("on");
            $(".skill_bar").addClass("on");
        }else if(sct>=portfolioOffset){
            $(".gnb>div").eq(2).children().addClass("on");
        }
    });

    $(window).resize(function(){
        winHeight=$("#intro").height();
        profileOffset=$("#profile").offset().top;
        statusOffset=$("#status").offset().top;
        portfolioOffset=$("#portfolio").offset().top;
        sectionOffset=[winHeight,profileOffset,statusOffset,portfolioOffset];
    });

    let changeText1=null;
    let changeText2=null;
    let changeText3=null;
    let changePdf=null;
    let changeSrc=null;
    let changeBg=null;
    let changeCc=null;
    $(".tab_inside a").click(function(){
        $('.port_modal').fadeIn();
        changeText1=$(this).parent().next().find("h4").text();
        changeText2=$(this).parent().next().find("strong").text();
        changeText3=$(this).parent().next().find("p").text();
        changeCc=$(this).parent().next().find("img").attr("src");
        changePdf=$(this).attr("data-pdf");
        changeSrc=$(this).attr("data-src");
        changeBg=$(this).attr("data-bg");
        $(".port_modal").find("h4").text(changeText1);
        $(".port_modal").find("strong").text(changeText2);
        $(".port_modal").find("p").text(changeText3);
        $(".port_modal").find(".colorchip").attr("src",changeCc);
        $(".btn_pdf").attr("href",changePdf);
        $(".port_modal").css({"background-image":changeBg});
        if($(this).attr("title")=="video_project"){
            $(".detail_modal_content>img").hide()
            $(".detail_modal_content>iframe").show();
            $(".detail_modal_content>iframe").attr("src",changeSrc);
            $(".detail_modal_text>h4").addClass("vidcolor")
            $(".detail_modal_text>.btn_pdf").addClass("vidcolor")
        }else{
            $(".detail_modal_content>iframe").hide();
            $(".detail_modal_content>img").show();
            $(".detail_modal_content>img").attr("src",changeSrc);
            $(".detail_modal_text>h4").removeClass("vidcolor")
            $(".detail_modal_text>.btn_pdf").removeClass("vidcolor")
        }        
        event.preventDefault()
    })

    $(".btn_back").click(function(){
        $(".port_modal").fadeOut();
    }) 

    let m_gnbToggle=null;  
    $("#m_gnb").click(function(){     
        m_gnbToggle++;
        if(m_gnbToggle==1){
            $("#gnb_wrap").addClass("open");
            $("#m_gnb").children().addClass("close");
            
        }else if(m_gnbToggle>=2){
            $("#gnb_wrap").removeClass("open");
            $("#m_gnb").children().removeClass("close");
            m_gnbToggle=0; 
        }
        console.log(m_gnbToggle)
    })
});//END