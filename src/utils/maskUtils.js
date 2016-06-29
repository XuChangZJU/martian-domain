/**
 * Created by Administrator on 2016/5/17.
 */
"use strict";

function maskIdCardNumber(idCardNumber) {
    if(!idCardNumber instanceof String) {
        throw new Error("身份证号码必须是String类型");
    }
    return idCardNumber[0]+'****************'+idCardNumber[idCardNumber.length-1];
    // todo 未测试，待优化
    /*
     let begin = idCardNumber.slice(0, 4);
     let end = idCardNumber.slice(idCardNumber.length -2, 2);
     for(let i = 0; i < idCardNumber.length -6; i ++) {
     begin = begin.concat("*");
     }
     return begin.concat(end);*/
}

function maskMobile(mobile) {
    let begin = mobile.slice(0, 3);
    let end = mobile.slice(7, 11);
    return begin.concat("****").concat(end);
}


function maskName(name) {
    // todo
    return name;
}





module.exports = {
    maskIdCardNumber,
    maskMobile,
    maskName
}
