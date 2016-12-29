/**
 * Created by Administrator on 2016/5/17.
 */
"use strict";

function maskIdCard(idCardNumber) {
    if(!idCardNumber instanceof String) {
        throw new Error("身份证号码必须是String类型");
    }
    let begin = idCardNumber.slice(0, 4);
    let end = idCardNumber.slice(idCardNumber.length - 4, 4);
    for(let i = 0; i < idCardNumber.length - 8; i ++) {
        begin = begin.concat("*");
    }
    return begin.concat(end);
}

function maskMobile(mobile) {
    let begin = mobile.slice(0, 3);
    let end = mobile.slice(7, 11);
    return begin.concat("****").concat(end);
}


function maskName(name) {
    return name.slice(0, name.length - 1).concat("*");
}





module.exports = {
    maskIdCard,
    maskMobile,
    maskName
}
