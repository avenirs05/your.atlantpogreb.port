//    Постройка погреба
window.onload = function () {
    var cellar_9_img = document.getElementById('cellar_9_img');
    var cellar_9_img_frame = cellar_9_img.getElementsByClassName('frame');

    var cellar_9_desc = document.getElementById('cellar_9_desc');
    var cellar_9_desc_frame = cellar_9_desc.getElementsByClassName('frame');

    var i = 0;
    cellar_9_desc_frame[i].style.display = 'block';
    cellar_9_img_frame[i].style.display = 'block';
    document.getElementsByClassName('next_n_back')[0].getElementsByClassName('next')[0].onclick = function () {
        cellar_9_desc_frame[i].style.display = 'none';
        console.log(i);
        if (i<7) {
            i++
        }
        if (i>0) {
            document.getElementsByClassName('next_n_back')[0].getElementsByClassName('back')[0].style.display = 'block';
        }
        if (i==7) {
            document.getElementsByClassName('next_n_back')[0].style.display = 'none';
        }
        console.log(i);
        cellar_9_desc_frame[i].style.display = 'block';
        cellar_9_img_frame[i].style.display = 'block';
    }
    document.getElementsByClassName('next_n_back')[0].getElementsByClassName('back')[0].onclick = function () {
        cellar_9_desc_frame[i].style.display = 'none';
        cellar_9_img_frame[i].style.display = 'none';
        if (i>0) {
            i--
        }
        if (i==0) {
            document.getElementsByClassName('next_n_back')[0].getElementsByClassName('back')[0].style.display = 'none';
        }
        cellar_9_desc_frame[i].style.display = 'block';
        cellar_9_img_frame[i].style.display = 'block';
    }
    if ($(window).width()<768) {
        var cellar_9_img = document.getElementById('cellar_9_img');
        var cellar_9_img_frame = cellar_9_img.getElementsByClassName('frame');

        var cellar_9_desc = document.getElementById('cellar_9_desc');
        var cellar_9_desc_frame = cellar_9_desc.getElementsByClassName('frame');

        var i = 0;
        cellar_9_desc_frame[i].style.display = 'block';
        cellar_9_img_frame[i].style.display = 'block';
        document.getElementsByClassName('next_n_back')[1].getElementsByClassName('next')[0].onclick = function () {
            cellar_9_desc_frame[i].style.display = 'none';
            console.log(i);
            if (i<6) {
                i++
            }
            if (i>0) {
                document.getElementsByClassName('next_n_back')[1].getElementsByClassName('back')[0].style.display = 'block';
            }
            console.log(i);
            cellar_9_desc_frame[i].style.display = 'block';
            cellar_9_img_frame[i].style.display = 'block';
        }
        document.getElementsByClassName('next_n_back')[1].getElementsByClassName('back')[0].onclick = function () {
            cellar_9_desc_frame[i].style.display = 'none';
            cellar_9_img_frame[i].style.display = 'none';
            if (i>0 && i<7) {
                i--
            }
            if (i==0) {
                document.getElementsByClassName('next_n_back')[1].getElementsByClassName('back')[0].style.display = 'none';
            }
            console.log(i);
            cellar_9_desc_frame[i].style.display = 'block';
            cellar_9_img_frame[i].style.display = 'block';
        }
//            var cellar_9_img = document.getElementById('cellar_9_img');
//            var cellar_9_img_frame = cellar_9_img.getElementsByClassName('frame');
//            var i = 0;
//            var cellarAnimation = setInterval(function iCellar() {
//                if (i == 0) {
//                    cellar_9_img_frame[i].style.display = 'block';
//                    document.getElementById('cellar_9_desc').getElementsByClassName('frame')[i].style.display = 'block';
//                    i++
//                } else if (0 < i && i < 7) {
//                    cellar_9_img_frame[i].style.display = 'block';
//                    document.getElementById('cellar_9_desc').getElementsByClassName('frame')[i - 1].style.display = 'none';
//                    document.getElementById('cellar_9_desc').getElementsByClassName('frame')[i].style.display = 'block';
//                    i++
//                } else if (i >= 7 && i < 8) {
//                    document.getElementById('cellar_9_desc').getElementsByClassName('frame')[i - 1].style.display = 'none';
//                    document.getElementById('cellar_9_desc').getElementsByClassName('frame')[i].style.display = 'block';
//                    i++
//                } else if (i >= 8 && i <= 20) {
//                    document.getElementById('cellar_9_desc').getElementsByClassName('frame')[7].style.display = 'block';
//                    i++
//                } else if (i >= 20) {
//                    var y = 0;
//                    while (y < 7) {
//                        cellar_9_img_frame[y].style.display = 'none';
//                        document.getElementById('cellar_9_desc').getElementsByClassName('frame')[y].style.display = 'none';
//                        y++
//                    }
//                    document.getElementById('cellar_9_desc').getElementsByClassName('frame')[7].style.display = 'none';
//                    i = 0;
//                    cellar_9_img_frame[i].style.display = 'block';
//                    document.getElementById('cellar_9_desc').getElementsByClassName('frame')[i].style.display = 'block';
//                }
//            }, 1000);
    }

}