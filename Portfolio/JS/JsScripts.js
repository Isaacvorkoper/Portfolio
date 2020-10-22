
$(function() {

    var welcomeSection = $('.welcome-section'),
        enterButton = welcomeSection.find('.enter-button');

    setTimeout(function() {
        welcomeSection.removeClass('content-hidden');
    }, 50);




});

function one() {
    document.getElementById('1').style.opacity = '0';
    setInterval(function(){ location.href = "AboutMe.html" }, 1000);
}


