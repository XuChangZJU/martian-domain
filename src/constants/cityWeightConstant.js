/**
 * Created by root on 18-2-8.
 */
"use strict";

const cityAverageLevel = {
    firstTierCity: 1000,
    secondTierCity: 800,
    thirdTierCity: 500,
    forthTierCity: 0,
    fifthTierCity: 0
};

const First_Tier_Cities = ["北京", "上海", "广州", "深圳", "成都", "杭州", "武汉", "重庆", "南京", "天津", "苏州", "西安", "长沙", "沈阳", "青岛", "郑州", "大连", "东莞", "宁波"];

const Second_Tier_Cities = ["厦门", "福州", "无锡", "合肥", "昆明", "哈尔滨", "济南", "佛山", "长春", "温州", "石家庄", "南宁", "常州", "泉州", "南昌", "贵阳", "太原", "烟台", "嘉兴", "南通", "金华", "珠海", "惠州", "徐州", "海口", "乌鲁木齐", "绍兴", "中山", "台州", "兰州"];

const Third_Tier_Cities = ["潍坊", "保定", "镇江", "扬州", "桂林", "唐山", "三亚", "湖州", "呼和浩特", "廊坊", "洛阳", "威海", "盐城", "临沂", "江门", "汕头", "泰州", "漳州", "邯郸", "济宁", "芜湖", "淄博", "银川", "柳州", "绵阳", "湛江", "鞍山", "赣州", "大庆", "宜昌", "包头", "咸阳", "秦皇岛", "株洲", "莆田", "吉林", "淮安", "肇庆", "宁德", "衡阳", "南平", "连云港", "丹东", "丽江", "揭阳", "延边朝鲜族自治州", "舟山", "九江", "龙岩", "沧州", "抚顺", "襄阳", "上饶", "营口", "三明", "蚌埠", "丽水", "岳阳", "清远", "荆州", "泰安", "衢州", "盘锦", "东营", "南阳", "马鞍山", "南充", "西宁", "孝感", "齐齐哈尔"];

const Forth_Tier_Cities = ["乐山", "湘潭", "遵义", "宿迁", "新乡", "信阳", "滁州", "锦州", "潮州", "黄冈", "开封", "德阳", "德州", "梅州", "鄂尔多斯", "邢台", "茂名", "大理白族自治州", "韶关", "商丘", "安庆", "黄石", "六安", "玉林", "宜春", "北海", "牡丹江", "张家口", "梧州", "日照", "咸宁", "常德", "佳木斯", "红河哈尼族彝族自治州", "黔东南苗族侗族自治州", "阳江", "晋中", "渭南", "呼伦贝尔", "恩施土家族苗族自治州", "河源", "郴州", "阜阳", "聊城", "大同", "宝鸡", "许昌", "赤峰", "运城", "安阳", "临汾", "宣城", "曲靖", "西双版纳傣族自治州", "邵阳", "葫芦岛", "平顶山", "辽阳", "菏泽", "本溪", "驻马店", "汕尾", "焦作", "黄山", "怀化", "四平", "榆林", "十堰", "宜宾", "滨州", "抚州", "淮南", "周口", "黔南布依族苗族自治州", "泸州", "玉溪", "眉山", "通化", "宿州", "枣庄", "内江", "遂宁", "吉安", "通辽", "景德镇", "阜新", "雅安", "铁岭", "承德", "娄底"];

const Fifth_Tier_Cities = ["克拉玛依", "长治", "永州", "绥化", "巴音郭楞蒙古自治州", "拉萨", "云浮", "益阳", "百色", "资阳", "荆门", "松原", "凉山彝族自治州", "达州", "伊犁哈萨克自治州", "广安", "自贡", "汉中", "朝阳", "漯河", "钦州", "贵港", "安顺", "鄂州", "广元", "河池", "鹰潭", "乌兰察布", "铜陵", "昌吉回族自治州", "衡水", "黔西南布依族苗族自治州", "濮阳", "锡林郭勒盟", "巴彦淖尔", "鸡西", "贺州", "防城港", "兴安盟", "白山", "三门峡", "忻州", "双鸭山", "楚雄彝族自治州", "新余", "来宾", "淮北", "亳州", "湘西土家族苗族自治州", "吕梁", "攀枝花", "晋城", "延安", "毕节", "张家界", "酒泉", "崇左", "萍乡", "乌海", "伊春", "六盘水", "随州", "德宏傣族景颇族自治州", "池州", "黑河", "哈密", "文山壮族苗族自治州", "阿坝藏族羌族自治州", "天水", "辽源", "张掖", "铜仁", "鹤壁", "儋州", "保山", "安康", "白城", "巴中", "普洱", "鹤岗", "莱芜", "阳泉", "甘孜藏族自治州", "嘉峪关", "白银", "临沧", "商洛", "阿克苏地区", "海西蒙古族藏族自治州", "大兴安岭地区", "七台河", "朔州", "铜川", "定西", "迪庆藏族自治州", "日喀则", "庆阳", "昭通", "喀什地区", "怒江傈僳族自治州", "海东", "阿勒泰地区", "平凉", "石嘴山", "武威", "阿拉善盟", "塔城地区", "林芝", "金昌", "吴忠", "中卫", "陇南", "山南", "吐鲁番", "博尔塔拉蒙古自治州", "临夏回族自治州", "固原", "甘南藏族自治州", "昌都", "阿里地区", "海南藏族自治州", "和田地区", "克孜勒苏柯尔克孜自治州", "海北藏族自治州", "那曲地区", "玉树藏族自治州", "黄南藏族自治州", "果洛藏族自治州", "三沙"];

const getThresholdPrc = (city) => {
    switch (city) {
        case First_Tier_Cities.includes(city): {
            return cityAverageLevel.firstTierCity
        }
        case Second_Tier_Cities.includes(city): {
            return cityAverageLevel.secondTierCity
        }
        case Third_Tier_Cities.includes(city): {
            return cityAverageLevel.thirdTierCity
        }
        case Forth_Tier_Cities.includes(city): {
            return cityAverageLevel.forthTierCity
        }
        case Fifth_Tier_Cities.includes(city): {
            return cityAverageLevel.fifthTierCity
        }
        default:
            throw new Error(`未知城市${city}的平均水平`);
    }
};

module.exports = {
    cityAverageLevel,
    First_Tier_Cities,
    Second_Tier_Cities,
    Third_Tier_Cities,
    Forth_Tier_Cities,
    Fifth_Tier_Cities,
    getThresholdPrc
};
