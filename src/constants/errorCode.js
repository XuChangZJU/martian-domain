'use strict';


module.exports = {
	errorUndefined: {code: 999, message: "未定义的错误"},
	errorInternal: {code: 998, message: "服务器内部错误"},
	errorUnexistedApi: {code: 997, message: "请求了不存在的接口"},
	errorUncompletedApi: {code:996, message: "请求了尚未实现的接口"},
	errorUserNotLoggedIn: {code: 995, message: "用户没有登录"},
	errorInvalidAccessToken: {code: 994, message: "用户使用的访问令牌非法"},
	errorExpiredAccessToken: {code: 993, message: "用户使用的访问令牌已经过期"},
	errorSuspiciousAccessToken: {code: 992, message: "可疑的访问令牌"},
	errorNoAccessRight: {code: 991, message: "该用户没有访问此数据的权限"},
	errorUnexistedApiMethod: {code: 990, message: "请求了不支持的http方法"},
	errorDataFormat:{code:989,message:'非法的数据类型'},
	errorIllegalParam:{code:988,message:'非法的数据参数'},
	errorIllegalBodyInfo:{code:987,message:'http请求信息不完整'},
	errorIllegalFileUrl:{code:986,message:'非法的URL'},
	errorInvalidAccessTokenOrRefreshToken: {code:985, message:'访问令牌或刷新令牌非法'},

	//User相关error信息
	errorMobileUndefined: {code: 699, message: "手机号不能为空"},
	errorIllegalMobile: {code: 698, message: "非法的手机号"},
	errorNicknameUndefined: {code: 697, message: "昵称不能为空"},
	errorPasswordUndefined: {code: 696, message: "密码不能为空"},
	errorMobileDuplicated: {code: 695, message: "手机号已经存在"},
	errorMobileUnexisted: {code: 694, message: "账户不存在,请更换"},
	errorPasswordUnsatisfied: {code: 693, message: "密码不匹配"},
	errorIllegalRealName:{code:692,message:'姓名和身份证号不匹配'},
	errorNoRealNameInfo:{code:691,message:'请先填写相关身份信息'},
	errorNoRealNameInfoToVerify:{code:689,message:'没有身份验证信息可供管理员审核'},
	errorPasswordNotMatched:{code:688,message:'当前密码错误，请重新输入'},
	errorNoMatchedCaptcha:{code:687,message:'没有和该手机号对应的验证码'},
	errorCaptchaIsExpired:{code:686,message:'验证码已过期'},
	errorCaptchaIsWrong:{code:685,message:'验证码有误'},
	errorVerificationTimeOut:{code:684,message:'验证超时，请重新验证'},
	errorSameMobile:{code:683,message:'该手机号与当前使用的手机号相同'},
	errorUserHasBeenDisabled:{code: 682, message: "用户已经被禁用，原因是"},
	errorIdCardNumberUnMatched:{code: 681, message: '身份证号输入错误，请重新输入'},



    //key相关error信息
	errorNoMatchedKeyState: {code: 603, message: "没有匹配的钥匙状态"},
	errorThisKeyCannotDoThisAction: {code: 602, message: "该类型钥匙不能执行此操作"},
	errorNoMatchedLock4Key: {code: 601, message: "没有与钥匙相对应的锁"},
	errorKeyOutDate: {code: 600, message: "没有相应的钥匙"},
	errorLockUndefined: {code: 599, message: "锁主键不能为空"},
	errorLockNotExist: {code: 598, message: "锁不存在"},
	errorAlreadyUsed: {code: 597, message: "锁已经被使用"},
	errorIllegalLock: {code: 596, message: "非法的锁主键"},
	errorRegisterMobile: {code: 595, message: "该用户未注册"},
	errorKeyNotBelongToUser: {code: 594, message: "该钥匙不属于当前用户"},
	errorKeyUndefined: {code: 593, message: "钥匙主键不能为空"},
	errorIllegalKey: {code: 592, message: "非法的钥匙主键"},
	errorNotLessToday: {code: 591, message: "有效时间不能小于当前时间"},
	errorNotGreaterDebitKeyTime: {code: 590, message: "有效时间不能大于原钥匙的有效时间"},
	errorNotUniqueMobile: {code: 589, message: "该号码不是唯一的"},
	errorCanNotShareKeyToYourself: {code: 588, message: "您不能把钥匙分享给自己"},
	errorCurrentUserNotAccessToData: {code: 587, message: "当前用户没有操作此数据的权限"},
	errorKeyNotExist: {code: 586, message: "钥匙不存在"},
	errorMasterKeyNotDeleted: {code: 585, message: "主钥匙不能被删除"},
	errorShareKeyCountReachLimit: {code: 584, message: "分享钥匙数目不能超过"},
	errorKeyIsExpired:{code:583,message:'您的钥匙已过期'},
	errorLockWordUndefined: {code: 582, message: "钥匙原语不能为空"},
	errorIllegalLockWord: {code: 572, message: "非法的钥匙原语"},
	errorGetKeyWord: {code: 571, message: "获取钥匙原语出错"},
	errorWordTypeUndefined: {code: 581, message: "钥匙原语类型不能为空"},
	errorKeyInfoUndefined: {code: 580, message: "钥匙不能为空"},
	errorTempKeyLockWordIsDisposableKeyWord: {code: 579, message: "临时钥匙原语类型只能是一次性原语类型"},
	errorKeyNotUsed: {code: 578, message: "钥匙不能被使用"},
	errorKeyNameNotUndefined: {code: 577, message: "钥匙名称不能为空"},
	errorKeyAlreadyShare: {code: 576, message: "钥匙已经分享给他了"},

	errorUserHasOtherVisibleKeysOnLock: {code: 560, message: "该用户在该锁上已经有其它的可见钥匙"},
	errorUpdateKeyExpiredTime: {code: 559, message: "该钥匙的过期时间不能被修改"},
	errorKeyAlreadyDebit: {code: 558, message: "该钥匙已经被借记了"},
	errorNoTempKey: {code: 557, message: "该钥匙必须是可以使用的临时钥匙"},
	errorCreditNoGetKeyWord: {code: 556, message: "被借记的钥匙不能获取原语的"},
	
	// 1000 以上是client端自己定义的Error
	errorRunTime: {code: 2000, message: "运行时异常"},
	errorFailToAccessServer: {code: 1999, message: "无法连接到服务器"},
	errorFailToAccessCosServer: {code: 1998, message: "无法连接到COS服务器"},
	errorFromCosServer: {code: 1997, message: "COS服务器返回错误："},
	errorNetUnavailable: {code: 1996, message: "无法连接到网络"},



	createErrorByCode: function (errorCode, msg) {
		var err = new Error(msg || errorCode.message);
		err.code = errorCode.code;
		return err;
	},

	errorNeedAlert: function(errorCode) {
		if(errorCode.code < 700) {
			return true;
		}
		else {
			return false;
		}
	}
};