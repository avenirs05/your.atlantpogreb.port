$(document).ready(function(){
    $('#gallery_s > .img').on('click', function(){
        if (!$(this).hasClass('img_active')) {
            $('#gallery_s > .img').removeClass('img_active');
            $('#gallery_b').attr('src', $(this).find('img').attr('src'));
            $(this).addClass('img_active');
        }
    });
    $('#gallery_s_2 > .img').on('click', function(){
        if (!$(this).hasClass('img_active')) {
            $('#gallery_s_2 > .img').removeClass('img_active');
            $('#gallery_b_2').attr('src', $(this).find('img').attr('src'));
            $(this).addClass('img_active');
        }
    });
    $('#gallery_s_3 > .img').on('click', function(){
        if (!$(this).hasClass('img_active')) {
            $('#gallery_s_3 > .img').removeClass('img_active');
            $('#gallery_b_3').attr('src', $(this).find('img').attr('src'));
            $(this).addClass('img_active');
        }
    });
});