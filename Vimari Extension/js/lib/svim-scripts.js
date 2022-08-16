/*
 * Code in this file is taken from sVim, it has been adjusted to
 * work with Vimari.
 * Assumes global variable: settings.
 */

var scrollTarget = -1;
var scrollTargetResetTimeout = null;

function customScrollBy(x, y) {
    if (scrollTarget == -1)
        scrollTarget = window.pageYOffset + y;
    else
        scrollTarget += y;

    window.scroll({ left: x, top: scrollTarget, behavior: 'smooth' });

    clearTimeout(scrollTargetResetTimeout);
    scrollTargetResetTimeout = setTimeout(() => {
      scrollTarget = -1;
    }, 100)
}
