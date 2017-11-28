"use strict";

/**
 * Created by Administrator on 2017/11/28.
 */

/*
 { id: 2, name: '星标组', count: 2 },
 { id: 100, name: 'xm', count: 3 },
 { id: 101, name: 'ad', count: 31 },
 { id: 102, name: '中介', count: 13 },
 { id: 103, name: '口碑', count: 13 },
 { id: 104, name: '成功案例', count: 5 },
 { id: 105, name: '微博', count: 7 },
 { id: 106, name: '共享单车', count: 1 },
 { id: 107, name: '出租&转租', count: 2 },
 { id: 108, name: '豆瓣广告', count: 2 },
 { id: 109, name: '电话', count: 12 },
 { id: 110, name: '小区', count: 0 },
 { id: 111, name: '豆瓣小组', count: 7 },
 { id: 112, name: '房东', count: 1 },
 { id: 113, name: '头条', count: 1 },
 { id: 115, name: 'ycq', count: 1 } ] }
 { id: 116, name: '广点通', count: 1 } ] }
 { id: 117, name: '官网', count: 1 } ] }
 */
var userSource_Tag_Map = {
    qrscene_douban: 111,
    qrscene_danche: 106,
    qrscene_toutiao: 113,
    qrscene_guangdiantong: 116,
    qrscene_backup2: 117,
    lorder: 112,
    agent: 102
};

var groupTags = {};
groupTags.豆瓣小组 = "qrscene_douban";
groupTags.共享单车 = "qrscene_danche";
groupTags.头条 = "qrscene_toutiao";
groupTags.广点通 = "qrscene_guangdiantong";
groupTags.官网 = "qrscene_backup2";
groupTags.房东 = "lorder";
groupTags.中介 = "agent";

var userSourceDecorder = function userSourceDecorder(tagId) {
    switch (tagId) {
        case 111:
            return "豆瓣小组";
        case 106:
            return "共享单车";
        case 113:
            return "头条";
        case 116:
            return "广点通";
        case 117:
            return "官网";
        case 112:
            return "房东";
        case 102:
            return "中介";
    }
};
module.exports = {
    userSource_Tag_Map: userSource_Tag_Map,
    userSourceDecorder: userSourceDecorder,
    groupTags: groupTags
};