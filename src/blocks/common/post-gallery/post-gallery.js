/**
 * @file Implementation of the post gallery block
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------
const galleries = [];
// --------------------------- END MODULE VARIABLES ---------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the post gallery module.
 * @return true;
 */
export const initModule = function() {
    $('.post-gallery').each(function() {
        const $gallery = $(this);
        const $container = $gallery.find('.post-gallery__container');
        const $prevArrow = $gallery.find('.post-gallery__arrow_prev');
        const $nextArrow = $gallery.find('.post-gallery__arrow_next');

        $container.slick({
            rows          : 0,

            prevArrow     : $prevArrow,
            nextArrow     : $nextArrow,

            speed         : 350,
            infinite      : true,

            dots          : false,
        });

        galleries.push($container);
    });

    return true;
};

export const handleResize = function() {
    for (const $gallery of galleries) {
        $gallery[0].slick.refresh();
    }
};
// ---------------------------- END PUBLIC METHODS ----------------------------
