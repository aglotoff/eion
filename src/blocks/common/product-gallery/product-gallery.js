/**
 * @file Implementation of the product gallery block
 */

// --------------------------- BEGIN EVENT HANDLERS ---------------------------
const onSlickBeforeChange = function(event, slick, current, next) {
    // Remove the "active" modifier from the previous slide and apply it to the
    // current one
    slick.$slides.eq(current).removeClass('product-gallery__slide_active');
    slick.$slides.eq(next).addClass('product-gallery__slide_active');
};
// ---------------------------- END EVENT HANDLERS ----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the product gallery module.
 * @return true;
 */
export const initModule = function() {
    $('.product-gallery').each(function() {
        const $gallery = $(this);

        $gallery.slick({
            rows           : 0,
            centerMode     : true,

            arrows         : false,
            slidesToShow   : 1,
            slidesToScroll : 1,
            variableWidth  : true,
            variableHeight : true,

            speed          : 350,
            infinite       : false,

            dots           : true,
        });

        $gallery.on('beforeChange', onSlickBeforeChange);
    });

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------
