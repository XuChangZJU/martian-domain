"use strict";

/**
 * Created by Administrator on 2017/8/30.
 */

module.exports = {
	agentScoreInit: 80, //系统判定为中介的初始分，同时也是中介基准线
	normalHouseScoreInit: 60, //正常房屋的初始分，同时也是正常房屋的基准线
	disPlayFireLine: 59, //予以展示的房屋的基准线
	agentHouseScoreInit: 0, //中介发布房源的初始分数
	agentInitWeightRatio: 0.5, //   码天判断为中介的用户行为初始权重比率（为正常用户的0.5）
	normalUserInitWeight: 1, //   码天判断为正常用户的行为初始权重
	rootUserInitWeight: 50, //   码天管理员的行为初始权重
	maxWeightOfImpeach: 50 //   用户检举行为的最大权重(该值是为了中和类似“已出租”类型的举报，该种举报所有用户都拥有最大权重)
};