$(document).ready(function () {
  $(document).on("scroll", onScroll);

  $('a[href^="#site-main"]').addClass("active");
  $("a").on("click", function (e) {
    e.preventDefault();
    //  $(document).off("scroll");
    var athis = this;
    var target = this.hash,
      menu = target;
    $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top + 2,
        },
        600,
        "swing",
        function () {
          window.location.hash = target;
          $(".menuitem").removeClass("active");
          $(athis).addClass("active");
        }
      );
  });

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $("a").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (
        refElement.position().top <= scrollPos &&
        refElement.position().top + refElement.height() > scrollPos
      ) {
        $(".list-nav > a").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  }
  $(".hamburger_menu").click(function () {
    $(".sidebar").toggleClass("open");
  });

  $("a").click(function () {
    $(".sidebar").removeClass("open");
  });

  $("a").click(function () {
    $(".active").removeClass("active");
    $(this).addClass("active");
  });
  $(".fa-info-circle ").click(function () {
    $(".text_card").toggleClass("info");
  });
});
