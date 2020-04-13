'use strict'
// ------------------------ DOM globals --------------------------- //

var gCanvas;
var gCtx;
var gElCurrentImgUrl;
var elImg;


function init() {
    gCanvas = document.querySelector('#main-canvas');
    gCtx = gCanvas.getContext('2d');
    resetGMeme();
    renderFullGallery();
    getElInput().value = '';
    document.getElementById('stroke-color').value = 'black';
    document.getElementById('font-color').value = 'white';

}

function getElInput() {
    return document.getElementById('0');
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
    toggleGalleryMainPages();
}

function toggleGalleryMainPages() {
    const imgPage = document.querySelector('.img-page');
    const mainPage = document.querySelector('main.container');
    imgPage.classList.toggle('isHidden');
    mainPage.classList.toggle('isHidden');
    init();
}

function loadImg() {
    elImg = new Image();
    elImg.src = gElCurrentImgUrl;
    elImg.onload = function () {
        gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
    };
}

// ------------------------ DOM text input handleres --------------------------- //

function renderCanvas() {
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
    textToCanvas();
}

function onTypeText(elInput) {
    const txt = elInput.value;
    setMemeText(txt);
    renderCanvas();
}

function textToCanvas() {
    const lines = getLines()
    lines.forEach(line => {

        gCtx.lineWidth = '3';
        gCtx.textAlign = line.align;
        gCtx.fillStyle = line.color;
        gCtx.strokeStyle = line.stroke;
        gCtx.font = `bold ${line.size}px Impact`;
        gCtx.fillText(line.text, gCanvas.width / 2, line.cordsY - 470);
        gCtx.strokeText(line.text, gCanvas.width / 2, line.cordsY - 470);

    })
}

function onAddTextInput() {
    if (!wasSecondLineCreated()) {
        setSecondLineCreated();
        getElInput().value = '';
    }
}

function onFocusSwap() {
    if (wasSecondLineCreated()) {
        setSelectedLine();
        getElInput().value = getMemeText(getSelectedLine());
    }
}

function onDeleteTextLine() {
    setMemeText('', getSelectedLine());
    getElInput().value = '';
    renderCanvas();
}

// ------------------------ DOM text size, color, cords and direction handleres --------------------------- //

function onIncreaseFontSize() {
    setMemeFontSize('inc');
    renderCanvas();
}

function onDecreaseFontSize() {
    setMemeFontSize('dec');
    renderCanvas();
}

function onSetLineHigher() {
    setLineCords('up');
    renderCanvas();
}

function onSetLineLower() {
    setLineCords('down');
    renderCanvas();
}

function onSetDirectionLTR() {
    setLineDirection('left')
    renderCanvas();
}
function onSetDirectionRTL() {
    setLineDirection('right')
    renderCanvas();
}
function onSetDirectionCenter() {
    setLineDirection('center')
    renderCanvas();
}

function OnStrokeColorSelect(el) {
    setStrokeColor(el.value);
    renderCanvas();
}

function OnFontColorSelect(el) {
    setFontColor(el.value);
    renderCanvas();
}



