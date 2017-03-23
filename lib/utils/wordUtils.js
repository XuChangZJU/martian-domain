/**
 * Created by Administrator on 2016/4/27.
 */
"use strict";

var WORD_LENGTH = 16;

function generateEncryptWord() {
    var encryptWord = [];
    for (var i = 0; i < WORD_LENGTH; i++) {
        var word = parseInt((Math.random() * 256).toFixed());
        encryptWord.push(word);
    }

    return encryptWord;
}

// todo
function calculateKeyWord(encryptWord, lockWord) {
    var keyWord = [];
    for (var i = 0; i < WORD_LENGTH; i++) {
        var word = parseInt((Math.random() * 256).toFixed());
        keyWord.push(word);
    }

    return keyWord;
}

module.exports = {
    generateEncryptWord: generateEncryptWord,
    calculateKeyWord: calculateKeyWord
};