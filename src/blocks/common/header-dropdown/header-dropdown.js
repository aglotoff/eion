/**
 * @file Implementation of the header dropdown block
 */

import {makeDropdown, makeModal} from '../../../js/utils';

// -------------------------- BEGIN MODULE VARIABLES --------------------------
const dropdowns = [];
// --------------------------- END MODULE VARIABLES ---------------------------

// -------------------------- BEGIN UTILITY FUNCTIONS -------------------------
// TODO: add code here
// --------------------------- END UTILITY FUNCTIONS --------------------------

// ----------------------------- BEGIN DOM METHODS ----------------------------
// TODO: add code here
// ------------------------------ END DOM METHODS -----------------------------

// --------------------------- BEGIN EVENT HANDLERS ---------------------------
// TODO: add code here
// ---------------------------- END EVENT HANDLERS ----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the header-dropdown module.
 * @return true;
 */
export const initModule = function() {
    $('.header-dropdown').each(function() {
        const $dropdown = $(this);
        const $toggle   = $dropdown.find('.header-dropdown__toggle');
        const $popover  = $dropdown.find('.header-dropdown__popover');
        const $close    = $dropdown.find('.header-dropdown__close');

        const modal = makeModal($popover, {
            onToggle(open) {
                $dropdown.toggleClass('header-dropdown_visible', open);
            }
        });

        $close.click(function() {
            modal.hide();
        });

        const modalLogic = {
            handleClick() {
                modal.show();
            },

            hide() {
                modal.hide();
            },

            show() {
                modal.show();
            },

            pause() {
                $toggle.off('click', this.handleClick);
            },

            unpause() {
                $toggle.on('click', this.handleClick);
            }
        };

        const dropdownLogic = makeDropdown($dropdown, $toggle, {
            hoverToggles: true,
            onToggle(open) {
                $dropdown.toggleClass('header-dropdown_visible', open);
            }
        });

        modalLogic.unpause();
        dropdownLogic.pause();

        dropdowns.push({
            modalLogic,
            dropdownLogic,
        });
    });
    return true;
};

/**
 * Respond to window resize event.
 *
 * @param {boolean} isMobile - If true, switch to mobile layout. If false,
 * switch to desktop layout
 */
export const handleResize = function(isMobile) {
    if (!isMobile) {
        // On desktop screens, disable the modal behavior of submenus and enable
        // the dropdown behavior
        dropdowns.forEach(function(drop) {
            drop.modalLogic.hide();
            drop.modalLogic.pause();
            
            drop.dropdownLogic.unpause();
        });
    } else if (isMobile) {
        // On mobile screens, disable the dropdown behavior of submenus and
        // enable the modal behavior
        dropdowns.forEach(function(drop) {
            drop.dropdownLogic.hide();
            drop.dropdownLogic.pause();
            
            drop.modalLogic.unpause();
        });
    }
};
// ---------------------------- END PUBLIC METHODS ----------------------------
