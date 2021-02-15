'use strict';
(function($) {
  $('.set-bg').each(function() {
    const bg = $(this).data('setbg');
    $(this).css('background-image', 'url(' + bg + ')');
  });

  $('.canvas__open').on('click', function() {
    $('.offcanvas__menu__wrapper').addClass('show__offcanvas__menu');
    $('.offcanvas__menu__overlay').addClass('active');
  });

  $('.canvas__close, .offcanvas__menu__overlay').on('click', function() {
    $('.offcanvas__menu__wrapper').removeClass('show__offcanvas__menu');
    $('.offcanvas__menu__overlay').removeClass('active');
  });

  $('.mobile-menu').slicknav({
    prependTo: '#mobile-menu-wrap',
    allowParentLinks: true,
  });

  $('a').click(function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top,
    }, 500);
    return false;
  });

})(jQuery);