const navegacion = document.querySelector('.navbar');

$(window).scroll(function() {
    if ($('.navbar').offset().top > 156) {
        $('.navbar').addClass('background');
    } else {
        $('.navbar').removeClass('background');
    }
});