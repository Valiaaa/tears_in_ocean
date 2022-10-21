$(document).ready(function(){

    $('.list').click(function(){
        $(".custom-select").removeAttr("open");
    });

    $('.list2').click(function(){
        $(".custom-select2").removeAttr("open");
    });

    $(window).resize(function() {
        if ($(window).width() < 550) {
            $("#general").html("GENERAL<br>ADMISSION")
            $("#general").css("line-height","26px")
            $(".custom-select2").css("transform","translateY(-117px)")
        }
        else {
            $("#general").html("GENERAL ADMISSION")
        }
    });
    
});