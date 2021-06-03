$(".hamburger_menu").click(function () {
  $(".sidebar").toggleClass("open")
});

$("a").click(function () {
  $(".sidebar").removeClass("open")
});

 $('a').click(function() {
  $('.active').removeClass('active');
  $(this).addClass('active');
});
 
