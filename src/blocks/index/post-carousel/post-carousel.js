/**
 * @file Implementation of the post-carousel block
 */

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the post-carousel module.
 * @return true;
 */
export const initModule = function() {
    $('.post-carousel').each(function() {
        const $carousel  = $(this);
        const $container = $carousel.find('.post-carousel__container');

        $container.owlCarousel({
            loop       : false,
            nav        : false,
            responsive : {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    });

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------
