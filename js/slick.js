$(document).ready(function() {
    $('.slider__products').slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 2,
        prevArrow: `<button type='button' class='slick-prev arrow'><i class="bx bxs-chevron-left" ></i></button>`,
        nextArrow: `<button type='button' class='slick-next arrow'><i class="bx bxs-chevron-right"></i></button>`,
        responsive: [{
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 737,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    });
});