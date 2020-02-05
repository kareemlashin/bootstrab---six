$(document).ready(function () {

    $("#loading").fadeOut(1000, function () {
        $("body").css({ overflow: "auto" })
    })
    $(".nav-item .nav-link").click(function () {
        let LinkHref = $(this).attr("href");
        $("html,body").animate({ scrollTop: $(LinkHref).offset().top }, 1000)
    })

    var typed3 = new Typed('.element', {
        strings: ['FITNESS CHALLANGE'],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });

    let AboutSection = $("#About").offset().top;
    $(window).scroll(function () {
        let windowScroll = $(window).scrollTop();
        if (windowScroll > AboutSection - 120) {
            $(".navbar").addClass("bg-back-one");
        }
        else {
            $(".navbar").removeClass("bg-back-one");

        }
    })
    AOS.init();


})
