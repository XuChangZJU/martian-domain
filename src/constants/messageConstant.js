/**
 * Created by Administrator on 2016/8/31.
 */
"use strict";
const weight = require("./messageWeight");
const client = require("./client");

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

module.exports = {
	coreServer: {
		sharedKeyGot: {
			weight: weight.low,
			word: words.share,
			title: "您已获得一把分享钥匙",
			type: "sharedKeyGot",
			entities: ["key"]
		},
		sharedKeyLost: {
			weight: weight.low,
			word: words.share,
			title: "您已失去一把分享钥匙",
			type: "sharedKeyLost",
			entities: ["key"]
		},
		idPassed: {
			weight: weight.high,
			word: words.identify,
			title: "您的身份验证信息已经通过",
			type: "idPassed",
			entities: ["me"]
		},
		idDenied: {
			weight: weight.high,
			word: words.identify,
			title: "您的身份验证信息被拒绝",
			type: "idDenied",
			entities: ["me"]
		},
		sharedKeyEdited: {
			weight: weight.low,
			word: words.key,
			title: "您的分享钥匙被修改",
			type: "sharedKeyEdited",
			entities: ["key"]
		},
		sharedKeyExpired: {
			weight: weight.medium,
			word: words.key,
			title: "您的分享钥匙已经过期",
			type: "sharedKeyExpired",
			entities: ["key"]
		},
		usedTempKeyExpired: {
			weight: weight.high,
			word: words.warning,
			title: "您有需要确认离开的临时钥匙！",
			icon: icons.warning,
			type: "usedTempKeyExpired",
			entities: ["key"]
		},
		unUsedTempKeyExpired: {
			weight: weight.tiny,
			word: words.key,
			title: "您临时钥匙已经失效",
			type: "unUsedTempKeyExpired",
			entities: ["key"]
		},
		debitKeyExtended: {
			weight: weight.medium,
			word: words.key,
			title: "您的借记钥匙的期限已经被延长",
			type: "debitKeyExtended",
			entities: ["key"]
		},
		sharedKeyExtended: {
			weight: weight.medium,
			word: words.key,
			title: "您的分享钥匙的时间已经被延长",
			type: "sharedKeyExtended",
			entities: ["key"]
		},
		debitKeyExpired: {
			weight: weight.tiny,
			word: words.key,
			title: "您的借记钥匙已经归还",
			type: "debitKeyExpired",
			entities: ["key"]
		},
		masterKeyRecoveredFromDebit: {
			weight: weight.tiny,
			word: words.key,
			title: "您的钥匙已经被归还",
			type: "masterKeyRecoveredFromDebit",
			entities: ["key"]
		},
		suspiciousLogIn: {
			weight: weight.top,
			word: words.warning,
			title: "您有一条可疑的登录",
			icon: icons.warning,
			type: "suspiciousLogIn"
		},
		fundsReceived: {
			weight: weight.high,
			word: words.receive,
			title: "您已收到一笔款项",
			icon: icons.money,
			type: "fundsReceived",
			entities: ["account"]
		},
		fundsPayed: {
			weight: weight.high,
			word: words.pay,
			title: "您已支付一笔款项",
			icon: icons.money,
			type: "fundsPayed",
			entities: ["account"]
		}
	},
	rentServer: {
		leaseContracted: {
			weight: weight.top,
			word: words.rent,
			title: "您的租约已被房东同意，请尽快付款",
			icon: icons.happy,
			type: "leaseContracted",
			entities: ["lease"],
			clientId: client.rent
		},
		leaseDenied: {
			weight: weight.high,
			word: words.denied,
			title: "您的租约已被房东拒绝",
			icon: icons.deny,
			type: "leaseDenied",
			entities: ["lease"],
			clientId: client.rent
		},
		leaseOutdated: {
			weight: weight.high,
			word: words.denied,
			title: "您的求租合同已经过期",
			icon: icons.deny,
			type: "leaseOutdated",
			entities: ["lease"],
			clientId: client.rent
		},
		leasePreempted: {
			weight: weight.high,
			word: words.fail,
			title: "您求租的房屋已被别人租下",
			icon: icons.fail,
			type: "leasePreempted",
			entities: ["lease"],
			clientId: client.rent
		},
		orderCreatedToTenant: {
			weight: weight.top,
			word: words.rent,
			title: "您有订单需要支付",
			icon: icons.money,
			type: "orderCreatedToTenant",
			entities: ["order"],
			clientId: client.rent
		},
		orderCreatedToLord: {
			weight: weight.low,
			word: words.rent,
			title: "已为您向您的租客催租",
			icon: icons.money,
			type: "orderCreatedToLord",
			entities: ["leasePay"],
			clientId: client.rent
		},
		fireLineReachedToTenant: {
			weight: weight.top,
			word: words.warning,
			title: "您的订单亟需支付",
			icon: icons.warning,
			type: "fireLineReachedToTenant",
			entities: ["order"],
			clientId: client.rent
		},
		fireLineReachedToLord: {
			weight: weight.low,
			word: words.push,
			title: "您的租客未按时交租，已催",
			icon: icons.money,
			type: "fireLineReachedToLord",
			entities: ["leasePay"],
			clientId: client.rent
		},
		deadlineReachedToTenant: {
			weight: weight.top,
			word: words.violate,
			title: "您已被判定违约！",
			icon: icons.fail,
			type: "deadlineReachedToTenant",
			entities: ["lease"],
			clientId: client.rent
		},
		deadlineReachedToLord: {
			weight: weight.top,
			word: words.violate,
			title: "您的租客已违约！",
			icon: icons.fail,
			type: "deadlineReachedToLord",
			entities: ["lease"],
			clientId: client.rent
		},
		rentalReturned: {
			weight: weight.high,
			word: words.return,
			title: "您的租金已经被退回",
			icon: icons.fail,
			type: "rentalReturned",
			entities: ["order"],
			clientId: client.rent
		},
		depositAvailable: {
			weight: weight.high,
			word: words.return,
			title: "您的押金已经解冻",
			icon: icons.fail,
			type: "depositAvailable",
			entities: ["order"],
			clientId: client.rent
		},
		leaseApplying: {
			weight: weight.high,
			word: words.rent,
			title: "有人求租您的房屋",
			icon: icons.happy,
			type: "leaseApplying",
			entities: ["lease"],
			clientId: client.rent
		},
		leasePayOrderedToTenant: {
			weight: weight.low,
			word: words.rent,
			title: "您已完成合同规定的一次支付",
			icon: icons.money,
			type: "leasePayOrderedToTenant",
			entities: ["leasePay"],
			clientId: client.rent
		},
		leasePayOrderedToLord: {
			weight: weight.medium,
			word: words.rent,
			title: "您收到一笔房租",
			icon: icons.money,
			type: "leasePayOrderedToLord",
			entities: ["leasePay"],
			clientId: client.rent
		},
		houseBeingOnline: {
			weight: weight.high,
			word: words.online,
			title: "您的房屋已经上线",
			icon: icons.happy,
			type: "houseBeingOnline",
			entities: ["house"],
			clientId: client.rent
		},
		houseDenied: {
			weight: weight.high,
			word: words.rent,
			title: "您的房屋被拒绝上线",
			icon: icons.fail,
			type: "houseDenied",
			entities: ["house"],
			clientId: client.rent
		}
	},
}
