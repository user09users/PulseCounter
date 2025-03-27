import "/src/sass/style.scss";
import consultationButton from "./modal";
import slider from "./slider";
import pageUp from "./pageUp";

slider();
pageUp();
consultationButton('[data-modal="consultation"]');

/*  
$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
    $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_activee')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('active');
});


function toggleClass(item) {
    $(item).each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__content_active');
        })
    })
}

toggleClass('.catalog-item__link');
toggleClass('.catalog-item__back');


$(document).ready(function () {
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="/src/img/slides/left.png" alt="left" /></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/src/img/slides/right.png" alt="right" /></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });
});
 */