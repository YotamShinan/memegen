'use strict'

// ------------------------ DOM globals --------------------------- //

var gCanvas;
var gCtx;
var gElCurrentImgUrl;
var elImg;


function init() {
    gCanvas = document.querySelector('#main-canvas');
    gCtx = gCanvas.getContext('2d');
    renderFullGallery();
}

// ------------------------- Render Gallery ----------------------------- //

function renderFullGallery() {
    var imgs = getImgs();
    var strHtmls = imgs.map(img => {
        return `
        <td class="img-prev-box"><img src=${img.url} onclick="onChooseImg(${img.id})"></td>
        `
    })
    document.querySelector('tbody').innerHTML = strHtmls.join('');
}

// ------------------------ DOM img handleres --------------------------- //

function onChooseImg(imgId) {
    setCurrentMemeImg(imgId);
    loadImg();
    toggleGalleryMainPages()
}

function toggleGalleryMainPages() {
    const imgPage = document.querySelector('.img-page');
    const mainPage = document.querySelector('main.container');
    imgPage.classList.toggle('isHidden');
    mainPage.classList.toggle('isHidden');  
}

function loadImg() {
    elImg = new Image();
    elImg.src = gElCurrentImgUrl;
    elImg.onload = function () {
        gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
    };
}

// ------------------------ DOM text handleres --------------------------- //

function onTypeText() {
    const txt = document.querySelector('.meme-text').value;
    setMemeText(txt);
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
    textToCanvas();
}

function textToCanvas() {
    var size = getFontSize();
    gCtx.font = `${size}px Arial`;
    gCtx.textAlign = "center";
    gCtx.style = "white";
    gCtx.fillText(getMemeText(), gCanvas.width / 2, gCanvas.height - 470);
}



