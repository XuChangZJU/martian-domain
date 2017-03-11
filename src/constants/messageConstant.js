/**
 * Created by Administrator on 2016/8/31.
 */
"use strict";
const weights = {
    tiny: 10,
    low: 10,
    medium: 20,
    high: 60,
    top: 90
};

const icons = {
    warning: {
        group: "core",
        name: "wrong"
    },
    money: {
        group: "core",
        name: "mobile"
    },
    deny: {
        group: "core",
        name: "mobile"
    },
    fail: {
        group: "core",
        name: "wrong"
    },
    happy: {
        group: "core",
        name: "wrong"
    }
};
const words = {
    share: "享",
    identify: "验",
    pass: "过",
    key: "钥",
    warning: "警",
    receive: "收",
    pay: "付",
    rent: "租",
    denied: "拒",
    fail: "失",
    violate: "违",
    push: "催",
    online: "上",
    return :"退"
};
const states = {
    init: 0,
    sending: 1,
    success: 2,
    failure: 3,
    fatal: 127,
};

const decodeState = (s) => {
    const STATE_TEXT = {
        [states.init]: '未发送',
        [states.sending]: '发送中',
        [states.success]: '发送成功',
        [states.failure]: '发送失败',
        [states.fatal]: '放弃发送',
    };
    return STATE_TEXT[s];
};

module.exports = {
    icons,
    words,
    weights,
    states,
    decodeState,
};
