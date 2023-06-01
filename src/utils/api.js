// 首页获取城市天气信息
const getCity = async () =>{
    try{
        const res = await (await fetch('https://v0.yiketianqi.com/api?unescape=1&version=v9&appid=43468276&appsecret=YHyG18xv')).json()
        return res
    }catch (e){
        console.log('Fetch Error:', e)
    }
}

const getQueue = async() => {
    try{
        const res = await (await fetch('https://v0.yiketianqi.com/aqi/rankcity?appid=43468276&appsecret=YHyG18xv')).json()
        return res
    }catch (e){
        console.log('Fetch Error: ',e)
    }
}

const getSevenDays = async() => {
    try{
        const res = await (await fetch('https://www.yiketianqi.com/free/week?unescape=1&appid=43468276&appsecret=YHyG18xv')).json()
        return res
    }catch (e){
        console.log('Fetch Error:',e)
    }
}

// 获取新闻信息
const getNews = () => {
    return {
        "reason":"success!",
        "result":{
            "stat":"1",
            "data":[
                {
                    "uniquekey":"8ff2e37eab7ed9ebfb644707c31f212a",
                    "title":"误信民间偏方治病，男子逮了7只黄鼠狼被抓",
                    "date":"2023-05-10 15:39:00",
                    "category":"头条",
                    "author_name":"国际时事讲解",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510153916325483680.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/news\/20230510\/20230510153903_80f6eba127f2601ed751f168855ebab9_1_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"2d32b553848212ee51b97017efdb7fdd",
                    "title":"湖南湘西：民警上班“带娃”？网友：靠谱！",
                    "date":"2023-05-10 15:39:00",
                    "category":"头条",
                    "author_name":"人民网－湖南频道，供稿：人民资讯",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510153903881917593.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/news\/20230510\/20230510153903_80f6eba127f2601ed751f168855ebab9_1_mwpm_03201609.jpeg",
                    "thumbnail_pic_s02":"https:\/\/dfzximg02.dftoutiao.com\/news\/20230510\/20230510153903_80f6eba127f2601ed751f168855ebab9_2_mwpm_03201609.jpeg",
                    "thumbnail_pic_s03":"https:\/\/dfzximg02.dftoutiao.com\/news\/20230510\/20230510153903_80f6eba127f2601ed751f168855ebab9_3_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"161f48b5b829939c635cb8aa80a914e0",
                    "title":"第二届保利艺术教育青少年国际展演启动",
                    "date":"2023-05-10 15:32:00",
                    "category":"头条",
                    "author_name":"人民网，供稿：人民资讯",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510153241380126536.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/news\/20230510\/20230510153903_80f6eba127f2601ed751f168855ebab9_1_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"82cb1130059a3274e68740a6cb0be0d5",
                    "title":"【现场·我在我思】给不愿被流量围猎的普通人一条“生路”",
                    "date":"2023-05-10 15:29:00",
                    "category":"头条",
                    "author_name":"每日看点快看",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510152913298878630.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/news\/20230510\/20230510153903_80f6eba127f2601ed751f168855ebab9_1_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"18672efb0aed5ca5ef3e2630d0ae48e1",
                    "title":"消防送水进校园 滴滴甘露显真情",
                    "date":"2023-05-10 15:24:00",
                    "category":"头条",
                    "author_name":"人民网－广西频道，供稿：人民资讯",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510152402345171549.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/news\/20230510\/20230510152402_8f80a11166c73190c067c7f2367dfe42_1_mwpm_03201609.jpeg",
                    "thumbnail_pic_s02":"https:\/\/dfzximg02.dftoutiao.com\/news\/20230510\/20230510152402_8f80a11166c73190c067c7f2367dfe42_2_mwpm_03201609.jpeg",
                    "thumbnail_pic_s03":"https:\/\/dfzximg02.dftoutiao.com\/news\/20230510\/20230510152402_8f80a11166c73190c067c7f2367dfe42_3_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"f006d06b7ff60f2026461808fec1d03f",
                    "title":"婚宴刚开席大妈就打包仅剩2个菜，网友：打个饭回来菜就没了",
                    "date":"2023-05-10 15:07:00",
                    "category":"头条",
                    "author_name":"国际时事讲解",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510150757757687126.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/632x504_645b42cd483c2_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"e47fcb387818d146de61299dc6ca68f5",
                    "title":"高速公路上倒车+强行变道，结果悲剧了……",
                    "date":"2023-05-10 15:03:00",
                    "category":"头条",
                    "author_name":"人民网－云南频道，供稿：人民资讯",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510150314890768225.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/news\/20230510\/20230510153903_80f6eba127f2601ed751f168855ebab9_1_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"87c40ddc47f5abf84cea58eb93cf8960",
                    "title":"万幸拦住了！15岁少年欲赴缅“捞金”被民警劝拦",
                    "date":"2023-05-10 14:57:00",
                    "category":"头条",
                    "author_name":"国际时事讲解",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510145759970380068.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/626x506_645b407774456_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"2c8cdffd31c602e6e3be77ac901498c5",
                    "title":"好美！90后姑娘拍视频宣传家乡走红，真实身份曝光",
                    "date":"2023-05-10 14:56:00",
                    "category":"头条",
                    "author_name":"国际时事讲解",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510145617583596634.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/640x867_645b400f74628_mwpm_03201609.jpeg",
                    "thumbnail_pic_s02":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/640x480_645b401022bcf_mwpm_03201609.jpeg",
                    "thumbnail_pic_s03":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/640x584_645b401110648_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"cb5812533f7524113f164a7c1f294a99",
                    "title":"山西野地现无名女尸！警方发布寻找尸源协查通告",
                    "date":"2023-05-10 14:55:00",
                    "category":"头条",
                    "author_name":"国际时事讲解",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510145534623848931.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/640x1186_645b3fe6091e0_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"b20d614ff7d6a0d2c1960a965c316d60",
                    "title":"2年没见的好友突然出现在面前，哈尔滨一男孩满脸不敢相信！",
                    "date":"2023-05-10 14:54:00",
                    "category":"头条",
                    "author_name":"国际时事讲解",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510145451107653127.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/640x546_645b3fb8befa3_mwpm_03201609.jpeg",
                    "thumbnail_pic_s02":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/640x542_645b3fb96ef5b_mwpm_03201609.jpeg",
                    "thumbnail_pic_s03":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/640x451_645b3fba0a568_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"407ea94a8a1a09c10697cbb97529ad6d",
                    "title":"女子官宣结婚被民警提醒赶紧分手，网友：这次“分手”分得好！",
                    "date":"2023-05-10 14:44:00",
                    "category":"头条",
                    "author_name":"国际时事讲解",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510144415921793267.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/640x3951_645b3d3f30b4a_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"a69e051259987126a691b29bf12f541e",
                    "title":"2岁男童喉咙长菜花样肿块，确诊感染HPV",
                    "date":"2023-05-10 14:39:00",
                    "category":"头条",
                    "author_name":"国际时事讲解",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510143956099496650.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/640x861_645b3c3b70551_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"4036b6bc55dfd77ce6c5cc193d62e313",
                    "title":"天河路-体育东路人行地道将建起临时天桥",
                    "date":"2023-05-10 13:33:00",
                    "category":"头条",
                    "author_name":"阿宅社会",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510133318824852206.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/600x449_645b2c9d16efb_mwpm_03201609.jpeg",
                    "thumbnail_pic_s02":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/600x417_645b2c9dab3f0_mwpm_03201609.jpeg",
                    "thumbnail_pic_s03":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/600x449_645b2c9e550d9_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"ba1d4d2f0ce06e22691aa8430e8112d8",
                    "title":"山西吕梁汾阳市钟楼佳苑小区住宅楼发生火灾致3死20伤",
                    "date":"2023-05-10 13:31:00",
                    "category":"头条",
                    "author_name":"阿宅社会",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510133120658743999.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/583x382_645b2c2821677_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"caaa90ba4c66f5c913128e041a86c16b",
                    "title":"为保护长江鲟四川每年放流近10万尾",
                    "date":"2023-05-10 13:30:00",
                    "category":"头条",
                    "author_name":"阿宅社会",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510133022900831234.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/440x293_645b2bed20972_mwpm_03201609.jpeg",
                    "thumbnail_pic_s02":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/440x293_645b2bed9f6c0_mwpm_03201609.jpeg",
                    "thumbnail_pic_s03":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/440x293_645b2bee495b8_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"156126d82f1ebb95d74c3d8f8083c176",
                    "title":"泰和县公安局上圯乡“芦林坑”深山中找到走失老人瑟瑟发抖",
                    "date":"2023-05-10 13:29:00",
                    "category":"头条",
                    "author_name":"阿宅社会",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510132907802373684.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/498x279_645b2ba3433dd_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"1b1919d9812b8894f30896bc9dbc2d71",
                    "title":"芜湖梧桐树被风刮倒，两人被砸伤",
                    "date":"2023-05-10 13:29:00",
                    "category":"头条",
                    "author_name":"阿宅社会",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510132946132645093.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/600x435_645b2bc78de51_mwpm_03201609.jpeg",
                    "thumbnail_pic_s02":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/600x449_645b2bc8661e6_mwpm_03201609.jpeg",
                    "thumbnail_pic_s03":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/600x449_645b2bc9033e4_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"b44cea3d8b6b373abaa91fc35a7059a0",
                    "title":"成都大熊猫繁育研究基地发布情况通报男子被终身禁止进入",
                    "date":"2023-05-10 13:27:00",
                    "category":"头条",
                    "author_name":"阿宅社会",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510132701553656951.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/440x308_645b2b2503b0d_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"6b46f6be79ccd6749fd5e5c86a111911",
                    "title":"成都普通高中学校班型清理规范",
                    "date":"2023-05-10 13:25:00",
                    "category":"头条",
                    "author_name":"阿宅社会",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510132541284862192.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/news\/20230510\/20230510153903_80f6eba127f2601ed751f168855ebab9_1_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"381eeef43036166cd47fea09c15a30a3",
                    "title":"王舰：“马铃薯”种植者的心声",
                    "date":"2023-05-10 13:24:00",
                    "category":"头条",
                    "author_name":"阿宅社会",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510132449041494344.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/640x427_645b2a9ea55d9_mwpm_03201609.jpeg",
                    "thumbnail_pic_s02":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/640x426_645b2a9f6c18e_mwpm_03201609.jpeg",
                    "thumbnail_pic_s03":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/640x480_645b2a9fe45ce_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"30e579f9abfaf86bb7a73fdf51ce948d",
                    "title":"湖北防止返贫监测收入标准提高至7600元",
                    "date":"2023-05-10 13:23:00",
                    "category":"头条",
                    "author_name":"阿宅社会",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510132351236601896.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/news\/20230510\/20230510153903_80f6eba127f2601ed751f168855ebab9_1_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"64987e08137b1fd4d583de5050544079",
                    "title":"小小农产品，探索现代农业新模式",
                    "date":"2023-05-10 13:23:00",
                    "category":"头条",
                    "author_name":"阿宅社会",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510132333476732043.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/600x1160_645b2a527f3e2_mwpm_03201609.jpeg",
                    "thumbnail_pic_s02":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/600x1160_645b2a5357d90_mwpm_03201609.jpeg",
                    "thumbnail_pic_s03":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/600x1160_645b2a5438e3b_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"b8b94d8d95e2b9fcaf41cb282ebc2eb2",
                    "title":"航班落地前40分钟，南航乘务员紧急救人",
                    "date":"2023-05-10 13:22:00",
                    "category":"头条",
                    "author_name":"阿宅社会",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510132235075726026.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/600x450_645b2a18e77b1_mwpm_03201609.jpeg",
                    "thumbnail_pic_s02":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/600x450_645b2a1992072_mwpm_03201609.jpeg",
                    "thumbnail_pic_s03":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/600x1100_645b2a1a80fcc_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"7d9a95fd65db46fc14189ee4b3590e70",
                    "title":"连云港田湾核电两机组建设战正酣",
                    "date":"2023-05-10 13:21:00",
                    "category":"头条",
                    "author_name":"人民日报客户端江苏频道，供稿：人民资讯",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510132142879648701.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/news\/20230510\/20230510132142_7599ac8c046e61970fbb1c3de17194de_1_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"651b53d8d6bf1dc535c96a618ce1c226",
                    "title":"云南保山隆阳区发生5.2级地震学生奔赴新学校",
                    "date":"2023-05-10 13:21:00",
                    "category":"头条",
                    "author_name":"阿宅社会",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510132137201164708.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/600x264_645b29e0b7195_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"088edf10a5480fab1bf65170b40ec468",
                    "title":"呼和浩特市公安局玉泉区分局成功破获一起诈骗案",
                    "date":"2023-05-10 13:21:00",
                    "category":"头条",
                    "author_name":"阿宅社会",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510132102343946723.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/600x450_645b29bdcb82c_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"27c41d722806d1d99999cc0621633258",
                    "title":"连云港两名少年网购被骗，民警一波“霸气”操作引发网友点赞！",
                    "date":"2023-05-10 13:20:00",
                    "category":"头条",
                    "author_name":"阿宅社会",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510132026751775295.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/600x399_645b299869879_mwpm_03201609.jpeg",
                    "thumbnail_pic_s02":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/600x1193_645b2998e70af_mwpm_03201609.jpeg",
                    "thumbnail_pic_s03":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/600x1202_645b299995a07_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"ad05acd8cbbfabac64881a7ec97360fe",
                    "title":"“五一”假期结束热门旅游目的地机票价格下降明显",
                    "date":"2023-05-10 13:19:00",
                    "category":"头条",
                    "author_name":"阿宅社会",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510131921978695954.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/600x233_645b295981b41_mwpm_03201609.jpeg",
                    "is_content":"1"
                },
                {
                    "uniquekey":"e7a1a7a0ce0abdbf44297c0844239dd6",
                    "title":"云南龙陵：傣味手抓饭长桌宴酸辣爽口解夏暑初夏时节",
                    "date":"2023-05-10 13:18:00",
                    "category":"头条",
                    "author_name":"阿宅社会",
                    "url":"https:\/\/mini.eastday.com\/mobile\/230510131858245523930.html",
                    "thumbnail_pic_s":"https:\/\/dfzximg02.dftoutiao.com\/minimodify\/20230510\/600x312_645b2941b89cf_mwpm_03201609.jpeg",
                    "is_content":"1"
                }
            ],
            "page":"1",
            "pageSize":"30"
        },
        "error_code":0
    }
}



export {
    getCity,
    getQueue,
    getSevenDays,
    getNews
}