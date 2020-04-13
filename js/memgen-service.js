'use strict'

// ------------------------ Model globals --------------------------- //

var gImgs = [
    { id: 1, url: 'img/memes/1.jpg', keywords: ['trump', 'speech'] },
    { id: 2, url: 'img/memes/2.jpg', keywords: ['dog', 'love', 'animal'] },
    { id: 3, url: 'img/memes/3.jpg', keywords: ['sleep', 'baby', 'dog'] },
    { id: 4, url: 'img/memes/4.jpg', keywords: ['sleep', 'cat', 'computer'] },
    { id: 5, url: 'img/memes/5.jpg', keywords: ['win', 'baby'] },
    { id: 6, url: 'img/memes/6.jpg', keywords: ['explain'] },
    { id: 7, url: 'img/memes/7.jpg', keywords: ['baby', 'shock'] },
    { id: 8, url: 'img/memes/8.jpg', keywords: ['happy', 'artist'] },
    { id: 9, url: 'img/memes/9.jpg', keywords: ['laugh', 'baby'] },
    { id: 10, url: 'img/memes/10.jpg', keywords: ['laugh', 'president', 'obama'] }
]


var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    isSecondLineCreated: false,
    lines: [
        {
            text: '',
            size: 50,
            align: 'center',
            color: 'white',
            stroke: 'black',
            cordsY: 600,
        },
        {
            text: '',
            size: 50,
            align: 'center',
            color: 'white',
            stroke: 'black',
            cordsY: 990,
        },
    ]
}

function resetGMeme() {
    gMeme = {
        selectedImgId: 0,
        selectedLineIdx: 0,
        isSecondLineCreated: false,
        lines: [
            {
                text: '',
                size: 50,
                align: 'center',
                color: 'white',
                stroke: 'black',
                cordsY: 600,
            },
            {
                text: '',
                size: 50,
                align: 'center',
                color: 'white',
                stroke: 'black',
                cordsY: 990,
            },
        ]
    }
}


// ---------------------- gMeme setters -------------------------- //

function setCurrentMemeImg(imgId) {
    gMeme.selectedImgId = imgId;
    getCrurentImgUrl(imgId);
}

function setMemeText(txt) {
    gMeme.lines[gMeme.selectedLineIdx].text = txt;
}

function setMemeFontSize(indDec) {
    (indDec === 'inc') ? gMeme.lines[gMeme.selectedLineIdx].size += 10 : gMeme.lines[gMeme.selectedLineIdx].size -= 10;
}

function setLineCords(upOrDown) {
    const currLine = gMeme.selectedLineIdx;
    var temp = gMeme.lines[currLine].cordsY;
    (upOrDown === 'up') ? temp -= 20 : temp += 20;
    if ((temp <= 1060) && (temp >= 520)) {
        gMeme.lines[currLine].cordsY = temp;
    } 
}

function setSecondLineCreated() {
    gMeme.isSecondLineCreated = true;
    setSelectedLine();
}

function setLineDirection(direction) {
    gMeme.lines[gMeme.selectedLineIdx].align = direction;
} 

function setSelectedLine() {
    (gMeme.selectedLineIdx === 0) ? gMeme.selectedLineIdx = 1 : gMeme.selectedLineIdx = 0;
}

function setFontColor(val) {
    gMeme.lines[gMeme.selectedLineIdx].color = val;
}

function setStrokeColor(val) {
    gMeme.lines[gMeme.selectedLineIdx].stroke = val;
}

// ---------------------- gMeme getters ------------------------ //

function getCrurentImgUrl(imgId) {
    return gElCurrentImgUrl = gImgs.find(({ id }) => id === imgId).url;
}

function getImgs() {
    return gImgs;
}

function getLines() {
    return gMeme.lines;
}

function getSelectedLine() {
    return gMeme.selectedLineIdx;
}

function wasSecondLineCreated() {
    return gMeme.isSecondLineCreated;
}

function getMemeText(lineIdx) {
    return gMeme.lines[lineIdx].text;
}























