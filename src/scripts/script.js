function getDate () {
  var date = new Date();
  return date.getFullYear();
}

jQuery(document).ready(function($){
  $('#copyrightDate').html(getDate());
})
