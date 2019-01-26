/**
 * @file Implementation of the share block
 */

import {makeDropdown} from '../../../js/utils';

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the share module.
 * @return true;
 */
export const initModule = function() {
    $('.share').each(function() {
        const $share  = $(this);
        const $toggle = $share.find('.share__toggle');
        const $menu   = $share.find('.share__menu');

        makeDropdown($share, $toggle, {
            hoverToggles : true,
            onToggle     : function onShareToggle(open) {
                $toggle.attr('aria-expanded', String(open));
                $menu.toggleClass('share__menu_visible', open);
            },
        });
    });
    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------
