$(document).ready(function(){
  $("#toggle-nav-logo").click(function(){
      $("#hidden-navbar-wrapper").slideToggle();
  });
});

$(window).resize(function(){
  if ($('#hidden-navbar-wrapper').width() >= 1001 ){
    $("#hidden-navbar-wrapper").hide();
  }
});
