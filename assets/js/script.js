/* Date */
/*var date = new Date().getFullYear();

document.getElementById("year").innerHTML = date;*/

/* Change font size on scroll */
/*$(function() {

  $(window).scroll(function() {

    var mass = Math.max(1.25, 2-0.01*$(this).scrollTop()) + 'em';

    $('.navbar a').css({'font-size': mass});
  });
});

$(function() {

  $(window).scroll(function() {

    var mass = Math.max(30, 80-0.1*$(this).scrollTop()) + 'vh';

    $('#logo').css({'height': mass});
  });
});

$(function() {

  $(window).scroll(function() {

    var mass = Math.max(30, 89-0.1*$(this).scrollTop()) + 'vh';

    $('header').css({'height': mass});
  });
});*/

/* Appel la fonction, équivalent de $(document).ready(function() */
$(function() {

  /* Evenement .scroll */
  $(window).scroll(function() {

    /* Math.max permet de définir une taille minimale et une maximum, ainsi qu'un calcul qui réduit de 0.002 par pixel avec scrollTop qui lui récupère la valeur de la scrollbar */
    var navbar = Math.max(2.45, 3-0.002*$(this).scrollTop()) + 'rem';
    var logo = Math.max(30, 80-0.1*$(this).scrollTop()) + 'vh';
    var head = Math.max(30, 95-0.1*$(this).scrollTop()) + 'vh';

    $('#navbar a').css({'font-size': navbar});
    $('#logo').css({'height': logo});
    $('header').css({'height': head});
  });
});