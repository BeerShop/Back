var Demo = function() {
    var self = this;

    self.init = function() {
        $('.remove-cart').on('click', function() {
            $(this).parents('tr:first').animate({'opacity': 0}, 250, function() {
                $(this).remove();
            });
        });
    };

    return self.init();
};

$(function(){
    // Elements to load
    new App();
    new ColorSwitcher();
    new Demo();
});