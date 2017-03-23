/**
 * Created by Administrator on 2016/8/5.
 */
"use strict";

var _decoder;

var idStatus = require("./identificationStatus2");
var decoder = (_decoder = {}, _decoder[idStatus.empty] = "未验证", _decoder[idStatus.verifying1] = "验证身份信息中", _decoder[idStatus.verifying2] = "验证身份图像信息中", _decoder[idStatus.verifying3] = "验证身份信息中", _decoder[idStatus.uncertain1] = "验证身份信息中", _decoder[idStatus.uncertain2] = "验证身份图像信息中", _decoder[idStatus.uncertain3] = "验证身份信息中", _decoder[idStatus.illegal] = "实名认证未获通过", _decoder[idStatus.illegal2] = "实名认证未获通过", _decoder[idStatus.illegal3] = "该实名信息已被使用", _decoder[idStatus.imageAcceptable] = "实名认证已通过", _decoder[idStatus.imageReceived] = "身份证图像已上传", _decoder[idStatus.imageIllegal] = "身份证图像验证失败", _decoder[idStatus.legal] = "身份认证已经完成", _decoder);

function decode(state) {
    return decoder[state];
}

module.exports = {
    decode: decode
};