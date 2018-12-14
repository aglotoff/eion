/**
 * @file Implementation of the header block
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------
// TODO: add code here
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
 * Initialize the header module.
 * @return true;
 */
export const initModule = function() {
    const $page      = $('.page');
    const $header    = $('.header');
    const $navToggle = $header.find('.header__nav-toggle');

    // Use a global event to show the vertical menu.
    $navToggle.click(function() {
        $page.trigger('sidenav-show');
    });

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------
