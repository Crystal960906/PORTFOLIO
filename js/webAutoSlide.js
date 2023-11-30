$(function(){
    // 커버낫
    $("#Wconcept_box").mouseenter(function(){
        $("#section02_Wconcept > li").stop().animate({marginTop:"-1100px"},5000)
    }).mouseleave(function(){
        $("#section02_Wconcept > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // 알라딘
    $("#aladin_box").mouseenter(function(){
        $("#section03_aladin > li").stop().animate({marginTop:"-3100px"},6000)
    }).mouseleave(function(){
        $("#section03_aladin > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // NeoBeat
    $("#NeoBeat_box").mouseenter(function(){
        $("#section04_NeoBeat > li").stop().animate({marginTop:"-2100px"},8000)
    }).mouseleave(function(){
        $("#section04_NeoBeat > li").stop().animate({marginTop:"0px"},3000)
    })
    
    // vittz
    $("#wconcept_box").mouseenter(function(){
        $("#section05_wconcept > li").stop().animate({marginTop:"-1800px"},8000)
    }).mouseleave(function(){
        $("#section05_wconcept > li").stop().animate({marginTop:"0px"},3000)
    })


    $('.bhoverbox').hover(function(){
        $(this).css({"background":"rgba(0,0,0,0.3)"});
        $(this).find('i').show();
    },function(){
        $(this).css({"background":"rgba(0,0,0,0)"});
        $(this).find('i').hide();
    });
})