$(document).ready(function () {
    $('.sidenav').sidenav();


    $(window).on('scroll', function() {
        if($(window).scrollTop() > 100) {
            $('.navbar').addClass('nav-color');
        } else {
            $('.navbar').removeClass('nav-color');
        }
    });
});