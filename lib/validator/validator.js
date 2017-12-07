/**
 * Created by Administrator on 2016/6/23.
 */

'use strict';

function isMobile(text) {
    return text && typeof text === "string" && /^1[3|4|5|6|7|8|9]\d{9}$/.test(text);
}

function isPassword(text) {
    return text && typeof text === "string" && /^[a-zA-Z0-9!.@]{8,16}$/.test(text);
}

function isCaptcha(text) {
    return text && typeof text === "string" && /^\d{4}$/.test(text);
}

function isIdCardNumber(text) {
    return typeof text === "string" && text.length === 18 && /^\d{6}(18|19|20)\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(text);
}

// todo untested
function isUrl(str) {
    // return ((str) &&  (typeof str === "string") && !!str.match(/(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g));
    var regex = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
    return typeof str === "string" && regex.test(str);
}

function isNickname(str) {
    return str && typeof str === "string" && str.trim().length > 0 && str.length < 16;
}

module.exports = {
    isMobile: isMobile,
    isCaptcha: isCaptcha,
    isPassword: isPassword,
    isIdCardNumber: isIdCardNumber,
    isUrl: isUrl,
    isNickname: isNickname
};