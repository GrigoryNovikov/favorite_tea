$(document).ready(() => {

    const propertyInscription = document.querySelectorAll('.properties-info .inscription');
    const propertyBigCircle = document.getElementById('properties-circle');
    const propertySmallCircle = document.getElementById('properties-circle2');
    for (let i=0; i<propertyInscription.length; i++) {
        propertyInscription[i].addEventListener('mouseover', function () {
            propertyBigCircle.style.transform = 'scale(1.1)';
            propertySmallCircle.style.transform = 'scale(1.1)';
        });
    }
    for (let i=0; i<propertyInscription.length; i++) {
        propertyInscription[i].addEventListener('mouseout', function () {
            propertyBigCircle.style.transform = 'scale(1)';
            propertySmallCircle.style.transform = 'scale(1)';
        });
    }

    const burgerItem = document.getElementById('burger');
    const logo = document.querySelector('.logo');
    const header = document.getElementsByTagName("header")[0];
    const mainMenu = document.getElementById('main-menu');
    const menuItems = document.querySelectorAll('.main-menu-item');
    if (burgerItem) {
        burgerItem.addEventListener("click", function () {
            burgerItem.classList.toggle('active');
            logo.classList.toggle('active');
            header.classList.toggle('active');
            mainMenu.classList.toggle('active');
            for (let i = 0; i < menuItems.length; i++) {
                menuItems[i].classList.toggle('active');
            }
        });
    }

//Прокрутка
    const menuLinks = document.querySelectorAll('.main-menu-item[data-goto]');

    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", menuLinkClick);
        });
    }

    function menuLinkClick(e) {
        const menuLink = e.target;

        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }

        if (burgerItem.classList.contains('active')) {
            burgerItem.classList.toggle('active');
            logo.classList.toggle('active');
            header.classList.toggle('active');
            mainMenu.classList.toggle('active');

            for (let i = 0; i < menuItems.length; i++) {
                menuItems[i].classList.toggle('active');
            }
        }
    }




    $('.category').click((e) => {
        let currentElement = $(e.target);
        $('.products-container').hide();//скрываем элементы с опр классом
        let id = currentElement.data('id');//определяем элемент на котором был клик, заносим значение в переменную id
        let idName = '#' + id;
        $(idName).show();//показваем элемент в переменной id

        $('#' + id).slick('setPosition');//обновляем слайдер

        $('.category').removeClass('active');
        currentElement.addClass('active');
    });

    $('.products-container').slick({
        centerMode: true,
        slidesToShow: 1,
        dots: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: false
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

    $('.slider-item-description').on('click', '.slider-item-button', () => {
        $('#popup-order-container').css('visibility', 'visible');
    })

    $('.popup-card-close, #popup-order-container').click((e) => {
        if (e.target.id === 'form-close' || e.target.id === 'close' || e.target.id === 'popup-order-container') {
            $('#popup-order-container').css('visibility', 'hidden');
            $('#popup-thank-container').css('visibility', 'hidden');
        }
    });

    $('#form-button').click(function () {
        $('.order-form-error').hide();
        let name = $('#user-name');
        let weight = $('#user-weight');
        let phone = $('#user-phone');

        let hasError = false;

        if (!weight.val()) {
            weight.siblings('.order-form-error').show();
            weight.css('border-color', 'red');
            hasError = true;
        } else {
            weight.css('border-color', 'rgb(143, 188, 98)');
        }

        if (!name.val()) {
            name.siblings('.order-form-error').show();
            name.css('border-color', 'red');
            hasError = true;
        } else {
            name.css('border-color', 'rgb(143, 188, 98)');
        }
        if (!phone.val()) {
            phone.siblings('.order-form-error').show();
            phone.css('border-color', 'red');
            hasError = true;
        } else {
            phone.css('border-color', 'rgb(143, 188, 98)');
        }

        if (!hasError) {
            // loader.css('display', 'flex')
            // $.ajax({
            //     method: "POST",
            //     url: 'http://itlogia.ru/test/checkout',
            //     data: {
            //         name: name.val(),
            //         weight: weight.val(),
            //         phone: phone.val()
            //     }
            // })
            $('#popup-order-container').css('visibility', 'hidden');
            $('#popup-thank-container').css('visibility', 'visible');
            // .done(function (message) {
            //     loader.hide();
            //     if (message.success) {
            //
            //     } else {
            //         alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ!');
            //     }
            // });
        }
    });

    // Отправка данных на сервер
    function send(event, php) {
        console.log("Отправка запроса");
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
        var req = new XMLHttpRequest();
        req.open('POST', php, true);
        req.onload = function () {
            if (req.status >= 200 && req.status < 400) {
                json = JSON.parse(this.response); // Ебанный internet explorer 11
                console.log(json);

                // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
                if (json.result == "success") {
                    // Если сообщение отправлено
                    alert("Сообщение отправлено");
                } else {
                    // Если произошла ошибка
                    alert("Ошибка. Сообщение не отправлено");
                }
                // Если не удалось связаться с php файлом
            } else {
                alert("Ошибка сервера. Номер: " + req.status);
            }
        };

// Если не удалось отправить запрос. Стоит блок на хостинге
        req.onerror = function () {
            alert("Ошибка отправки запроса");
        };
        req.send(new FormData(event.target));
    }


});
