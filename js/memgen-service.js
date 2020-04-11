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
    lines: [
        {
            text: '',
            size: 80,
            align: 'left',
            color: 'white',
            stroke: 'black'
        }
    ]
}

// ---------------------- Gallery control -------------------------//

// function createImages() {
//     var imgs = [];
//     for (var i = 0; i < 19; i++) {
//         const img = _createImage(i);
//         imgs.push(img);
//     }
//     gImgs = imgs;
// }

// function _createImage(id) {
//     return {
//         id: id,
//         url: `img/memes/${id}.jpg`,
//         keywords: []
//     }
// }

// ---------------------- gMeme setters ------------------------ //

function setCurrentMemeImg(imgId) {
    gMeme.selectedImgId = imgId;
    getCrurentImgUrl(imgId);
}

function setMemeText(txt) {
    gMeme.lines[0].text = txt;
}

// ---------------------- gMeme getters ------------------------ //

function getCrurentImgUrl(imgId) {
    return gElCurrentImgUrl = gImgs.find(({ id }) => id === imgId).url;
}

function getMemeText() {
    return gMeme.lines[0].text;
}

function getFontSize() {
    return gMeme.lines[0].size;
}

function getImgs() {
    return gImgs;
}






















