$(function() {
    var navButtons = '#home, #cast, #pictures, #videos, #mail';
    $(navButtons).hover(function() {
        $(this).stop().animate({'top':'-30px'});
        }, function () {
        $(this).stop().animate({'top':'0px'})
        });
});