/**
 * Created by Administrator on 2018/9/14.
 */
const type = {
    lord: 1,
    tenant: 2,
    tenantShare: 3,
};

const decodeType = (t) =>  {
    const STRING = {
        [type.lord]: '房东负责',
        [type.tenant]: '租客负责',
        [type.tenantShare]: '租客分摊',
    };

    return STRING[t];
};

const state = {
    init: 1,
    unpaid: 2,
    paid: 3,
};

const decodeState = (s) => {
    const STRING = {
        [state.init]: '初始',
        [state.unpaid]: '未支付',
        [state.paid]: '已支付完成',
    };

    return STRING[s];
};

module.exports = {
    type,
    decodeType,
    state,
    decodeState,
};
