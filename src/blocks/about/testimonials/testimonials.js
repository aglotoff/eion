/**
 * @file Implementation of the testimonials block
 */

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the testimonials module.
 * @return true;
 */
export const initModule = function() {
    $('.testimonials').each(function() {
        $(this).slick({
            rows: 0,

            arrows: false,
            dots: true,

            zIndex: 1,
        });
    });

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------
