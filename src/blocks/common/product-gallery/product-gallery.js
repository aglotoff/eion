/**
 * @file Implementation of the product gallery block
 */

/* global Swiper */

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the product gallery module.
 * @return true;
 */
export const initModule = function() {
    $('.product-gallery').each(function() {
        const $gallery = $(this);
        const $pagination = $gallery.find('.product-gallery__pagination');

        new Swiper($gallery.get(0), {
            spaceBetween: 20,
            centeredSlides: true,
            slidesPerView: 1,
            watchSlidesVisibility: true,

            pagination: {
                el: $pagination.get(0),
                clickable: true,
                bulletClass: 'product-gallery__bullet',
                bulletActiveClass: 'product-gallery__bullet_active',
                modifierClass: 'product-gallery__pagination_',
                clickableClass: 'product-gallery__pagination_clickable',
            },

            breakpointsInverse: true,
            breakpoints: {
                480: {
                    slidesPerView: 2,
                },
            }
        });
    });

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------
