'use strict';
/// @filename   photoAlbum.js
/// @brief      display photos in albums in browser
/// @author     Sarah Rosanna Busch
/// @version    0
/// @date       22 Jan 2020

var photoAlbum = (function() {
    var that = {}; //public objects
    var elem = {}; //dom references
    var vars = {
        curPage: 'home',
        clicked: '', //img.id of _clicked thumbnail
        zindex: 20
    }; //static variables

    // brief: called from <body>'s onload event
    that.init = function() {
        console.log('initializing...')

        elem.body = f.html.getElem('body');
        elem.menuIcon = f.html.getElem('#menuIcon');
        elem.menu = f.html.getElem('nav');
        createMenu();
        elem.menuBtns = f.html.getElems('button', elem.menu);
        elem.overlay = f.html.getElem('#overlay');

        elem.homeView = f.html.getElem('#homeView');
        elem.galleryView = f.html.getElem('#galleryView');
        elem.photoView = f.html.getElem('#photoView');
        
        elem.galleryPhotos = f.html.getElem('#galleryPhotos');
        elem.left = f.html.getElem('#left');
        elem.right = f.html.getElem('#right');

        createHomePage();
        that.nav("home");
    }

    // brief: menuIcon click event handler
    // param: <bool> true to open, false to close
    that.openMenu = function(open) {
        console.log('showing menu: ' + open);
        var displayType = open ? 'none' : 'block';
        elem.menuIcon.style.display = displayType;
        displayType = open ? 'block' : 'none';
        elem.menu.style.display = displayType;
        elem.overlay.style.display = displayType;
    }

    // brief: menu button click event handler
    // param: '' = id of <main> to display
    that.nav = function(page) { 
        console.log('loading ' + page + ' view');
        that.openMenu(false);
        that.showFull(false);
        vars.zindex = 20;
        vars.curPage = page;
        switch(page) {
            case 'home':
                elem.homeView.style.display = "block";
                elem.galleryView.style.display = "none";
                elem.menuIcon.style.display = "none";
                break;
            default:
                elem.homeView.style.display = "none";
                elem.galleryView.style.display = "block";
                elem.menuIcon.style.display = "block";
                loadGallery(page);
                break;
        }
    }    

    function createMenu() {
        console.log('creating menu');
        for(var album in PHOTOS) { //photos.js
            var btn = f.html.spawn(elem.menu, 'button', album);
            btn.innerText = album;
            btn.onclick = function() {
                that.nav(this.id);
            }
        }
    }

    function createHomePage() {
        console.log('creating home page');
        for(var album in PHOTOS) {
            var fig = f.html.spawn(elem.homeView, 'figure');
            fig.id = album;
            fig.className = 'cat';
            fig.onclick = function() {
                that.nav(this.id);
            }
            var img = f.html.spawn(fig, 'img');
            img.src = 'photos/' + album + '/' + PHOTOS[album][0]; //use first in list for cover
            var caption = f.html.spawn(fig, 'figcaption');
            caption.className = 'cat';
            caption.innerText = album;
        }
    }

    /* brief: loads "thumbnail" images into <main> when in gallery mode*/
    function loadGallery()
    {
        console.log('loading ' + vars.curPage + ' gallery');
        f.html.empty(elem.galleryPhotos);

        //display requested set of images
        var len = PHOTOS[vars.curPage].length;
        for(var i = 0; i < len; i++) {
            var fig = f.html.spawn(elem.galleryPhotos, 'figure');
            fig.className = 'gallery';

            fig.style.transform = "rotate(" + getRandomNumber() + "deg)";
            fig.onmouseover = function() {
                this.style.transform = "rotate(0deg)";
                this.style.zIndex = vars.zindex;
                vars.zindex++;
            }
            fig.onmouseout = function() {
                this.style.transform = "rotate(" + getRandomNumber() + "deg)";
            }

            var img = f.html.spawn(fig, 'img', i);
            img.src = 'photos/' + vars.curPage + '/' + PHOTOS[vars.curPage][i];
            img.onclick = function() {
                vars.clicked = this.id;
                that.showFull(true);
            }
        }
    }

    /// brief for giving some random (but always upright) tilt to image
    function getRandomNumber(){
        var posNeg = (Math.random() > 0.5) ? 1 : -1;
        var x = Math.random() * 75 * posNeg;
        return x;
    }

    /* brief: "thumbnail" onclick event; loads the pic selected in fullscreen mode
    * params: show - boolean to toggle fullscreen mode                         */
    that.showFull = function(show) {
        console.log('showing fullscreen photo ' + show);
        if(show) {
            elem.photoView.style.display = 'block';
            var curPicIdx = parseInt(vars.clicked);
            var fullImage = document.getElementById('fullPhoto');
            fullImage.src = 'photos/' + vars.curPage + '/' +PHOTOS[vars.curPage][curPicIdx];
            elem.photoView.style.display = "block";
            elem.body.style.overflowY = 'hidden';
        } else {
            elem.photoView.style.display = 'none';
            elem.body.style.overflowY = 'auto';
        }
    }

    return that;
}());
