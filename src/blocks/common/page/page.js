/**
 * @file Implementation of the page block
 */

import * as BackToTop       from '../back-to-top/back-to-top';
import * as Countdown       from '../countdown/countdown';
import * as Header          from '../header/header';
import * as HeaderDropdown  from '../header-dropdown/header-dropdown';
import * as InstagramFeed   from '../instagram-feed/instagram-feed';
import * as LangMenu        from '../lang-menu/lang-menu';
import * as PostGallery     from '../post-gallery/post-gallery';
import * as ProductCarousel from '../product-carousel/product-carousel';
import * as ProductGallery  from '../product-gallery/product-gallery';
import * as SearchModal     from '../search-modal/search-modal';
import * as Share           from '../share/share';
import * as SideNav         from '../side-nav/side-nav';
import * as Tabs            from '../tabs/tabs';
import * as Qty             from '../qty/qty';

import * as Slider          from '../../index/slider/slider';
import * as Counters        from '../../index/counters/counters';
import * as PostCarousel    from '../../index/post-carousel/post-carousel';

import * as Comment     from '../../blog/comment/comment';
import * as CommentForm from '../../blog/comment-form/comment-form';

import * as Checkout              from '../../shop/checkout/checkout';
import * as Payment               from '../../shop/payment/payment';
import * as ReviewForm            from '../../shop/review-form/review-form';
import * as ShopCategoryFullwidth from '../../shop/shop-category-fullwidth/shop-category-fullwidth';
import * as ShopGallery           from '../../shop/shop-gallery/shop-gallery';

// -------------------------- BEGIN MODULE VARIABLES --------------------------
const STICKY_HEADER_OFFSET  = 300; // Scroll offset to make the header "sticky"
const VISIBLE_HEADER_OFFSET = 600; // Scroll offset to show the "sticky" header
const RESIZE_INTERVAL       = 200; // Resize debouncing interval
const SCROLL_INTERVAL       = 200; // Scroll throttling interval

const HeaderStates = {NORMAL: 0, STICKY: 1, VISIBLE: 2};
let headerState    = HeaderStates.NORMAL;

const $header    = $('.header');
const $backToTop = $('.back-to-top');

let resizeTimer = null;
let scrollTimer = null;
let wasScrolled = false;
// --------------------------- END MODULE VARIABLES ---------------------------

// ---------------------------- BEGIN DOM METHODS -----------------------------
/**
 * Add or remove header classes basd on the current scroll offset to create an
 * animated sticky header effect.
 */
const updateHeaderStyles = function() {
    const offset = $(window).scrollTop();
    const newState = offset < STICKY_HEADER_OFFSET
        ? HeaderStates.NORMAL
        : (offset < VISIBLE_HEADER_OFFSET
            ? HeaderStates.STICKY
            : HeaderStates.VISIBLE);

    if (newState !== headerState) {
        if (newState === HeaderStates.NORMAL) {
            $header
                .removeClass('page__header_scroll')
                .removeClass('page__header_hidden');
            $backToTop.removeClass('page__back-to-top_visible');
        } else if (newState === HeaderStates.STICKY) {
            $header
                .addClass('page__header_scroll')
                .addClass('page__header_hidden');
            $backToTop.removeClass('page__back-to-top_visible');
        } else {
            $header
                .addClass('page__header_scroll')
                .removeClass('page__header_hidden');
            $backToTop.addClass('page__back-to-top_visible');
        }

        headerState = newState;
    }
};
// ----------------------------- END DOM METHODS ------------------------------

// --------------------------- BEGIN EVENT HANDLERS ---------------------------
const onWindowScroll = function() {
    Counters.handleScroll();
    updateHeaderStyles();
};

const onWindowResize = function() {
    HeaderDropdown.handleResize();
    PostGallery.handleResize();
};
// ---------------------------- END EVENT HANDLERS ----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the page module.
 * @return true
 */
export const initModule = function() {
    $(window).on({
        // Debounce the window resize event.
        resize: function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(onWindowResize, RESIZE_INTERVAL);
        },

        // Throttle the window scroll event.
        scroll: function() {
            if (scrollTimer) {
                // ensure that we catch and execute that last invocation.
                wasScrolled = true;
                return;
            }

            onWindowScroll();

            scrollTimer = this.setTimeout(function() {
                scrollTimer = null;
                if (wasScrolled) {
                    onWindowScroll();
                    wasScrolled = false;
                }
            }, SCROLL_INTERVAL);
        },
    });

    // Initialize blocks.
    BackToTop.initModule();
    Header.initModule();
    HeaderDropdown.initModule();
    InstagramFeed.initModule();
    LangMenu.initModule();
    PostGallery.initModule();
    ProductCarousel.initModule();
    ProductGallery.initModule();
    SearchModal.initModule();
    Share.initModule();
    SideNav.initModule();
    Tabs.initModule();
    Qty.initModule();

    Slider.initModule();
    Countdown.initModule();
    Counters.initModule();
    PostCarousel.initModule();
    
    Comment.initModule();
    CommentForm.initModule();

    Checkout.initModule();
    Payment.initModule();
    ReviewForm.initModule();
    ShopCategoryFullwidth.initModule();
    ShopGallery.initModule();

    // Process the initial window size and scroll position.
    onWindowResize();
    onWindowScroll();

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------
