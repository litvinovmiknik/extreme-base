$(function() {
    $('.callback__button, .tariff__button').on('click', function() {
        $('.popup-form').css('display', 'flex');
    });
    $('.popup-form')
        .on('click', function() {
            $(this).hide();
        })
        .on('click', '.form', function(e) {
            e.stopPropagation();
        });
});