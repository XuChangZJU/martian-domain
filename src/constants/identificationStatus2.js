/**
 * Created by Administrator on 2016/5/17.
 */
"use strict";

module.exports = {
    empty: 0,               // 未验证
    verifying: 1,           // 验证中（程序正在验证）
    uncertain1: 10,         // 姓名证件号验证未确定
    uncertain2: 20,         //  身份证图像识别未确定
    uncertain3: 30,         // 两者皆未确定

    illegal: 60,           // 姓名证件号码未通过
    imageAcceptable: 70,     // 姓名证件号码验证已通过，等待图像上传
    imageReceived: 80,      // 图像已上传
    legal: 100              // 两者皆通过
};
