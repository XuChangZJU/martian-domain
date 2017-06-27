/**
 * Created by Administrator on 2017/5/18.
 */
const state = require('./leaseState');

const applyType = {
    offLease: 3,
    endLease: 5,
};

const leaseApplyState = {
    init: 7,
    contracted: 8,
    denied: 9,
};

const treatment = {
    personal: 1,    //  影子租约，自己处理
    platform: 2,    //  影子租约，委托平台处理
    general: 3      //  正常生成的租约
};

const decode = require('./leaseStateDecoder');

module.exports = {
    state,
    applyType,
    decode,
    treatment,
    leaseApplyState
};
