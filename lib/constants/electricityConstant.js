'use strict';

/**
 * Created by Administrator on 2018/9/14.
 */
var type = {
    lord: 1,
    tenant: 2,
    tenantShare: 3
};

var decodeType = function decodeType(t) {
    var _STRING;

    var STRING = (_STRING = {}, _STRING[type.lord] = '房东负责', _STRING[type.tenant] = '租客负责', _STRING[type.tenantShare] = '租客分摊', _STRING);

    return STRING[t];
};

var state = {
    init: 1,
    unpaid: 2,
    paid: 3
};

var decodeState = function decodeState(s) {
    var _STRING2;

    var STRING = (_STRING2 = {}, _STRING2[state.init] = '初始', _STRING2[state.unpaid] = '未支付', _STRING2[state.paid] = '已支付完成', _STRING2);

    return STRING[s];
};

module.exports = {
    type: type,
    decodeType: decodeType,
    state: state,
    decodeState: decodeState
};