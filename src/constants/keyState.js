'use strict'

module.exports = {
	stateExpired: -1,							// 钥匙正常过期
	stateTempKeyExpiredWithoutUse: -2,			// 临时钥匙未使用就过期
	stateTempKeyExpiredWithUserConfirm: -3,		// 临时钥匙过期后用户主动确认
	stateTempKeyExpiredWithoutUserConfirm: -4,	// 临时钥匙过期后用户未主动确认（通过其它途径确认）
	stateVisible: 0,							// 边界值，小于这个值的钥匙不应该被用户看到
	stateDisabled: 2,							// 主钥匙被禁用
	stateTempKeyFailToSubmitLog: 4,			//  （客户端ONLY）临时钥匙提交使用日志失败
	stateLent: 5,								// 主钥匙被借记
	stateWorkable: 10,							// 边界值，小于这个值的钥匙不可以使用
	stateActive: 11,							// 钥匙可用
	stateTempKeyUsed: 12,						// 临时钥匙被使用,确认离开前
	stateTempKeyUsedAndOvertime: 13				// 临时钥匙使用后过期,未确认离开
};