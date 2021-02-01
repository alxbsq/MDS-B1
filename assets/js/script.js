$(function() {

  $(window).scroll(function() {

    var navbar = Math.max(2.45, 3-0.002*$(this).scrollTop()) + 'rem';
    var logo = Math.max(30, 80-0.1*$(this).scrollTop()) + 'vh';
    var head = Math.max(30, 95-0.1*$(this).scrollTop()) + 'vh';

    $('.navbar a').css({'font-size': navbar});
    $('#logo').css({'height': logo});
    $('header').css({'height': head});
  });
});