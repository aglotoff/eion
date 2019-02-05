/**
 * @file Implementation of the shop category fullwidth block
 */

/* global Swiper */

/**
 * Initialize the shop category fullwidth module.
 * @return true;
 */
export const initModule = function() {
    const $container = $('.shop-category-fullwidth');
    if ($container.length < 1) {
        return false;
    }

    const $items = $container.find('.swiper-container');
    const $scrollbar = $container.find('.shop-category-fullwidth__scrollbar');

    new Swiper($items.get(0), {
        slidesPerColumn: 2,
        slidesPerView: 1,
        spaceBetween: 30,

        scrollbar: {
            el: $scrollbar.get(0),
            hide: false,
            draggable: true,
            snapOnRelease: true,
            dragClass: 'shop-category-fullwidth__scrollbar-drag'
        },

        breakpointsInverse: true,
        breakpoints: {
            580: {
                slidesPerView: 2,
            },
            1700: {
                slidesPerView: 3,
            }
        },
    });

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------
