$(document).ready(function(){
    var cill = [
        ['1500x2000', 3.5, 240, '84 000', '139 000'],
        ['1800x2000', 5.1, 270, '106 000', '171 000'],
        ['2000x2000', 6.2, 330, '121 000', '196 000']
    ];
    $('#cill_cellar').change(function(){
        var index = $(this).find(':selected').index();
        $('#gb').find('.count').text(cill[index][0]);
        $('#ob').find('.count').text(cill[index][1]);
        $('#kg').find('.count').text(cill[index][2]);
        $('#cost').find('p').text(cill[index][3] + ' руб.');
        $('#cost_inst').find('p').text(cill[index][4] + ' руб.');
        console.log();
    });



    var pryam = [
        ['Атлант 2000x1500', '2000х1500х2000', 6, 320, '129 000', '194 000'],
        ['Атлант 2500х1500', '2500х1500х2000', 7.5, 370, '159 000', '229 000'],
        ['Атлант 2000х2000', '2000х2000х2000', 8, 385, '156 900', '231 900'],
        ['Атлант 2200х2000', '2200х2000х2000', 8.8, 410, '165 000', '245 000'],
        ['Атлант 2400х2000', '2400х2000х2000', 9.6, 430, '175 000', '255 000'],
        ['Атлант 2600х2000', '2600х2000х2000', 10.4, 460, '185 000', '267 000'],
        ['Атлант 2800х2000', '2800х2000х2000', 11.2, 490, '197 000', '280 000'],
        ['Атлант 3000х2000', '3000х2000х2000', 12, 510, '206 000', '291 000'],
        ['Атлант 4000х2000', '4000х2000х2000', 16, 640, '255 000', '360 000']
    ];
    $('#pryam_cellar').change(function(){
        var index = $(this).find(':selected').index();
        $('#gb2').find('.count').text(pryam[index][1]);
        $('#ob2').find('.count').text(pryam[index][2]);
        $('#kg2').find('.count').text(pryam[index][3]);
        $('#cost2').find('p').text(pryam[index][4] + ' руб.');
        $('#cost_inst2').find('p').text(pryam[index][5] + ' руб.');
        console.log();
    });


    var bokVert = [
        ['Атлант 2000x1500', '2000х1500х2000', 6, 320, '169 900', '234 900'],
        ['Атлант 2500х1500', '2500х1500х2000', 7.5, 370, '199 900', '269 900'],
        ['Атлант 2000х2000', '2000х2000х2000', 8, 385, '186 900', '261 900'],
        ['Атлант 2200х2000', '2200х2000х2000', 8.8, 410, '195 000', '275 000'],
        ['Атлант 2400х2000', '2400х2000х2000', 9.6, 430, '205 000', '285 000'],
        ['Атлант 2600х2000', '2600х2000х2000', 10.4, 460, '215 000', '297 000'],
        ['Атлант 2800х2000', '2800х2000х2000', 11.2, 490, '227 000', '310 000'],
        ['Атлант 3000х2000', '3000х2000х2000', 12, 510, '236 000', '321 000'],
        ['Атлант 4000х2000', '4000х2000х2000', 16, 640, '285 000', '390 000']
    ];
    var bokVert2 = [
        ['Атлант 2000x1500', '2000х1500х2000', 6, 320, '214 000', '294 000'],
        ['Атлант 2500х1500', '2500х1500х2000', 7.5, 370, '244 000', '329 000'],
        ['Атлант 2000х2000', '2000х2000х2000', 8, 385, '241 000', '331 000'],
        ['Атлант 2200х2000', '2200х2000х2000', 8.8, 410, '250 000', '345 000'],
        ['Атлант 2400х2000', '2400х2000х2000', 9.6, 430, '260 000', '355 000'],
        ['Атлант 2600х2000', '2600х2000х2000', 10.4, 460, '270 000', '367 000'],
        ['Атлант 2800х2000', '2800х2000х2000', 11.2, 490, '282 000', '380 000'],
        ['Атлант 3000х2000', '3000х2000х2000', 12, 510, '294 000', '394 000'],
        ['Атлант 4000х2000', '4000х2000х2000', 16, 640, '340 000', '460 000']
    ];
    var bokVert3 = [
        ['Атлант 2000x1500', '2000х1500х2000', 6, 320, '228 000', '313 000'],
        ['Атлант 2500х1500', '2500х1500х2000', 7.5, 370, '259 000', '349 000'],
        ['Атлант 2000х2000', '2000х2000х2000', 8, 385, '256 000', '351 000'],
        ['Атлант 2200х2000', '2200х2000х2000', 8.8, 410, '265 000', '365 000'],
        ['Атлант 2400х2000', '2400х2000х2000', 9.6, 430, '275 000', '370 000'],
        ['Атлант 2600х2000', '2600х2000х2000', 10.4, 460, '285 000', '387 000'],
        ['Атлант 2800х2000', '2800х2000х2000', 11.2, 490, '297 000', '400 000'],
        ['Атлант 3000х2000', '3000х2000х2000', 12, 510, '306 000', '411 000'],
        ['Атлант 4000х2000', '4000х2000х2000', 16, 640, '355 000', '480 000']
    ];
    if ($('#door').find(':selected').index()=='0') {
        var i = 0;
        var bokCellar = '';
        while (i<bokVert.length) {
            bokCellar+='<option>'+bokVert[i][0]+'</option>';
            i++
        }
        $('#bok_cellar').html(bokCellar);
        $('#bok_cellar').change(function(){
            var index = $(this).find(':selected').index();
            $('#gb3').find('.count').text(bokVert[index][1]);
            $('#ob3').find('.count').text(bokVert[index][2]);
            $('#kg3').find('.count').text(bokVert[index][3]);
            $('#cost3').find('p').text(bokVert[index][4] + ' руб.');
            $('#cost_inst3').find('p').text(bokVert[index][5] + ' руб.');
        });
    }
    $('#door').change(function(){
        var index = $(this).find(':selected').index();
        if (index=='0') {
            var i = 0;
            var bokCellar = '';
            while (i<bokVert.length) {
                bokCellar+='<option>'+bokVert[i][0]+'</option>';
                i++
            }
            $('#bok_cellar').html(bokCellar);
            $('#gb3').find('.count').text(bokVert[0][1]);
            $('#ob3').find('.count').text(bokVert[0][2]);
            $('#kg3').find('.count').text(bokVert[0][3]);
            $('#cost3').find('p').text(bokVert[0][4] + ' руб.');
            $('#cost_inst3').find('p').text(bokVert[0][5] + ' руб.');
            $('#bok_cellar').change(function(){
                var index = $(this).find(':selected').index();
                $('#gb3').find('.count').text(bokVert[index][1]);
                $('#ob3').find('.count').text(bokVert[index][2]);
                $('#kg3').find('.count').text(bokVert[index][3]);
                $('#cost3').find('p').text(bokVert[index][4] + ' руб.');
                $('#cost_inst3').find('p').text(bokVert[index][5] + ' руб.');
            });
        } else if (index=='1') {
            var i = 0;
            var bokCellar = '';
            while (i<bokVert2.length) {
                bokCellar+='<option>'+bokVert2[i][0]+'</option>';
                i++
            }
            $('#bok_cellar').html(bokCellar);
            $('#gb3').find('.count').text(bokVert2[0][1]);
            $('#ob3').find('.count').text(bokVert2[0][2]);
            $('#kg3').find('.count').text(bokVert2[0][3]);
            $('#cost3').find('p').text(bokVert2[0][4] + ' руб.');
            $('#cost_inst3').find('p').text(bokVert2[0][5] + ' руб.');
            $('#bok_cellar').change(function(){
                var index = $(this).find(':selected').index();
                $('#gb3').find('.count').text(bokVert2[index][1]);
                $('#ob3').find('.count').text(bokVert2[index][2]);
                $('#kg3').find('.count').text(bokVert2[index][3]);
                $('#cost3').find('p').text(bokVert2[index][4] + ' руб.');
                $('#cost_inst3').find('p').text(bokVert2[index][5] + ' руб.');
            });
        } else if (index=='2') {
            var i = 0;
            var bokCellar = '';
            while (i<bokVert3.length) {
                bokCellar+='<option>'+bokVert3[i][0]+'</option>';
                i++
            }
            $('#bok_cellar').html(bokCellar);
            $('#gb3').find('.count').text(bokVert3[0][1]);
            $('#ob3').find('.count').text(bokVert3[0][2]);
            $('#kg3').find('.count').text(bokVert3[0][3]);
            $('#cost3').find('p').text(bokVert3[0][4] + ' руб.');
            $('#cost_inst3').find('p').text(bokVert3[0][5] + ' руб.');
            $('#bok_cellar').change(function(){
                var index = $(this).find(':selected').index();
                $('#gb3').find('.count').text(bokVert3[index][1]);
                $('#ob3').find('.count').text(bokVert3[index][2]);
                $('#kg3').find('.count').text(bokVert3[index][3]);
                $('#cost3').find('p').text(bokVert3[index][4] + ' руб.');
                $('#cost_inst3').find('p').text(bokVert3[index][5] + ' руб.');
            });
        }
    });
});