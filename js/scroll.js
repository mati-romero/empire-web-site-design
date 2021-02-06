$(document).ready(function() {

    // btn-menu Efecto

    var btnMenu = $('#Btn-menu');

    $(window).on('scroll', function () {

        var nosotrosOffsetTop = $('#Nosotros').offset().top;

        if ($(window).scrollTop() >= nosotrosOffsetTop) {

            btnMenu.css('margin-right', 0);

        }else if ($(window).scrollTop() <= nosotrosOffsetTop/2) {

            btnMenu.css('margin-right', '-60px');

        }

    });

    // banner-text Efecto

    $('.banner-text').stop().animate({marginLeft: 20}, 800);

    $(window).on('scroll', function (event) {

        event.preventDefault();

        var bannerOffsetTop = $('#Banner').offset().top;

        if ($(window).scrollTop() > bannerOffsetTop/4) {

            var marginL = "-" + ($('.banner-text').width() + 40).toString() + "px"

            $('.banner-text').stop().animate({marginLeft: marginL }, 800);

        }else if ($(window).scrollTop() <= bannerOffsetTop/4) {

            $('.banner-text').stop().animate({marginLeft: 20}, 800);

        }
        
    });


    // Scroll Suave

    $('a.volver-arriba').on('click', function (event) {
        event.preventDefault();

        if ($(window).scrollTop() != 0) {
            $('html, body').stop().animate({scrollTop: 0}, 800);
        }

    });

	$('a.scroll-suave-nosotros').on('click', function (event) {
    	event.preventDefault();

    	var seccionOffsetTop = $($(this).attr('href')).offset().top;

    	$('html, body').stop().animate({scrollTop: seccionOffsetTop}, 800);

        $('#Nosotros p').animate({color: '#FC5439'},1400);
        $('#Nosotros p').animate({color: '#E0D3C2'},1200);

	});

	$('a.scroll-suave-contacto').on('click', function (event) {
    	event.preventDefault();
    	var seccionOffsetTop = $($(this).attr('href')).offset().top - 100;
    	$('html, body').stop().animate({scrollTop: seccionOffsetTop}, 800);
	});

});