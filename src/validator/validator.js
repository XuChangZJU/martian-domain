/**
 * Created by Administrator on 2016/6/23.
 */
"use strict";

'use strict';
function isMobile(text) {
    return ( (text) && (typeof text === "string") && ((/^1[3|4|5|7|8]\d{9}$/.test(text))) );
}

function isPassword(text) {
    return ((text) && (typeof text === "string") && (text.length>=8))

}

function isCaptcha(text) {
    return ((text) && (typeof text === "string") && (/^\d{4}$/.test(text)))
}

function isIdCardNumber(text) {
    return ((text)  && (typeof text === "string") && (/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(text)))
}

// todo untested
function isUrl(str) {
    return ((str) &&  (typeof str === "string") && !!str.match(/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g));
}

function isNickname(str) {
    return str && typeof str === "string" && str.trim().length > 0 && str.length < 16;
}

module.exports = {
    isMobile,
    isCaptcha,
    isPassword,
    isIdCardNumber,
    isUrl,
    isNickname
};