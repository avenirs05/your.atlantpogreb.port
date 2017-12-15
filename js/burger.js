$(document).ready(function () {
    $('#burger').on('click', function () {
        if ($('nav > ul').hasClass('h185')) {
            $('nav > ul').removeClass('h185');
            $('.fa-times').hide();
            $('.fa-bars').show(100);
        } else {
            $('nav > ul').addClass('h185');
            $('.fa-bars').hide();
            $('.fa-times').show(100);
        }
    });
});