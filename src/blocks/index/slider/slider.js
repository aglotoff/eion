/**
 * @file Implementation of the slider block
 */

// --------------------------- BEGIN EVENT HANDLERS ---------------------------
const onSlickBeforeChange = function(event, slick, current, next) {
    // Remove the "active" modifier from the previous slide and apply it to the
    // current one
    slick.$slides.eq(current).removeClass('slider__slide_active');
    slick.$slides.eq(next).addClass('slider__slide_active');
};

const onSkipLinkClick = function(event) {
    event.preventDefault();

    const targetId = $(this).attr('href');
    const $target  = $(targetId);
    if ($target.length === 0) {
        return;
    }

    $('html, body').animate({
        scrollTop: Math.max(0, $target.offset().top),
    }, 600, 'swing', function() {
        $target.focus();
    });
};
// ---------------------------- END EVENT HANDLERS ----------------------------

// ---------------------------- BEGIN PUBLIC METHODS --------------------------
/**
 * Initialize the slider module.
 * @return true;
 */
export const initModule = function() {
    $('.slider').each(function() {
        const $slider    = $(this);
        const $container = $slider.find('.slider__container');
        const $prevArrow = $slider.find('.slider__arrow_prev');
        const $nextArrow = $slider.find('.slider__arrow_next');
        const $skipLink  = $slider.find('.slider__skip-link');

        $container.slick({
            rows          : 0,

            prevArrow     : $prevArrow,
            nextArrow     : $nextArrow,
            dots          : true,

            autoplay      : true,
            autoplaySpeed : 5000,

            cssEase       : 'linear',
            fade          : true,
            speed         : 500,
            zIndex        : 1,

            pauseOnFocus  : false,
            pauseOnHover  : false,
        });

        $container.on('beforeChange', onSlickBeforeChange);

        $skipLink.click(onSkipLinkClick);
    });

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------
