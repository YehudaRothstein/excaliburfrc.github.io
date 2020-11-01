var countDownDate = new Date("Feb 24, 2020 8:00").getTime();
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    //<h1 style="color:#d3af37; text-align: center; font-size: 10vh;"
    document.getElementById("countdown").innerHTML = days + " <span class='dayinfo'>Days,</span> " + hours + " <span class='dayinfo'>Hours,</span> " + minutes + " <span class='dayinfo'>Minutes,</span> " + seconds + " <span class='dayinfo'>Seconds</span>"

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "";
        document.getElementById("untilEvent").innerHTML = "Event Already Happened! Good Luck!";
    }
}, 1000);