$(document).ready(function(){
    $('.carousel__slider').slick({
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        repeat: true,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/leftArrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/rightArrow.png"></button>',
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