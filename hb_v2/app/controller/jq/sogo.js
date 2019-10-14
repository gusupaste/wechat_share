'use strict';

const Controller = require('egg').Controller;

class SogoController extends Controller {
    async echo() {
        //https://open.weixin.qq.com/sdk/report?v=1&o=0&s=1&c=7.0.3&a=wxc3f3393910d0d5f6&n=wifi&i=714&p=229&u=https%3A%2F%2Fbaike.sogou.com%2Fm%2FfullLemma%3Fch%3Dwap3.rdzs.w1%26lid%3D6769971

        const {
            ctx,
            service
        } = this;

        const {
            url
        } = ctx.request.query;

        const outh = `https://baike.sogou.com/m/baike/wxsha1?url=${encodeURIComponent(url)}&_=${Date.now()}`;

        const resp = await ctx.curl(outh, {
            dataType: 'json'
        });

        ctx.body = {
            data: resp.data.data
        }
    }

    async sogomap() {

        const {
            ctx,
            service
        } = this;

        const {
            url
        } = ctx.request.query;

        const outh = `http://huodong.sogou.com/getsign?url=${encodeURIComponent(url)}&_=${Date.now()}`;

        const resp = await ctx.curl(outh, {
            dataType: 'text'
        });
        const s = resp.data

        const json = s.substr(15, s.length - 16)

        ctx.body = JSON.parse(json)

    }

    async weimob() {
        const {
            ctx,
            service
        } = this;

        let {
            url
        } = ctx.request.query;

        const requrl = `https://s.dianpu888.com/sign?site=weimob&url=${encodeURIComponent(url)}`;

        const resp = await ctx.curl(requrl, {
            dataType: 'json',
            headers: {
                'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16D57 MicroMessenger/7.0.3(0x17000321) NetType/WIFI Language/zh_CN',
                'Referer': url
            }
        });
        ctx.body = resp.data;
    }

    async sogopic() {
        const {
            ctx,
            service
        } = this;

        const {
            url
        } = ctx.request.query;

        const outh = `https://shouji.sogou.com/api/weixin/jssdk/wxconfig.php?_=${Date.now()}`
        const resp = await ctx.curl(outh, {
            dataType: 'text',
            headers: {
                referer: url
            }
        });
        const s = resp.data

        const json = s.slice(15).replace('};', "}");

        ctx.body = JSON.parse(json)
    }
}

module.exports = SogoController;