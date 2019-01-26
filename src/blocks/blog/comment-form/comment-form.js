/**
 * @file Implementation of the comment form block
 * @author Andrey Glotov
 */

// --------------------------- BEGIN PUBLIC METHODS ---------------------------
/**
 * Initialize the comment form module.
 * @return true
 */
export const initModule = function() {
    const $page = $('.page');

    const $form    = $('.comment-form');
    const $replyTo = $form.find('[name="reply-to"]');

    $form.validate({
        errorClass  : 'error comment-form__error',
        highlight   : Function.prototype,
        unhighlight : Function.prototype,
    });

    $page.on('comment-reply', function(event, id) {      
        $replyTo.val(id);

        $('html, body').animate({
            scrollTop: $form.offset().top - 100
        }, 400, function() {
            $('.comment-form__input:first', $form).focus();
        });
    });

    return true;
};
// ---------------------------- END PUBLIC METHODS ----------------------------