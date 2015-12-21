jQuery(document).ready(function($) {
  /*
  | Variable Declariations
  */
  var transIn = 'fadeInLeft';
  var transOut = 'fadeOutLeft';
  var stateClass = 'nav-group-isOpen';
  /*
  | Nav In
  */
  $('#nav-mobile-navicon').click(function() {
    /* Fix body so no scroll */
    $('body').addClass('utility-fixed');
    /* Garbage Collection */
    $('.nav-group').removeClass(transOut);
    /* Set state */
    $('.nav-group').addClass(stateClass);
    /* Delay animation */
    setTimeout(function() {
      /* Apply animation */
      $('.nav-group').addClass(transIn);
    }, 100);
  });
  /*
  | Nav Out
  */
  $('#nav-mobile-close').click(function() {
    /* Remove body fix */
    $('body').removeClass('utility-fixed');
    /* Remove old animation */
    $('.nav-group').removeClass(transIn);
    /* Apply new animation state */
    $('.nav-group').addClass(transOut);
    /* Delay animation */
    setTimeout(function() {
      /* Set state */
      $('.nav-group').removeClass(stateClass);
    }, 1000);
  });
});
