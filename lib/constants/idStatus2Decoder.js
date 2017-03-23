/**
 * Created by Administrator on 2016/8/5.
 */
"use strict";

const idStatus = require("./identificationStatus2");
const decoder = {
    [idStatus.empty]: "未验证",
    [idStatus.verifying1]: "验证身份信息中",
    [idStatus.verifying2]: "验证身份图像信息中",
    [idStatus.verifying3]: "验证身份信息中（图像已上传）",
    [idStatus.uncertain1]: "姓名证件号码未确定",
    [idStatus.uncertain2]: "身份证图像识别未确定",
    [idStatus.uncertain3]: "证件号码与图像均未确定",
    [idStatus.illegal]: "实名认证未获通过",
    [idStatus.illegal2]: "实名认证未获通过（图像已上传）",
    [idStatus.illegal3]: "该实名信息已被使用",
    [idStatus.imageAcceptable]: "实名认证已通过（图像未上传）",
    [idStatus.imageReceived]: "身份证图像已上传",
    [idStatus.imageIllegal]: "身份证图像验证失败",
    [idStatus.legal]: "身份认证已经完成"
};

function decode(state) {
    return decoder[state];
}

module.exports = {
    decode
};