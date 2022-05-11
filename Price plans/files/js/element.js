/**
 * This is required for element rendering to be possible
 * @type {PlatformElement}
 *
 * we normalize the styles on initial load.
 */

(function() {
    var PricingTable = PlatformElement.extend({
        initialize: function() {
            this.fixStyles();
        },
        // normalizes the styles of all element children.
        fixStyles: function() {
            this.$('li.wsite-text').each(function(index, value) {
                var $value = $(value);
                var defaultText = $value.data('default-text');
                var $el = $(value).find('.editable-text');
                if ($el.text() === defaultText) {
                    $el.attr('style', '');
                }
            });

            this.$('.element').each(function(index) {
                $(this).attr('style', '');
            });
        }
    });

    return PricingTable;
})();