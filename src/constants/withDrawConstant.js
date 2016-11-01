/**
 * Created by Administrator on 2016/11/1.
 */
"use strict";

const origin = {
    alipay: "alipay",
};

const originDecoder = {
    [origin.alipay]: "支付宝",
}

function decodeOrigin(s) {
    return originDecoder[s];
}

module.exports = {
    origin,
    decodeOrigin
};
