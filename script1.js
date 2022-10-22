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
    }
    }, 0);

    
});