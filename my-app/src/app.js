var $ = require('jquery');

$(document).ready(function() {
    $(document).on('mousemove', 'input.slider', function() {
        value = $(this).val();
        value = value - 0.5;
        $('img.after').attr('style', 'clip-path: polygon(0 0%, '+value+'% 0%, '+value+'% 100%, 0% 100%)');
    });
});
