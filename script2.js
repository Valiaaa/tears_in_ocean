$(document).ready(function(){

    $('.list').click(function(){
        $(".custom-select").removeAttr("open");
    });

    $('.list2').click(function(){
        $(".custom-select2").removeAttr("open");
    });

    if ($(window).width() < 550) {
        $("#general").html("GENERAL<br>ADMISSION")
        $("#general").css("line-height","23px")
        $(".custom-select2").css("transform","translateY(-113px)")
    }
    else {
        $("#general").html("GENERAL ADMISSION")
    }



    var PerformanceDate = new Date("Oct 28, 2022 20:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance = PerformanceDate - now;
        
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    // Output the result in an element
    document.getElementById("time").innerHTML = "+ " + days + "D " + hours + "H "
    + minutes + "M " + seconds + "S";
    document.getElementById("generaltime").innerHTML = days + " Days " + hours + " Hours";

    // If the pass the performance
    if (distance < 0) {
        var distance = now - PerformanceDate;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("time").innerHTML = "- " + days + "D " + hours + "H "
        + minutes + "M " + seconds + "S";
    }
    }, 0);

    var EarlybirdDate = new Date("Oct 21, 2022 20:00:00").getTime();

    // Update the count down every 1 second
    var y = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance = EarlybirdDate - now;
        
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="demo"
    document.getElementById("earlytime").innerHTML = " in " + days + " Days " + hours + " Hours ";

    // If the pass the performance
    if (distance < 0) {
        $(".early").css({"color":"var(--grey)","pointer-events":"none"});
        $(".custom-select").css({"border":"2px solid var(--grey)"})
        $("#default").css({"color":"var(--grey)"})
        $("#earlytime").html("")
    }
    }, 0);
    
    $("#play").click(function(){
        var output;
        var result = Array(6);
        result[0] = "<video width='100%' height='100%' autoplay><source src='video/summer cozy.MP4' type='video/mp4'>Your browser does not support the video tag.</video>";
        result[1] = "<video width='100%' height='100%' autoplay><source src='video/you nuan chi.MP4' type='video/mp4'>Your browser does not support the video tag.</video>";
        result[2] = "<video width='100%' height='100%' autoplay><source src='video/crash for.MP4' type='video/mp4'>Your browser does not support the video tag.</video>";
        result[3] = "<video width='100%' height='100%' autoplay><source src='video/vodka.MP4' type='video/mp4'>Your browser does not support the video tag.</video>";
        result[4] = "<video width='100%' height='100%' autoplay><source src='video/orange ocean.MP4' type='video/mp4'>Your browser does not support the video tag.</video>";
        result[5] = "<video width='100%' height='100%' autoplay><source src='video/dig.MP4' type='video/mp4'>Your browser does not support the video tag.</video>";

        var Num = Math.floor(Math.random() * 6);
        var output = result [Num];

        $(".bgv").html(output);
        $("#title").css({"display":"none", "opacity":"0"})
        $("#title2").css({"display":"block", "opacity":"1"})
    });

});