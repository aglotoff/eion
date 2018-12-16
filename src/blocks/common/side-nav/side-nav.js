/**
 * @file Implementation of the vertical menu block
 */

import {makeModal} from '../../../js/utils';

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the vertical menu module.
 * @return true;
 */
export const initModule = function() {
    const $page        = $('.page');
    const $nav         = $('.side-nav');
    const $drawer      = $nav.find('.side-nav__drawer');
    const $close       = $drawer.find('.side-nav__close');
    const $submenus    = $drawer.find('.side-nav__menu_submenu');
    const $searchForm  = $drawer.find('.side-nav__search');
    const $searchInput = $searchForm.find('.side-nav__search-input');

    const closeSubmenu = function($submenu) {
        $submenu
            .slideUp()
            .prev('.side-nav__menu-link')
            .attr('aria-expanded', 'false');
    };

    const modalLogic = makeModal($drawer, {
        onToggle(open) {
            if (!open) {
                closeSubmenu($submenus);
            }

            $nav
                .attr('aria-hidden', String(!open))
                .toggleClass('side-nav_visible', open);
        },
    });

    $close.click(function closeSidenav() {
        modalLogic.hide();
    });

    // Listen for a global event to show the menu
    $page.on('sidenav-show', function showSidenav() {
        modalLogic.show();
    });

    $submenus.prev('.side-nav__menu-link').click(function toggleSubmenu() {
        const $link       = $(this);
        const $parentItem = $link.closest('.side-nav__menu-item');

        // If the submenu is expanded, collapse it. Otherwise, expand the
        // submenu but collapse all its siblings.
        if ($link.attr('aria-expanded') === 'true') {
            closeSubmenu($parentItem.find('.side-nav__menu_submenu'));
        } else {
            closeSubmenu($parentItem
                .siblings('.side-nav__menu-item')
                .find('.side-nav__menu_submenu'));

            $link.attr('aria-expanded', 'true');
            $link.next('.side-nav__menu_submenu').slideDown();
        }
    });

    $searchInput.focus(function onSearchFocus() {
        $searchForm.addClass('side-nav__search_focused');
        $searchInput.blur(function onSearchBlur() {
            $searchForm.removeClass('side-nav__search_focused');
        });
    });

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------
