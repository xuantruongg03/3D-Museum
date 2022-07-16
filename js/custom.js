
function openInfo(idInfo) {
    $('.paragraph').hide();
    $('.active').hide(500);
    $('.active').removeClass('active');
    $(idInfo).addClass('active');
    $('.active').show(500);
}
