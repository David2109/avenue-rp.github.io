 /*$(window).mousemove(function(e) {
    var change;
    var xpos=e.clientX;var ypos=e.clientY;var left= change*20;
    var  xpos=xpos*2;ypos=ypos*2;
    $('.america').css('top',((0+(ypos/50))+"px"));
    $('.america').css('right',(( 0+(xpos/80))+"px")); */
                   
 //});
  $(window).mousemove(function(e) {
    var change;
    var xpos = e.clientX;
    var ypos = e.clientY;
    var left = change * 10;
    var xpos = xpos * 2;
    ypos = ypos * 2;
    $('.ellips').css('top',(( 210+(ypos/50))+"px"));
    $('.ellips').css('right',(( 1210+(xpos/80))+"px"));
  });
 
/**
 * '.locked' polyfill
 */
(function () {
    "use strict";

    var el = document.createElement('div');
    el.style.cssText = 'pointer-events:auto';

    if (el.style.pointerEvents !== 'auto') {
        el = null;

        var _lock = function (evt) {
            evt = evt || window.event;
            var el = evt.target || evt.srcElement;
            if (el && /\slocked\s/.test(' ' + el.className + ' ')) {
                if (evt.stopPropagation) {
                    evt.preventDefault();
                    evt.stopPropagation();
                } else {
                    evt.returnValue = true;
                    evt.cancelBubble = true;
                }
            }
        };

        if (document.addEventListener) {
            document.addEventListener('mousedown', _lock, false);
            document.addEventListener('contextmenu', _lock, false);
        } else {
            document.attachEvent('onmousedown', _lock);
            document.attachEvent('oncontextmenu', _lock);
        }
    }
})();