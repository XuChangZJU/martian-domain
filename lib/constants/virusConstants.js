/**
 * Created by Administrator on 2016/11/1.
 */
"use strict";

var LeaseConstants = require("./leaseConstant");
var VirusTypes = [{
    id: 1,
    name: "房东的私心",
    describe: "房东对自己的租客发出，被感染者无法看到一定范围内比当前房屋更便宜的房子",
    leaseStateMtx: [LeaseConstants.state.shadow, LeaseConstants.state.implementation, LeaseConstants.state.waitingForHouseOnline, LeaseConstants.state.incomplete]
}, {
    id: 2,
    name: "屌丝的自救",
    describe: "屏蔽指定房东"
}, {
    id: 3,
    name: "让指定房东看到钥匙开门记录",
    describe: "房东可以看到钥匙的开门记录"
}, {
    id: 4,
    name: "允许房东修改房屋敏感信息",
    describe: "允许房东增加单间、整改合租、改户型、解绑锁这几种行为"
}];

module.exports = VirusTypes;