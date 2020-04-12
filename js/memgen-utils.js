'use strict'

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chooseRandomKeywords(size = 2) {
    var keywordsSource = gKeyWords;
    var chosenKeywords = [];
    while (size > 0) {
        size--;
        chosenKeywords.push(words[Math.floor(Math.random() * words.length)]);
    }
    return txt;
}


