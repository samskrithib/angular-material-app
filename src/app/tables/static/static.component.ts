import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss']
})
export class StaticComponent implements OnInit {

  rows;

  tableHover: boolean = true;
  tableStriped: boolean = true;
  tableCondensed: boolean = true;
  tableBordered: boolean = true;

  constructor() { }

  ngOnInit() {
    this.getRows();
  }

  getRows() {
    let data = [
      {
        "launchNumsPercent": 0.6802773528301512,
        "activeNums": 82919.5,
        "trend": 0,
        "cateIds": "1191160",
        "developCompanyAbbr": "深圳腾讯",
        "launchNums": 34240400,
        "concern": "0",
        "appId": 2028050,
        "cateNames": "社交网络",
        "rank": 1,
        "id": 32695,
        "activeNumsPercent": 0.9127961761843745,
        "runtimeNums": 3936620,
        "statDate": "2017/03/01",
        "appName": "微信",
        "isDisplay": "1",
        "runtimeNumsRatio": 0.14041460984032075,
        "companyId": 1,
        "runtimeNumsPercent": 0.7643313833267643,
        "activeNumsRatio": 0.05366586950831175,
        "launchAvgPerson": 13.3205,
        "developCompanyFullName": "深圳市腾讯计算机系统有限公司",
        "launchNumsRatio": 0.13926939879619493,
        "runtimeAvgPerson": 91.8875,
        "status": 1
      },
      {
        "launchNumsPercent": 0.28812707368922974,
        "activeNums": 56940.9,
        "trend": 0,
        "cateIds": "1191160",
        "developCompanyAbbr": "深圳腾讯",
        "launchNums": 14502300,
        "concern": "0",
        "appId": 2028051,
        "cateNames": "社交网络",
        "rank": 2,
        "id": 32696,
        "activeNumsPercent": 0.6268180076881416,
        "runtimeNums": 1059930,
        "statDate": "2017/03/01",
        "appName": "QQ",
        "isDisplay": "1",
        "runtimeNumsRatio": 0.024225499101327715,
        "companyId": 1,
        "runtimeNumsPercent": 0.2057952667845861,
        "activeNumsRatio": -0.01732510941447725,
        "launchAvgPerson": 8.21582,
        "developCompanyFullName": "深圳市腾讯计算机系统有限公司",
        "launchNumsRatio": 0.0009662969430505995,
        "runtimeAvgPerson": 36.0282,
        "status": 1
      },
      {
        "launchNumsPercent": 0.9429247378568134,
        "activeNums": 35353.6,
        "trend": 0,
        "cateIds": "1221198",
        "developCompanyAbbr": "阿里巴巴网络技术有限公司",
        "launchNums": 443598,
        "concern": "0",
        "appId": 2004708,
        "cateNames": "支付",
        "rank": 3,
        "id": 32697,
        "activeNumsPercent": 0.9621676641165697,
        "runtimeNums": 32683.4,
        "statDate": "2017/03/01",
        "appName": "支付宝",
        "isDisplay": "1",
        "runtimeNumsRatio": 0.028675922108251598,
        "companyId": 14352,
        "runtimeNumsPercent": 0.928780094118717,
        "activeNumsRatio": 0.048673051995242196,
        "launchAvgPerson": 0.404757,
        "developCompanyFullName": "阿里巴巴网络技术有限公司",
        "launchNumsRatio": 0.041422313207529454,
        "runtimeAvgPerson": 1.7893,
        "status": 1
      },
      {
        "launchNumsPercent": 0.84171779821807,
        "activeNums": 31386.5,
        "trend": 0,
        "cateIds": "1201177",
        "developCompanyAbbr": "阿里巴巴网络技术有限公司",
        "launchNums": 1517230,
        "concern": "0",
        "appId": 2027844,
        "cateNames": "综合电商",
        "rank": 4,
        "id": 32698,
        "activeNumsPercent": 0.8040604585628283,
        "runtimeNums": 189610,
        "statDate": "2017/03/01",
        "appName": "淘宝",
        "isDisplay": "1",
        "runtimeNumsRatio": 0.10351289691777633,
        "companyId": 14352,
        "runtimeNumsPercent": 0.8405965438053608,
        "activeNumsRatio": 0.055356050060187866,
        "launchAvgPerson": 1.55936,
        "developCompanyFullName": "阿里巴巴网络技术有限公司",
        "launchNumsRatio": 0.12484894315814446,
        "runtimeAvgPerson": 11.6925,
        "status": 1
      },
      {
        "launchNumsPercent": 0.3469970718513807,
        "activeNums": 25147.5,
        "trend": 0,
        "cateIds": "1081081",
        "developCompanyAbbr": "爱奇艺",
        "launchNums": 1211110,
        "concern": "0",
        "appId": 2015131,
        "cateNames": "综合视频",
        "rank": 5,
        "id": 32699,
        "activeNumsPercent": 0.4205886484967688,
        "runtimeNums": 301452,
        "statDate": "2017/03/01",
        "appName": "爱奇艺",
        "isDisplay": "1",
        "runtimeNumsRatio": 0.022703216175871895,
        "companyId": 41,
        "runtimeNumsPercent": 0.341454408294982,
        "activeNumsRatio": 0.023875152171523324,
        "launchAvgPerson": 1.55355,
        "developCompanyFullName": "北京爱奇艺科技有限公司",
        "launchNumsRatio": 0.028718253631190013,
        "runtimeAvgPerson": 23.2013,
        "status": 1
      },
      {
        "launchNumsPercent": 0.3033011867310745,
        "activeNums": 24693.5,
        "trend": 1,
        "cateIds": "1081081",
        "developCompanyAbbr": "深圳腾讯",
        "launchNums": 1058600,
        "concern": "0",
        "appId": 2028092,
        "cateNames": "综合视频",
        "rank": 6,
        "id": 32700,
        "activeNumsPercent": 0.41299555787473746,
        "runtimeNums": 275151,
        "statDate": "2017/03/01",
        "appName": "腾讯视频",
        "isDisplay": "1",
        "runtimeNumsRatio": 0.15072978963656894,
        "companyId": 1,
        "runtimeNumsPercent": 0.31166328933552473,
        "activeNumsRatio": 0.03235421997023368,
        "launchAvgPerson": 1.3829,
        "developCompanyFullName": "深圳市腾讯计算机系统有限公司",
        "launchNumsRatio": 0.12431867520296364,
        "runtimeAvgPerson": 21.5664,
        "status": 1
      },
      {
        "launchNumsPercent": 0.8944900351699883,
        "activeNums": 24430.8,
        "trend": 1,
        "cateIds": "1111108",
        "developCompanyAbbr": "百度在线",
        "launchNums": 1732010,
        "concern": "0",
        "appId": 2020874,
        "cateNames": "搜索",
        "rank": 7,
        "id": 32701,
        "activeNumsPercent": 0.9379542287181967,
        "runtimeNums": 264639,
        "statDate": "2017/03/01",
        "appName": "手机百度",
        "isDisplay": "1",
        "runtimeNumsRatio": 0.2530137025217564,
        "companyId": 2,
        "runtimeNumsPercent": 0.8923022455998382,
        "activeNumsRatio": 0.03350861087961684,
        "launchAvgPerson": 2.28692,
        "developCompanyFullName": "百度在线网络技术（北京）有限公司",
        "launchNumsRatio": 0.2420650287566513,
        "runtimeAvgPerson": 20.9656,
        "status": 1
      },
      {
        "launchNumsPercent": 0.487056745397941,
        "activeNums": 24260.9,
        "trend": -1,
        "cateIds": "1131126",
        "developCompanyAbbr": "深圳腾讯",
        "launchNums": 2101080,
        "concern": "0",
        "appId": 2028054,
        "cateNames": "浏览器",
        "rank": 8,
        "id": 32702,
        "activeNumsPercent": 0.5250515617864943,
        "runtimeNums": 304121,
        "statDate": "2017/03/01",
        "appName": "QQ浏览器",
        "isDisplay": "1",
        "runtimeNumsRatio": 0.20364829458652925,
        "companyId": 1,
        "runtimeNumsPercent": 0.44850312647475227,
        "activeNumsRatio": 0.005470618221303084,
        "launchAvgPerson": 2.79366,
        "developCompanyFullName": "深圳市腾讯计算机系统有限公司",
        "launchNumsRatio": 0.22963656581026512,
        "runtimeAvgPerson": 24.2621,
        "status": 1
      },
      {
        "launchNumsPercent": 0.7625551320587112,
        "activeNums": 24028.7,
        "trend": 1,
        "cateIds": "1151134",
        "developCompanyAbbr": "上海连尚",
        "launchNums": 590602,
        "concern": "0",
        "appId": 2022965,
        "cateNames": "无线管理/WIFI管理",
        "rank": 9,
        "id": 32703,
        "activeNumsPercent": 0.7240853520727801,
        "runtimeNums": 41846.3,
        "statDate": "2017/03/01",
        "appName": "WiFi万能钥匙",
        "isDisplay": "1",
        "runtimeNumsRatio": 0.13859737432827707,
        "companyId": 75,
        "runtimeNumsPercent": 0.7565282317549392,
        "activeNumsRatio": 0.05239023322019055,
        "launchAvgPerson": 0.792871,
        "developCompanyFullName": "上海连尚网络科技有限公司",
        "launchNumsRatio": 0.142496227802066,
        "runtimeAvgPerson": 3.37067,
        "status": 1
      },
      {
        "launchNumsPercent": 0.453442044022547,
        "activeNums": 23608.4,
        "trend": -1,
        "cateIds": "1071073",
        "developCompanyAbbr": "广州酷狗",
        "launchNums": 1201830,
        "concern": "0",
        "appId": 2032042,
        "cateNames": "移动音乐",
        "rank": 10,
        "id": 32704,
        "activeNumsPercent": 0.47864308363542,
        "runtimeNums": 148465,
        "statDate": "2017/03/01",
        "appName": "酷狗音乐",
        "isDisplay": "1",
        "runtimeNumsRatio": 0.1796886794701671,
        "companyId": 67,
        "runtimeNumsPercent": 0.5417580452702678,
        "activeNumsRatio": 0.022934169876641763,
        "launchAvgPerson": 1.64216,
        "developCompanyFullName": "广州酷狗计算机科技有限公司",
        "launchNumsRatio": 0.1988927128535089,
        "runtimeAvgPerson": 12.1716,
        "status": 1
      },
      {
        "launchNumsPercent": 0.20566313166224034,
        "activeNums": 20405.1,
        "trend": 0,
        "cateIds": "1151131",
        "developCompanyAbbr": "深圳腾讯",
        "launchNums": 452245,
        "concern": "0",
        "appId": 2028104,
        "cateNames": "安全管理",
        "rank": 11,
        "id": 32705,
        "activeNumsPercent": 0.4735889300725756,
        "runtimeNums": 77100.4,
        "statDate": "2017/03/01",
        "appName": "腾讯手机管家",
        "isDisplay": "1",
        "runtimeNumsRatio": 0.1779523901920311,
        "companyId": 1,
        "runtimeNumsPercent": 0.16802378036289461,
        "activeNumsRatio": 0.06445100575911861,
        "launchAvgPerson": 0.714947,
        "developCompanyFullName": "深圳市腾讯计算机系统有限公司",
        "launchNumsRatio": 0.19400837465215623,
        "runtimeAvgPerson": 7.3132,
        "status": 1
      },
      {
        "launchNumsPercent": 0.31824855326141316,
        "activeNums": 20268,
        "trend": 0,
        "cateIds": "1121121",
        "developCompanyAbbr": "深圳腾讯",
        "launchNums": 356362,
        "concern": "0",
        "appId": 2010363,
        "cateNames": "应用商店",
        "rank": 12,
        "id": 32706,
        "activeNumsPercent": 0.3205795359283805,
        "runtimeNums": 38960.4,
        "statDate": "2017/03/01",
        "appName": "应用宝",
        "isDisplay": "1",
        "runtimeNumsRatio": 0.15016664846178612,
        "companyId": 1,
        "runtimeNumsPercent": 0.2803995796928303,
        "activeNumsRatio": 0.06788903817276536,
        "launchAvgPerson": 0.567176,
        "developCompanyFullName": "深圳市腾讯计算机系统有限公司",
        "launchNumsRatio": 0.14189310433222252,
        "runtimeAvgPerson": 3.7205,
        "status": 1
      },
      {
        "launchNumsPercent": 0.6521360749996999,
        "activeNums": 16374.9,
        "trend": 1,
        "cateIds": "1141128",
        "developCompanyAbbr": "北京搜狗网络技术有限公司",
        "launchNums": 108655,
        "concern": "0",
        "appId": 2023047,
        "cateNames": "中文输入法",
        "rank": 13,
        "id": 32707,
        "activeNumsPercent": 0.639452196019166,
        "runtimeNums": 7426.86,
        "statDate": "2017/03/01",
        "appName": "搜狗输入法",
        "isDisplay": "1",
        "runtimeNumsRatio": 0.16393686694949375,
        "companyId": 6793,
        "runtimeNumsPercent": 0.6970370439891506,
        "activeNumsRatio": 0.023661573854117178,
        "launchAvgPerson": 0.214047,
        "developCompanyFullName": "北京搜狗网络技术有限公司",
        "launchNumsRatio": 0.16245854284797262,
        "runtimeAvgPerson": 0.877844,
        "status": 1
      },
      {
        "launchNumsPercent": 0.30543415105302474,
        "activeNums": 16135.4,
        "trend": 0,
        "cateIds": "1071073",
        "developCompanyAbbr": "深圳腾讯",
        "launchNums": 809541,
        "concern": "0",
        "appId": 2028095,
        "cateNames": "移动音乐",
        "rank": 14,
        "id": 32708,
        "activeNumsPercent": 0.32713346146672184,
        "runtimeNums": 54790.3,
        "statDate": "2017/03/01",
        "appName": "QQ音乐",
        "isDisplay": "1",
        "runtimeNumsRatio": 0.013248535800081026,
        "companyId": 1,
        "runtimeNumsPercent": 0.19993322215856638,
        "activeNumsRatio": -0.011995370852289753,
        "launchAvgPerson": 1.61844,
        "developCompanyFullName": "深圳市腾讯计算机系统有限公司",
        "launchNumsRatio": 0.06782699308816546,
        "runtimeAvgPerson": 6.57223,
        "status": 1
      },
      {
        "launchNumsPercent": 0.21917304328113704,
        "activeNums": 16117.1,
        "trend": 1,
        "cateIds": "1101095",
        "developCompanyAbbr": "深圳腾讯",
        "launchNums": 1024840,
        "concern": "0",
        "appId": 2028057,
        "cateNames": "综合资讯",
        "rank": 15,
        "id": 32709,
        "activeNumsPercent": 0.3852420027583701,
        "runtimeNums": 191424,
        "statDate": "2017/03/01",
        "appName": "腾讯新闻",
        "isDisplay": "1",
        "runtimeNumsRatio": 0.17750110722897494,
        "companyId": 1,
        "runtimeNumsPercent": 0.15594877309609934,
        "activeNumsRatio": 0.06991549333174017,
        "launchAvgPerson": 2.05119,
        "developCompanyFullName": "深圳市腾讯计算机系统有限公司",
        "launchNumsRatio": 0.18750847318187244,
        "runtimeAvgPerson": 22.9879,
        "status": 1
      },
      {
        "launchNumsPercent": 0.40491751391164127,
        "activeNums": 16048.1,
        "trend": 1,
        "cateIds": "1101095",
        "developCompanyAbbr": "北京字节跳动网络技术有限公司",
        "launchNums": 1893370,
        "concern": "0",
        "appId": 2023279,
        "cateNames": "综合资讯",
        "rank": 16,
        "id": 32710,
        "activeNumsPercent": 0.3835927173292093,
        "runtimeNums": 536841,
        "statDate": "2017/03/01",
        "appName": "今日头条",
        "isDisplay": "1",
        "runtimeNumsRatio": 0.14709125174678742,
        "companyId": 7239,
        "runtimeNumsPercent": 0.4373521360836836,
        "activeNumsRatio": 0.08228351766927437,
        "launchAvgPerson": 3.80584,
        "developCompanyFullName": "北京字节跳动网络技术有限公司",
        "launchNumsRatio": 0.16037360037752268,
        "runtimeAvgPerson": 64.7458,
        "status": 1
      },
      {
        "launchNumsPercent": 0.1342891360529015,
        "activeNums": 15775.4,
        "trend": 0,
        "cateIds": "1081081",
        "developCompanyAbbr": "优酷土豆",
        "launchNums": 468704,
        "concern": "0",
        "appId": 2006141,
        "cateNames": "综合视频",
        "rank": 17,
        "id": 32711,
        "activeNumsPercent": 0.26384150175945625,
        "runtimeNums": 120369,
        "statDate": "2017/03/01",
        "appName": "优酷视频",
        "isDisplay": "1",
        "runtimeNumsRatio": -0.043285776735683346,
        "companyId": 5,
        "runtimeNumsPercent": 0.13634185764917364,
        "activeNumsRatio": 0.04558017457929299,
        "launchAvgPerson": 0.958424,
        "developCompanyFullName": "合一信息技术(北京)有限公司",
        "launchNumsRatio": -0.012745521374182472,
        "runtimeAvgPerson": 14.7682,
        "status": 1
      },
      {
        "launchNumsPercent": 0.6516762469531051,
        "activeNums": 15725.8,
        "trend": 1,
        "cateIds": "1151131",
        "developCompanyAbbr": "北京奇虎",
        "launchNums": 1433010,
        "concern": "0",
        "appId": 2015074,
        "cateNames": "安全管理",
        "rank": 18,
        "id": 32712,
        "activeNumsPercent": 0.36498545934767823,
        "runtimeNums": 326710,
        "statDate": "2017/03/01",
        "appName": "360手机卫士",
        "isDisplay": "1",
        "runtimeNumsRatio": 0.24077611645544622,
        "companyId": 4,
        "runtimeNumsPercent": 0.7119943512920983,
        "activeNumsRatio": 0.09682999128160413,
        "launchAvgPerson": 2.9395,
        "developCompanyFullName": "北京奇虎科技有限公司",
        "launchNumsRatio": 0.23713449535106576,
        "runtimeAvgPerson": 40.2104,
        "status": 1
      },
      {
        "launchNumsPercent": 0.022481672064053403,
        "activeNums": 15716.6,
        "trend": -1,
        "cateIds": "1191160",
        "developCompanyAbbr": "新浪网技术(中国)有限公司",
        "launchNums": 1131570,
        "concern": "0",
        "appId": 2022613,
        "cateNames": "社交网络",
        "rank": 19,
        "id": 32713,
        "activeNumsPercent": 0.1730118052161354,
        "runtimeNums": 116783,
        "statDate": "2017/03/01",
        "appName": "微博",
        "isDisplay": "1",
        "runtimeNumsRatio": -0.0364597943928318,
        "companyId": 15576,
        "runtimeNumsPercent": 0.02267450552480288,
        "activeNumsRatio": -0.07837825158914458,
        "launchAvgPerson": 2.32253,
        "developCompanyFullName": "新浪网技术(中国)有限公司",
        "launchNumsRatio": -0.04478229305600108,
        "runtimeAvgPerson": 14.3818,
        "status": 1
      },
      {
        "launchNumsPercent": 0.5092258468352315,
        "activeNums": 14478.5,
        "trend": -1,
        "cateIds": "1171149",
        "developCompanyAbbr": "百度在线",
        "launchNums": 204196,
        "concern": "0",
        "appId": 2020828,
        "cateNames": "地图",
        "rank": 20,
        "id": 32714,
        "activeNumsPercent": 0.565953288380729,
        "runtimeNums": 26587,
        "statDate": "2017/03/01",
        "appName": "百度地图",
        "isDisplay": "1",
        "runtimeNumsRatio": 0.029817331081604483,
        "companyId": 2,
        "runtimeNumsPercent": 0.5143368967611884,
        "activeNumsRatio": -0.05549539441066727,
        "launchAvgPerson": 0.454949,
        "developCompanyFullName": "百度在线网络技术（北京）有限公司",
        "launchNumsRatio": 0.04488701490093336,
        "runtimeAvgPerson": 3.55416,
        "status": 1
      }
    ]

    this.rows = data;
  }

}
