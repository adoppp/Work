new Swiper('.slider', {
    spaceBetween: 40,

    navigation: {
        nextEl: '.slider-swiper-button-next',
        pervEl: '.slider-swiper-button-prev',
    },
   
    slidesPerView: 3,

    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,

            loop: true,
        },
            
        768: {
            slidesPerView: 2,
            spaceBetween: 20,

            loop: true,
        },

        1024: {
            slidesPerView: 3,
            spaceBetween: 30,

            loop: true,
        },

    },
});