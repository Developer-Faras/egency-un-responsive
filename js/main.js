$(document).ready(function(){
    $(".owl-carousel.home-slider").owlCarousel({
        items : 1,
        loop : true,
        nav : false,
        autoplay : true,
        dots : true,
        autoplayTimeout : 2000,
        autoplayHoverPause : false,
        smartSpeed : 400,
    });

    $(".owl-carousel.client-slider").owlCarousel({
        items : 1,
        loop : true,
        nav : false,
        autoplay : true,
        dots : true,
        autoplayTimeout : 2000,
        autoplayHoverPause : false,
        smartSpeed : 1000,
    });

    // window scroll
    $(window).scroll(function(){
        if($(this).scrollTop()>300){
            $('header.main-header').addClass('header-active');
        }else{
            $('header.main-header').removeClass('header-active');
        }
    });

});