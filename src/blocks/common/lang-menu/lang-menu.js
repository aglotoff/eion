/**
 * @file Implementation of the language menu block
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------
const KEY_ESC   = 27;
const KEY_SPACE = 32;
// --------------------------- END MODULE VARIABLES ---------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the language menu module.
 * @return true
 */
export const initModule = function() {
    const $menu = $('.lang-menu');
    const $toggle = $menu.find('.lang-menu__toggle');

    let isExpanded = false;

    const toggleLangMenu = function(open) {
        isExpanded = open;

        if (open) {
            setTimeout(() => {
                $(document).on({
                    'click': onOutsideLangMenuClick,
                    'focusin': onOutsideLangMenuClick,
                });
                $menu.on('keydown', onLangMenuKeydown);
            }, 0);
        } else {
            $(document).off({
                'click': onOutsideLangMenuClick,
                'focusin': onOutsideLangMenuClick,
            });
            $menu.on('keydown', onLangMenuKeydown);
        }

        $menu.toggleClass('lang-menu_visible', open);
        $toggle.attr('aria-expanded', String(open));
    };

    const onOutsideLangMenuClick = function(event) {
        const target = event.target;
        if (!(
            target === document
            || $menu.is($(target))
            || $.contains($menu.get(0), target)
        )) {
            toggleLangMenu(false);
        }
    };

    const onLangMenuToggleClick = function() {
        if (!isExpanded) {
            toggleLangMenu(true);
        } else {
            toggleLangMenu(false);
        }
    };

    const onLangMenuToggleKeydown = function(event) {
        if (event.which === KEY_SPACE) {
            event.preventDefault();
            
            if (!this._isExpanded) {
                toggleLangMenu(true);
            } else {
                toggleLangMenu(false);
            }
        }
    };

    const onLangMenuToggleKeyup = function(event) {
        if (event.which === KEY_SPACE) {
            event.preventDefault();
        }
    };

    const onLangMenuKeydown = function(event) {
        if ((event.which === KEY_ESC) && isExpanded) {
            toggleLangMenu(false);
            $toggle.focus();
            event.stopPropagation();
        }
    };

    const onLangMenuMouseenter = function() {
        toggleLangMenu(true);
    };

    const onLangMenuMouseleave = function() {
        toggleLangMenu(false);
    };

    $toggle.on({
        'click': onLangMenuToggleClick,
        'keydown': onLangMenuToggleKeydown,
        'keyup': onLangMenuToggleKeyup,
    });

    $menu.hover(onLangMenuMouseenter, onLangMenuMouseleave);

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------