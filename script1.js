$(document).ready(function(){

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

    //img changes depending on date
    if (days > 5) {
        $(".bg").html("<img src='pic/6.png'>")
    } else if (days == 5) {
        $(".bg").html("<img src='pic/5.png'>")
    } else if (days == 4) {
        $(".bg").html("<img src='pic/4.png'>")
    } else if (days == 3) {
        $(".bg").html("<img src='pic/3.png'>")
    } else if (days == 2) {
        $(".bg").html("<img src='pic/2.png'>")
    } else {
        $(".bg").html("<img src='pic/1.png'>")
    }

    // If the pass the performance
    if (distance < 0) {
        var distance = now - PerformanceDate;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("time").innerHTML = "- " + days + "D " + hours + "H "
        + minutes + "M " + seconds + "S";
        $("#tickets").hide();
        $("#archive").show();
        $(".bg").html("<img src='pic/1.png'>");
    }

    }, 0);

    $("#play").click(function(){
        var output;
        var result = Array(9);
        result[0] = "<video width='100%' height='100%' autoplay><source src='video/summer cozy.MP4' type='video/mp4'>Your browser does not support the video tag.</video>";
        result[1] = "<video width='100%' height='100%' autoplay><source src='video/you nuan chi.MP4' type='video/mp4'>Your browser does not support the video tag.</video>";
        result[2] = "<video width='100%' height='100%' autoplay><source src='video/crash for.MP4' type='video/mp4'>Your browser does not support the video tag.</video>";
        result[3] = "<video width='100%' height='100%' autoplay><source src='video/vodka.MP4' type='video/mp4'>Your browser does not support the video tag.</video>";
        result[4] = "<video width='100%' height='100%' autoplay><source src='video/orange ocean.MP4' type='video/mp4'>Your browser does not support the video tag.</video>";
        result[5] = "<video width='100%' height='100%' autoplay><source src='video/dig.MP4' type='video/mp4'>Your browser does not support the video tag.</video>";
        result[6] = "<video width='100%' height='100%' autoplay><source src='video/alpha.MP4' type='video/mp4'>Your browser does not support the video tag.</video>";
        result[7] = "<video width='100%' height='100%' autoplay><source src='video/remember me.MP4' type='video/mp4'>Your browser does not support the video tag.</video>";
        result[8] = "<video width='100%' height='100%' autoplay><source src='video/check point.mp4' type='video/mp4'>Your browser does not support the video tag.</video>";

        var Num = Math.floor(Math.random() * 9);
        var output = result [Num];

        $(".bgv").html(output);
        $(".bgv2").empty();

        $(".bg").css("opacity","0");
        $(".bg2").css("opacity","1");
    });

    $("#archive").click(function(){
        $(".bgv").empty();
        $(".bgv2").html("<video width='100%' height='100%' autoplay><source src='video/archive.mp4' type='video/mp4'>Your browser does not support the video tag.</video>");

        $(".bg").css("opacity","0");
        $(".bg2").css("opacity","1");
    });

});