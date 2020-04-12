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
    document.getElementById('0').value = '';
    document.getElementById('1').value = '';
    document.getElementById('stroke-color').value = 'black';
    document.getElementById('font-color').value = 'white';

}

function getCurrentElInput() {
    return document.getElementById(getSelectedLine().toString());
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

function onTypeText(elInput) {
    setSelectedLine(elInput.id);
    const txt = elInput.value;
    setMemeText(txt);
    gCtx.drawImage(elImg, 0, 0, gCanvas.width, gCanvas.height);
    textToCanvas();
}

function textToCanvas() {
    for (var i = 0; i < 2; i++) {
        gCtx.lineWidth = '3';
        gCtx.textAlign = getLineDirection(i);
        gCtx.fillStyle = getFontColor(i);
        gCtx.strokeStyle = getStrokeColor(i);
        gCtx.font = `bold ${getFontSize(i)}px Impact`;
        gCtx.fillText(getMemeText(i), gCanvas.width / 2, getLineCords(i) - 470);
        gCtx.strokeText(getMemeText(i), gCanvas.width / 2, getLineCords(i) - 470);
    }
}

function onAddTextInput() {
    if (!wasSecondLineCreated()) {
        setSecondLineCreated();
        const srtHtml = `<input type="text" class="meme-text" name="meme-text" id="1" oninput="onTypeText(this)" onfocus="onFocusChange(this)">`;
        const secondInput = document.querySelector('.input2');
        secondInput.innerHTML = srtHtml;
    }
}

function onFocusChange(elInput) {
    setSelectedLine(elInput.id);
}

function onFocusSwap() {
    if (wasSecondLineCreated()) {
        const input1 = document.getElementById('0');
        const input2 = document.getElementById('1');
        (getSelectedLine() === 0) ? input2.focus() : input1.focus();
    }
}

function onDeleteTextLine() {
    setMemeText('', getSelectedLine());
    getCurrentElInput().value = '';
    onTypeText(getCurrentElInput());
}

// ------------------------ DOM text size, color, cords and direction handleres --------------------------- //

function onIncreaseFontSize() {
    setMemeFontSize('inc');
    onTypeText(getCurrentElInput());
}

function onDecreaseFontSize() {
    setMemeFontSize('dec');
    onTypeText(getCurrentElInput());
}

function onSetLineHigher() {
    setLineCords('up');
    onTypeText(getCurrentElInput());
}

function onSetLineLower() {
    setLineCords('down');
    onTypeText(getCurrentElInput());
}

function onSetDirectionLTR() {
    setLineDirection('left')
    onTypeText(getCurrentElInput());
}
function onSetDirectionRTL() {
    setLineDirection('right')
    onTypeText(getCurrentElInput());
}
function onSetDirectionCenter() {
    setLineDirection('center')
    onTypeText(getCurrentElInput());
}

function OnStrokeColorSelect(el) {
    setStrokeColor(el.value);
}

function OnFontColorSelect(el) {
    setFontColor(el.value);
}
