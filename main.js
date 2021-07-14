"use strict"

/** @brief  my resume
 *  @author Sarah Rosanna Busch
 *  @date   13 July 2021
 */

window.addEventListener("resize", () => { 
    console.log(document.documentElement.clientWidth); 
});

var main = (function() {
    var that = {};
    var elem = {};

    var openPage = ''; //keep track of what's open in side panel

    that.init = function() {
        elem.sidePanel = f.html.getElem('#sidePanel');
        elem.sideView = f.html.getElem('#sideView');
        footer.setup();
        if(document.documentElement.clientWidth >= 700) {
            main.nav("./pages/book/index.html");
        }
    }

    that.nav = function(url) {
        if(document.documentElement.clientWidth < 700) {
            location.assign(url);
        } else {
            if(url === openPage) {
                elem.sidePanel.style.display = 'none';
                openPage = '';
            } else {
                main.embedPage(url);
            }
        }
    }

    that.embedPage = function(url) {
        elem.sideView.src = url;
        elem.sidePanel.style.display = 'inline-block';
        openPage = url;
    }

    return that;
}());