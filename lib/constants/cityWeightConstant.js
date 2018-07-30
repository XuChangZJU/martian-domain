/**
 * Created by root on 18-2-8.
 */
"use strict";

var cityAverageLevel = {
    firstTierCity: 1000,
    secondTierCity: 800,
    thirdTierCity: 500,
    forthTierCity: 0,
    fifthTierCity: 0
};

var First_Tier_Cities = ["北京", "上海", "广州", "深圳", "成都", "杭州", "武汉", "重庆", "南京", "天津", "苏州", "西安", "长沙", "沈阳", "青岛", "郑州", "大连", "东莞", "宁波"];

var Second_Tier_Cities = ["厦门", "福州", "无锡", "合肥", "昆明", "哈尔滨", "济南", "佛山", "长春", "温州", "石家庄", "南宁", "常州", "泉州", "南昌", "贵阳", "太原", "烟台", "嘉兴", "南通", "金华", "珠海", "惠州", "徐州", "海口", "乌鲁木齐", "绍兴", "中山", "台州", "兰州"];

var Third_Tier_Cities = ["潍坊", "保定", "镇江", "扬州", "桂林", "唐山", "三亚", "湖州", "呼和浩特", "廊坊", "洛阳", "威海", "盐城", "临沂", "江门", "汕头", "泰州", "漳州", "邯郸", "济宁", "芜湖", "淄博", "银川", "柳州", "绵阳", "湛江", "鞍山", "赣州", "大庆", "宜昌", "包头", "咸阳", "秦皇岛", "株洲", "莆田", "吉林", "淮安", "肇庆", "宁德", "衡阳", "南平", "连云港", "丹东", "丽江", "揭阳", "延边", "舟山", "九江", "龙岩", "沧州", "抚顺", "襄阳", "上饶", "营口", "三明", "蚌埠", "丽水", "岳阳", "清远", "荆州", "泰安", "衢州", "盘锦", "东营", "南阳", "马鞍山", "南充", "西宁", "孝感", "齐齐哈尔"];

var Forth_Tier_Cities = ["乐山", "湘潭", "遵义", "宿迁", "新乡", "信阳", "滁州", "锦州", "潮州", "黄冈", "开封", "德阳", "德州", "梅州", "鄂尔多斯", "邢台", "茂名", "大理", "韶关", "商丘", "安庆", "黄石", "六安", "玉林", "宜春", "北海", "牡丹江", "张家口", "梧州", "日照", "咸宁", "常德", "佳木斯", "红河", "黔东南", "阳江", "晋中", "渭南", "呼伦贝尔", "恩施", "河源", "郴州", "阜阳", "聊城", "大同", "宝鸡", "许昌", "赤峰", "运城", "安阳", "临汾", "宣城", "曲靖", "西双版纳", "邵阳", "葫芦岛", "平顶山", "辽阳", "菏泽", "本溪", "驻马店", "汕尾", "焦作", "黄山", "怀化", "四平", "榆林", "十堰", "宜宾", "滨州", "抚州", "淮南", "周口", "黔南", "泸州", "玉溪", "眉山", "通化", "宿州", "枣庄", "内江", "遂宁", "吉安", "通辽", "景德镇", "阜新", "雅安", "铁岭", "承德", "娄底"];

var Fifth_Tier_Cities = ["克拉玛依", "长治", "永州", "绥化", "巴音郭楞", "拉萨", "云浮", "益阳", "百色", "资阳", "荆门", "松原", "凉山", "达州", "伊犁", "广安", "自贡", "汉中", "朝阳", "漯河", "钦州", "贵港", "安顺", "鄂州", "广元", "河池", "鹰潭", "乌兰察布", "铜陵", "昌吉", "衡水", "黔西南", "濮阳", "锡林郭勒", "巴彦淖尔", "鸡西", "贺州", "防城港", "兴安盟", "白山", "三门峡", "忻州", "双鸭山", "楚雄", "新余", "来宾", "淮北", "亳州", "湘西", "吕梁", "攀枝花", "晋城", "延安", "毕节", "张家界", "酒泉", "崇左", "萍乡", "乌海", "伊春", "六盘水", "随州", "德宏", "池州", "黑河", "哈密", "文山", "阿坝", "天水", "辽源", "张掖", "铜仁", "鹤壁", "儋州", "保山", "安康", "白城", "巴中", "普洱", "鹤岗", "莱芜", "阳泉", "甘孜", "嘉峪关", "白银", "临沧", "商洛", "阿克苏", "海西", "大兴安岭", "七台河", "朔州", "铜川", "定西", "迪庆", "日喀则", "庆阳", "昭通", "喀什", "怒江", "海东", "阿勒泰", "平凉", "石嘴山", "武威", "阿拉善盟", "塔城", "林芝", "金昌", "吴忠", "中卫", "陇南", "山南", "吐鲁番", "博尔塔拉", "临夏", "固原", "甘南", "昌都", "阿里", "海南", "和田", "克孜勒苏", "海北", "那曲", "玉树", "黄南", "果洛", "三沙"];

var getThresholdPrc = function getThresholdPrc(city) {
    if (First_Tier_Cities.includes(city)) {
        return cityAverageLevel.firstTierCity;
    } else if (Second_Tier_Cities.includes(city)) {
        return cityAverageLevel.secondTierCity;
    } else if (Third_Tier_Cities.includes(city)) {
        return cityAverageLevel.thirdTierCity;
    } else if (Forth_Tier_Cities.includes(city)) {
        return cityAverageLevel.forthTierCity;
    } else if (Fifth_Tier_Cities.includes(city)) {
        return cityAverageLevel.fifthTierCity;
    }
    return 0;
    // throw new Error(`未知城市${city}`);
};

module.exports = {
    cityAverageLevel: cityAverageLevel,
    First_Tier_Cities: First_Tier_Cities,
    Second_Tier_Cities: Second_Tier_Cities,
    Third_Tier_Cities: Third_Tier_Cities,
    Forth_Tier_Cities: Forth_Tier_Cities,
    Fifth_Tier_Cities: Fifth_Tier_Cities,
    getThresholdPrc: getThresholdPrc
};