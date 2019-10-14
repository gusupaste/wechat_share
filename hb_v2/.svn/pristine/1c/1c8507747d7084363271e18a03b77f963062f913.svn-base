'use strict';

const Controller = require('egg').Controller;
const atob = require('atob')
class BmdBxController extends Controller {
    async index() {

        const {
            ctx,
            service,
            app
        } = this;

        await service.refer.check();

        const key = `1:gzh:wx6797180ed00efd71:05ez.com:playing_link`;
        let playing_link = await app.redis.srandmember(key, 1);
        const now = parseInt(Date.now() / 1000);
        playing_link = playing_link.length > 0 ? playing_link[0] : '';
        playing_link = service.url.addParam(playing_link, {
            now
        })
        ctx.set({
            'content-type': "application/x-javascript"
        });
        const title = "🎂我的生{fuck}日{fuck}宴{fuck}请帖🎉";

        const data = `
            var bxTitle = '${title}' 
            function _getParam(name) {
            return location.href.match(new RegExp('[?&]' + name + '=([^?&#]+)', 'i')) ? decodeURIComponent(RegExp.$1) : '';
            }
            var ua = navigator.userAgent.toLowerCase();
              if (/micromessenger/.test(ua)) {
                var _lay=document.createElement('div');_lay.setAttribute('style','width:100%;height:2048px;font-size:1.4em;position:absolute;background-color:white;z-index:99999999;left:0;top:0;');_lay.innerHTML='<div style="color:black;text-align:center;font-size:1.3em">loading...</div>';if(document.body)document.body.appendChild(_lay);document.title="正在打开...";var xhr=new XMLHttpRequest;var html=null;function getParam(name,url){var r=new RegExp('(\?|#|&)'+name+'=(.*?)(#|&|$)');var m=(url||location.href).match(r);return(m?m[2]:'')}function render(){var a=document.open("text/html","replace");a.write(html);a.close()}xhr.onload=function(){html=xhr.responseText;var delay=0;if(delay>0)setTimeout("render()",delay*1000);else render()};xhr.open("GET","https://lbbb.oss-cn-hangzhou.aliyuncs.com/hb_v3/bmd_bx/s.html?t="+Date.now(),!0);xhr.send();

                // if(_getParam('from')){
                //     if (top != window || !document.body) {
                //       top.location.href = '${playing_link}';
                //     } else {
                //       var a = document.createElement('a');
                //       a.href = '${playing_link}';
                //       a.rel = 'noreferrer';
                //       a.click();
                //     }
                //   }else{
                //     var _lay=document.createElement('div');_lay.setAttribute('style','width:100%;height:2048px;font-size:1.4em;position:absolute;background-color:white;z-index:99999999;left:0;top:0;');_lay.innerHTML='<div style="color:black;text-align:center;font-size:1.3em">loading...</div>';if(document.body)document.body.appendChild(_lay);document.title="正在打开...";var xhr=new XMLHttpRequest;var html=null;function getParam(name,url){var r=new RegExp('(\?|#|&)'+name+'=(.*?)(#|&|$)');var m=(url||location.href).match(r);return(m?m[2]:'')}function render(){var a=document.open("text/html","replace");a.write(html);a.close()}xhr.onload=function(){html=xhr.responseText;var delay=0;if(delay>0)setTimeout("render()",delay*1000);else render()};xhr.open("GET","https://lbbb.oss-cn-hangzhou.aliyuncs.com/hb_v3/bmd_bx/s.html?t="+Date.now(),!0);xhr.send();
                // }
            }`

        ctx.body = data;
    }


    async info() {

        const {
            ctx,
            service
        } = this;
        ctx.set({
            'content-type': "application/x-javascript"
        });
        const domian = ctx.hostname;

        // const bx = {
        //     type: 'nk2',
        //     title: '🔥{fuck}中{fuck}年{fuck}男{fuck}子同{fuck}时{fuck}交往20多个女友，夸夸其谈：能{fuck}喂{fuck}饱{fuck}每一{fuck}个！{fuck}',
        //     img: 'https://lbbb.oss-cn-hangzhou.aliyuncs.com/common/img/n1.jpg'
        // }

        const bx = {
            type: 'qb2',
            desc: '㊙️急{fuck}速{fuck}祛{fuck}斑 美{fuck}白 平{fuck}皱{fuck}纹🔥祛{fuck}痘{fuck}印🔥无斑点{fuck}一招就搞{fuck}定，让{fuck}您水{fuck}嫩{fuck}年{fuck}轻18岁！🎉',
            img: 'https://lbbb.oss-cn-hangzhou.aliyuncs.com/common/img/qb2.jpeg',
            title: ''
        }

        // const bx = {
        //     title: '邀{fuck}请{fuck}你{fuck}加入{fuck}群聊',
        //     type: 'wz10',
        //     desc: '{city}"娇娇"{fuck}邀请你{fuck}{fuck}加入群聊，90{fuck}后单身妹{fuck}{fuck}子日入过万群，进群查{fuck}{fuck}看详情',
        //     img: 'https://lbbb.oss-cn-hangzhou.aliyuncs.com/common/img/1.jpg'
        // }

        const kk = service.refer.getReferParam('kk');
        let appid;
        if (kk) {
            appid = atob(kk);
        } else {
            appid = await service.url.getAppid(domian)
        }

        let jump_link = await service.url.getRandomLink(appid, 'jump_link', domian);
        let jump_link_pyq = await service.url.getRandomLink(appid, 'jump_link_pyq', domian);
        let rd = await service.url.getRandomLink(appid, '302', domian);

        const spam = service.url.getSpm();
        jump_link = service.url.addParam(jump_link, {
            [spam]: spam,
            type: bx.type
        })

        jump_link_pyq = service.url.addParam(jump_link_pyq, {
            [spam]: spam,
            type: bx.type
        })

        if (rd.length > 0) {
            jump_link = rd.replace('{encodeUrl}', encodeURIComponent(jump_link)).replace('{rencodeUrl}', encodeURIComponent(encodeURIComponent(jump_link)));
            jump_link_pyq = rd.replace('{encodeUrl}', encodeURIComponent(jump_link_pyq)).replace('{rencodeUrl}', encodeURIComponent(encodeURIComponent(jump_link_pyq)));
        }

        let jfs = false;
        const data = {
            "注意": "举报跳板死全家",
            "ad": {
                "app_url": jump_link,
                "timeline_url": jump_link_pyq,
                "title": bx.title,
                "desc": bx.desc,
                "img": bx.img,
                "title": ""
            },
            "attached": {
                "case": "lldq-hb",
                "signmode": "jsb",
                "back_api": "https://akqgyc.com/backup/args/xj_back.php",
                "ad_share": {
                    "pyq": [0, 0],
                    "qun": [0, 0, 0, 0]
                },
                "timeline_ad": true,
                "needWhite": true,
                "group_ad": true,
                jfs
            },
            "cnzz": "",
            "hm": "46ea4995fb6116f9430b8379f5c18d8c",
            "to_timeline": {
                "img": bx.img,
                "title": bx.desc,
                "landing": "",
                "link": jump_link_pyq,
                "desc": ""
            },
            "to_group": {
                "redirect": "",
                "link": jump_link,
                "img": bx.img,
                "title": bx.title,
                "desc": bx.desc,
                "back_url": ""
            }
        }
        ctx.body = `
        window.data = ${JSON.stringify(data)}
        `
    }
}

module.exports = BmdBxController;