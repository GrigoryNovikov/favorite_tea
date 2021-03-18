$(document).ready(() => {

    $('.category').click((e) => {
        let currentElement = $(e.target);
        $('.products-container').hide();//скрываем элементы с опр классом
        let id = currentElement.data('id');//определяем элемент на котором был клик, заносим значение в переменную id
        $('#' + id).show();//показваем элемент в переменной id

        $('#' + id).slick('refresh');//обновляем первый слайдер

        $('.category').removeClass('active');
        currentElement.addClass('active');
    });


    $('#mix-tea').slick({
        centerMode: true,
        centerPadding: '630px',
        slidesToShow: 1,
        speed: 800,
        dots: true,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('#white-tea').slick({
        centerMode: true,
        centerPadding: '630px',
        slidesToShow: 1,
        slidesToScroll: 2,
        speed: 800,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    mobileFirst: true,
                    unslick: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('#black-tea').slick({
        centerMode: true,
        centerPadding: '630px',
        slidesToShow: 1,
        speed: 800,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('#oolong-tea').slick({
        centerMode: true,
        centerPadding: '630px',
        slidesToShow: 1,
        speed: 800,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    $('#green-tea').slick({
        centerMode: true,
        centerPadding: '630px',
        slidesToShow: 1,
        speed: 800,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    new WOW({
        animateClass: 'animate__animated'
    }).init();

    new CircleType(document.getElementById('circle-type'))
        .radius(90);
    new CircleType(document.getElementById('circle-type1'))
        .dir(-1)
        .radius(90);
    new CircleType(document.getElementById('circle-type2'))
        .radius(90);
    new CircleType(document.getElementById('circle-type3'))
        .dir(-1)
        .radius(90);
    new CircleType(document.getElementById('circle-type4'))
        .radius(90);
    new CircleType(document.getElementById('circle-type5'))
        .dir(-1)
        .radius(90);
    new CircleType(document.getElementById('circle-type6'))
        .radius(90);
    new CircleType(document.getElementById('circle-type7'))
        .dir(-1)
        .radius(90);


    $('#parallax').enllax();

    $('.slider-item-button').click(() => {
        $('#popup-order-container').css('display', 'flex');
    });

    $('#form-close, #popup-order-container').click((e) => {
        if (e.target.id === 'form-close' || e.target.id === 'popup-order-container') {
            $('#popup-order-container').hide();
        }
    });


});
