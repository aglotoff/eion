/**
 * @file Implementation of the language menu block
 */

import {makeDropdown} from '../../../js/utils';

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the language menu module.
 * @return true;
 */
export const initModule = function() {
    const $langMenu = $('.lang-menu');
    const $toggle   = $langMenu.find('.lang-menu__toggle');

    makeDropdown($langMenu, $toggle, {
        hoverToggles: true,
        onToggle(open) {
            $langMenu.toggleClass('lang-menu_visible', open);
        },
    });

    return true;
};