//
//For bootstrap slider:
//
$('.carousel').carousel({
    interval: 2000
});

//
//Animation for top nav elements:
//

$(document).ready(function () {

    $(".nav-home-item").hover(
        function () {
            $('.nav-home_active').slideDown('easy').delay(1500);
        }, function () {
            $('.nav-home_active').slideUp('easy');
        });

    $(".nav-about-item").hover(
        function () {
            $('.nav-about_active').show('easy').delay(1500);
        }, function () {
            $('.nav-about_active').slideUp('easy');
        });

    $(".nav-portfolio-item").hover(
        function () {
            $('.nav-portfolio_active').slideDown('easy').delay(1500);
        }, function () {
            $('.nav-portfolio_active').slideUp('easy');
        });

    $(".nav-contact-item").hover(
        function () {
            $('.nav-contact_active').show('easy').delay(1500);
        }, function () {
            $('.nav-contact_active').hide('easy');
        });
});

//
//Collect & send form data with AJAX (comment or uncomment to use):
//

$(document).ready(function () {
    $('.contact-form__button')
        .click(function () {
            let userData = $('.contact-form').serializeArray(); //Transfer user data to array;
            let FormData = JSON.stringify(userData);
            $.ajax({
                url: '',
                method: "POST",
                data: {FormData},
                success: function () {
                    alert('Данные успешно отправлены!');
                    $('.contact-form__container').css('display', 'none');
                    $('.contact-form__send').css('display', 'block');
                },
                error: function () {
                    alert('Ой! Произошла ошибка :(')
                }
            });
        });
});

//
//Collect & send form data with Fetch (comment or uncomment to use):
//

// $(document).ready(function () {
//     $('.contact-form__button')
//         .click(function () {
//             let userData = $('.contact-form').serializeArray(); //Transfer user data to array;
//             let FormData = JSON.stringify(userData);
//             const url = '';
//             const data = {FormData};
//             fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
//                 },
//                 body: {data}
//             })
//                 .then(function (data) {
//                     alert('Данные успешно отправлены!');
//                 })
//                 .catch(function (error) {
//                     alert('Ой! Произошла ошибка :(', error);
//                 });
//         });
// });

