/**
 * @file Implementation of the page block
 */

import * as Header         from '../header/header';
import * as HeaderDropdown from '../header-dropdown/header-dropdown';
import * as LangMenu       from '../lang-menu/lang-menu';
import * as Share          from '../share/share';
import * as SideNav        from '../side-nav/side-nav';

import * as Slider         from '../../index/slider/slider';
import * as Counters       from '../../index/counters/counters';
import * as InstagramFeed  from '../../index/instagram-feed/instagram-feed';
import * as PostCarousel   from '../../index/post-carousel/post-carousel';

// -------------------------- BEGIN MODULE VARIABLES --------------------------
const RESIZE_INTERVAL    = 200; // Resize debouncing interval
const SCROLL_INTERVAL    = 200; // Scroll throttling interval

let resizeTimer = null;
let scrollTimer = null;
let wasScrolled = false;
// --------------------------- END MODULE VARIABLES ---------------------------

// --------------------------- BEGIN EVENT HANDLERS ---------------------------
const onWindowScroll = function() {
    Counters.handleScroll();
};

const onWindowResize = function() {
    HeaderDropdown.handleResize();
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
    Header.initModule();
    HeaderDropdown.initModule();
    LangMenu.initModule();
    Share.initModule();
    SideNav.initModule();

    Slider.initModule();
    Counters.initModule();
    InstagramFeed.initModule();
    PostCarousel.initModule();

    // Process the initial window size and scroll position.
    onWindowResize();
    onWindowScroll();

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------
