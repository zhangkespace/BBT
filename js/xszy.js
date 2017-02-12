define(function(require, exports, module) {
    var xszy = require('../view/xszy.js');
    var Index = {
        init: function() {
            var me = this;
            $('#xszy').html(xszy);
            $(window).scroll(function() {
                if ($(window).scrollTop() > '550') {
                    $('.b2c-listbox').css({ 'top': '0px' });
                }
                if ($(window).scrollTop() > '1000') {
                    $('.b3c-listbox').css({ 'top': '0px' });
                }
                if ($(window).scrollTop() > '1560') {                 
                    $('.touzi2').css({ 'left': '244px' }).prev().css({ 'left': '160px' });
                    $('.touzi3').css({ 'left': '488px' }).prev().css({ 'left': '404px' });
                    $('.touzi4').css({ 'left': '732px' }).prev().css({ 'left': '648px' });
                    $('.touzi5').css({ 'left': '976px' }).prev().css({ 'left': '892px' });
                }
            });
            $(function(){
                me.event();
            });
        },
        event: function(){
            $('li.noBrather').eq(3).addClass('active').siblings('.noBrather').removeClass('active');
        }
    }
    module.exports = Index;
});
