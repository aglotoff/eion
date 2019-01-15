/**
 * @file Implementation of the product carousel block
 */

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the product-carousel module.
 * @return true;
 */
export const initModule = function() {
    $('.product-carousel').each(function() {
        const $carousel  = $(this);
        const $container = $carousel.find('.product-carousel__container');

        $container.owlCarousel({
            loop       : false,
            nav        : false,
            responsive : {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                992: {
                    items: 3,
                },
                1200: {
                    items: 4,
                },
            }
        });
    });

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------
