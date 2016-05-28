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







module.exports = {
    maskIdCardNumber
}
