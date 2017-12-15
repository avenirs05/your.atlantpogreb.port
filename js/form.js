var openDiv;
function call(id, h1) {
    console.log(id);
    var msg   = $('#'+id+'').serialize();
    var msg = String(msg)+'&text='+String(h1);
    console.log(msg2);
    var msg2 = msg.split('&');
    var msg3 = msg2[1].split('=');
    if (!msg3[1]=='') {
        $.ajax({
            type: 'POST',
            url: 'index1.php',
            data: msg,
            success: function(data) {
				ga("send","event","forms","order");
				yaCounter39092850.reachGoal("order");
                $('#shadow > .pop_up_form').fadeOut();
                $('#shadow').height($('html, body').height());
                $('#shadow > .thank').css({
                    'margin-top' :$(window).scrollTop()+150
                });
                $('#shadow').fadeIn(300);
                $('.thank').fadeIn(300);
                openDiv = $('.thank');
            },
            error:  function(xhr, str){
                console.log('Возникла ошибка: ' + xhr.responseCode);
            }
        });
    } else {
        $('#'+id+'').find('.pk').css({
            'border-color' : 'red'
        });
    }
};
function callx(id) {
    var msg   = $('#'+id+'').serialize();
    var msg2 = msg.split('&');
    var msg3 = msg2[1].split('=');
    if (!msg3[1]=='') {
        $.ajax({
            type: 'POST',
            url: 'index2.php',
            data: msg,
            success: function(data) {
				ga("send","event","forms","review");
				yaCounter39092850.reachGoal("review");
                $('#shadow >  #feedbacka, #shadow').fadeOut(300);
                openDiv = $('#shadow >  #feedbacka');
            },
            error:  function(xhr, str){
                console.log('Возникла ошибка: ' + xhr.responseCode);
            }
        });
    } else {
        $('#'+id+'').find('.pk').css({
            'border-color' : 'red'
        });
    }
};