/**
 * @file Implementation of the search modal block
 */

import {makeModal} from '../../../js/utils';

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the search modal module.
 * @return true if the module is present, false otherwise
 */
export const initModule = function() {
    const $page  = $('.page');
    const $modal = $('.search-modal');
    const $close = $modal.find('.search-modal__close');

    if ($modal.length == 0) {
        return false;
    }

    const modalLogic = makeModal($modal, {
        focusDelay: 100,
        onToggle(open) {
            $modal
                .attr('aria-hidden', String(!open))
                .toggleClass('search-modal_visible', open);

            if (open) {
                $modal.scrollTop(0);
            }
        },
    });

    $close.click(function closeSidenav() {
        modalLogic.hide();
    });

    // Listen for a global event to show the modal
    $page.on('search-show', function showModal() {
        modalLogic.show();
    });

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------
