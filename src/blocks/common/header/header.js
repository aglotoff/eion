/**
 * @file Implementation of the header block
 */

import {makeDropdown} from '../../../js/utils';

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the header module.
 * @return true;
 */
export const initModule = function() {
    const $page      = $('.page');
    const $header    = $('.header');
    const $navToggle = $header.find('.header__nav-toggle');
    const $megamenu  = $header.find('.header__megamenu');
    const $megaItem  = $megamenu.closest('.header__nav-item');
    const $megaLink  = $megamenu.prev('.header__nav-link');

    // Use a global event to show the vertical menu.
    $navToggle.click(function() {
        $page.trigger('sidenav-show');
    });

    makeDropdown($megaItem, $megaLink, {
        hoverToggles: true,
        onToggle(open) {
            $megamenu.toggleClass('header__megamenu_visible', open);
        }
    });

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------
