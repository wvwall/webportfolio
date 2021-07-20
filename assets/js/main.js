
$(document).ready(function() {

    $(document).on("scroll", onScroll);

    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('a').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
        });
    }
    $(".hamburger_menu").click(function () {
        $(".sidebar").toggleClass("open")
    });

    $("a").click(function () {
        $(".sidebar").removeClass("open")
    });

    $('a').click(function () {
        $('.active').removeClass('active');
        $(this).addClass('active');
    });
})
 
