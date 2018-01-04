/**
 * Created by Administrator on 2016/11/1.
 */
"use strict";
const LeaseConstants = require("./leaseConstant");
const VirusTypes = [
    {
        id: 1,
        name: "房东的私心",
        describe: "房东对自己的租客发出，被感染者无法看到一定范围内比当前房屋更便宜的房子",
        leaseStateMtx: [LeaseConstants.state.shadow, LeaseConstants.state.implementation, LeaseConstants.state.waitingForHouseOnline, LeaseConstants.state.incomplete]
    },
    {
        id: 2,
        name: "屌丝的自救",
        describe: "屏蔽指定房东"
    },
    {
        id: 3,
        name: "让指定房东看到钥匙开门记录",
        describe: "房东可以看到钥匙的开门记录"
    },
    {
        id: 4,
        name: "允许房东修改房屋敏感信息",
        describe: "允许房东增加单间、整改合租、改户型、解绑锁这几种行为"
    },
    {
        id: 5,
        name: "为指定用户掩盖信用信息tag",
        describe: "为指定用户掩盖信用信息tag",
        tagHideMatrix: {
            "芝麻信用分": "750",
            "风险评估": "无风险记录",
            "中介检测": "非房产中介",
            "租房信用分": "租房信用良好",
            "score": "95"
        }
    }
];

module.exports = VirusTypes;
