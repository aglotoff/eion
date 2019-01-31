/**
 * @file Implementation of the review form block
 * @author Andrey Glotov
 */

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the comment form module.
 * @return true
 */
export const initModule = function() {
    const $form    = $('.review-form');

    $form.validate({
        errorClass  : 'error review-form__error',
        errorPlacement : function(error, element) {
            if (element.attr('name') == 'rating') {
                error.insertAfter(element.closest('.star-rating'));
            } else {
                error.insertAfter(element);
            }
            //element.closest('.review-form__label').append(error);
        },
        highlight   : Function.prototype,
        unhighlight : Function.prototype,
    });

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------