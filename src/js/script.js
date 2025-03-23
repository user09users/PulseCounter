import "/src/sass/style.scss";

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
