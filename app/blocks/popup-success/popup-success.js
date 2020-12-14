$(function() {
    $('.form').on('submit', function(e) {
        $('.popup-form').hide();
        $('.popup-success').css('display', 'flex');
        e.preventDefault();
    });
    $('.popup-success')
        .on('click', function() {
            $(this).hide();
        })
        .on('click', '.popup-success__container', function(e) {
            e.stopPropagation();
        });
});