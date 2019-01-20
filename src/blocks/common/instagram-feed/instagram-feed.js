/**
 * @file Implementation of the instagram feed block
 */

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the instagram feed module.
 * @return true;
 */
export const initModule = function() {
    $('.instagram-feed').each(function() {
        const $carousel = $(this).find('.instagram-feed__carousel');

        $carousel.owlCarousel({
            loop       : true,
            nav        : false,
            dots       : false,
            responsive : {
                0    : {items: 2},
                480  : {items: 4},
                768  : {items: 5},
                992  : {items: 6},
                1200 : {items: 8},
            }
        });
    });
    
    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------
