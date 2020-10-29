
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

/*Skift af side*/
$(".panel").on("click", function (){
    location.href = this.id
    $(this.id + "page").css('font-size', '1.7vw');
    $(this.id + "page").css('text-decoration', 'underline');
})

$('#pagechanger p').click(function(event) {
    event.preventDefault();
    $('#pagechanger p').removeClass('active');
    $(this).toggleClass('active');
});



