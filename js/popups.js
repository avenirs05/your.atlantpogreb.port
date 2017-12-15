$(document).ready(function(){
    var openDiv;

    $('#shadow').on('click', function(e) {
        if (!openDiv.is(e.target) && openDiv.has(e.target).length === 0) {
            $('#shadow, #shadow > .model, #shadow > .pop_up_form, #shadow > #model_3_pop, #shadow > #model_2_pop, #thank').fadeOut(300);
        }
    });
    $('.close_popup, .close_m').on('click', function(){
        $('#shadow, #shadow > .model, #shadow > .pop_up_form, #shadow > #model_3_pop, #shadow > #model_2_pop, #thank').fadeOut(300);
    });
    $('#model_1').on('click', function(){
        $('#shadow').height($('html, body').height());
        $('#shadow > #model_1_pop').css({
            'margin-top' :$(window).scrollTop()+50
        });
        $('#shadow, #shadow > #model_1_pop').fadeIn(300);
        openDiv = $('#model_1_pop');
    });
    $('#model_2').on('click', function(){
        $('#shadow').height($('html, body').height());
        $('#shadow > #model_2_pop').css({
            'margin-top' :$(window).scrollTop()+50
        });
        $('#shadow, #shadow > #model_2_pop').fadeIn(300);
        openDiv = $('#model_2_pop');
    });
    $('#model_3').on('click', function(){
        $('#shadow').height($('html, body').height());
        $('#shadow > #model_3_pop').css({
            'margin-top' :$(window).scrollTop()+50
        });
        $('#shadow, #shadow > #model_3_pop').fadeIn(300);
        openDiv = $('#model_3_pop');
    });
    $('.callback > a, #cell2, #cell3').on('click', function(event){
        event.preventDefault();
        $('#shadow').height($('html, body').height());
        $('#shadow > .pop_up_form').css({
            'margin-top' :$(window).scrollTop()+150
        });
        if ($(this).attr('id') == 'cell2') {
            $('#shadow, #shadow > #waiting_callback').fadeIn(300);
        } else if ($(this).attr('id') == 'cell3') {
            $('#shadow, #shadow > #waiting_callback_2').fadeIn(300);
        } else {
            $('#shadow, #shadow > #pop_up_form').fadeIn(300);
        }


        openDiv = $('#shadow > .pop_up_form');
    });
    $('#add_feedback').on('click', function(event){
        event.preventDefault();
        $('#shadow').height($('html, body').height());
        $('#shadow > #feedbacka').css({
            'margin-top' :$(window).scrollTop()+150
        });
        $('#shadow, #shadow > #feedbacka').fadeIn(300);

        openDiv = $('#shadow > #feedbacka');
    });
    $('#btn_submit, #btn_submit2, #btn_submit3, #btn_submit4, #ihaveaq').on('click', function(){
        openDiv = $('#thank');
    });
});