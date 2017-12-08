/**
 * Created by Administrator on 2016/11/1.
 */
"use strict";

var LeaseConstants = require("./leaseConstant");
var VirusTypes = [{
    id: 1,
    name: "房东的私心",
    describe: "房东对自己的租客发出，被感染者无法看到一定范围内比当前房屋更便宜的房子",
    leaseStateMtx: [LeaseConstants.state.shadow, LeaseConstants.state.waitingForHouseOnline, LeaseConstants.state.incomplete]
}, {
    id: 2,
    name: "屌丝的自救",
    describe: "屏蔽指定房东"
}];

module.exports = VirusTypes;