/**
 * @file Implementation of the shop gallery block
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------
let $thumbs, $content;
// --------------------------- END MODULE VARIABLES ---------------------------

// --------------------------- BEGIN EVENT HANDLERS ---------------------------
const onContentBeforechange = function(event, slick, currentSlide, nextSlide) {
    $thumbs.each(function() {
        const $thumb = $(this);
        $thumb.toggleClass(
            'shop-gallery__thumb_active',
            $thumb.attr('data-slide') == nextSlide
        );
    });
};

const onThumbClick = function(event) {
    event.preventDefault();
    $content.slick('slickGoTo', $(this).attr('data-slide'));
};
// ---------------------------- END EVENT HANDLERS ----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the shop gallery module.
 * @return true if the block is present, false otherwise
 */
export const initModule = function() {
    const $gallery = $('.shop-gallery');
    if ($gallery.length == 0) {
        return false;
    }

    $content = $gallery.find('.shop-gallery__content');
    const $container = $gallery.find('.shop-gallery__thumbs-container');

    $content
        .slick({
            rows      : 0,

            arrows    : false,
            dots      : false,

            asNavFor  : $container,
            slide     : '.shop-gallery__content-item',

            draggable : false,
            fade      : true,
            speed     : 400,
            zIndex    : 1,
        })
        .magnificPopup({
            type                : 'image',
            delegate            : ':not(.slick-cloned) .shop-gallery__link',
            closeOnContentClick : false,
            mainClass           : 'mfp-zoom-in mfp-img-mobile',

            image               : {
                verticalFit : true,
            },

            gallery             : {
                enabled            : true,
                navigateByImgClick : true,
                preload            : [0, 1],
            },

            removalDelay: 300,

            callbacks: {
                open: function() {
                    $.magnificPopup.instance.next = function() {
                        this.wrap.removeClass('mfp-image-loaded');
                        setTimeout(() => {
                            $.magnificPopup.proto.next.call(this);
                        }, 120);
                    };

                    $.magnificPopup.instance.prev = function() {
                        this.wrap.removeClass('mfp-image-loaded');
                        setTimeout(() => {
                            $.magnificPopup.proto.prev.call(this);
                        }, 120);
                    };

                    const current = $content.slick('slickCurrentSlide');
                    $content.magnificPopup('goTo', current);
                },

                imageLoadComplete: function() {
                    setTimeout(() => {
                        this.wrap.addClass('mfp-image-loaded');
                    }, 16);
                },

                beforeClose: function() {
                    $content.slick('slickGoTo', parseInt(this.index));
                },
            },
        });

    
    const $prevArrow = $gallery.find('.shop-gallery__arrow_prev');
    const $nextArrow = $gallery.find('.shop-gallery__arrow_next');

    $container.slick({
        prevArrow      : $prevArrow,
        nextArrow      : $nextArrow,

        infinite       : true,
        slidesToShow   : 3,
        slidesToScroll : 1,

        asNavFor       : $content,
        speed          : 400,
        zIndex         : 1,

        mobileFirst    : true,
        responsive: [{
            breakpoint : 480,
            settings   : {
                slidesToShow: 4,
            }
        }]
    });
    

    $thumbs = $gallery.find('.shop-gallery__thumb');
    $thumbs.click(onThumbClick);

    $content.on('beforeChange', onContentBeforechange);

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------
