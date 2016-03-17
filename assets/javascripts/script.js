jQuery(document).ready(function($){
  var nav, landingHeight;

  landingHeight = $('#header').height();
  nav = $('.navbar-follower'); 
  
  $(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = landingHeight;

    if(y_scroll_pos > scroll_pos_test) {
      nav.addClass('affix affix-top affix-full');
      $('#header').css('margin-bottom', '72px');
    } else {
      nav.removeClass('affix affix-top affix-full'); 
      $('#header').css('margin-bottom', '0px');
    }
  });
})


function getDate () {
  var date = new Date();
  return date.getFullYear();
}

jQuery(document).ready(function($){
  $('#copyrightDate').html(getDate());
})
