/**
 * @file Implementation of the instagram feed block
 */

/* global Swiper */

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the instagram feed module.
 * @return true;
 */
export const initModule = function() {
    $('.instagram-feed').each(function() {
        const $carousel = $(this).find('.instagram-feed__carousel');

        new Swiper($carousel.get(0), {
            loop: true,

            slidesPerView: 2,

            breakpointsInverse: true,
            breakpoints: {
                480  : {slidesPerView: 4},
                768  : {slidesPerView: 5},
                992  : {slidesPerView: 6},
                1200 : {slidesPerView: 8},
            },
        });
    });
    
    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------
