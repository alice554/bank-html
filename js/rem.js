(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'onorientationchange' in window ? 'resize' : 'onorientationchange',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=720){
                // debugger
                docEl.style.fontSize = '16px';
            }else if(clientWidth>=450){
                docEl.style.fontSize = 16 * (clientWidth / 720) + 'px';
            }else{
                docEl.style.fontSize = '14px';
            }
        };
  
    if (!doc.addEventListener) return;
    // win.addEventListener(resizeEvt, recalc, false);
    win.addEventListener('resize', recalc);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);
  