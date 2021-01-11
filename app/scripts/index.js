import '../blocks/nav/nav.js';
import '../blocks/tariff/tariff.js';
import '../blocks/gallery/gallery.js';
import '../blocks/popup-form/popup-form.js';
import '../blocks/popup-success/popup-success.js';
import '../blocks/page-up/page-up.js';
import '../blocks/action/action.js';

$(function() {
    $('a[href^="#"]').on('click', function() {
        const href = $(this).attr('href');
        $('html, body').animate( {scrollTop: $(href).offset().top}, 300 );
    });

    $('input[name="phone"]').mask("+7 (999) 999-9999");

    let hash = $(location).attr('hash');
    if (hash.indexOf('popup') === 1) {
        const popupClassName = hash.replace(/^#/, '.');
        $(popupClassName).css('display', 'flex');
    }
});