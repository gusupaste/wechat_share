'use strict';

const Controller = require('egg').Controller;
const caseId = require('../data/caseId');
const Promise = require('bluebird');
class UrlController extends Controller {
    async list() {
        const {
            app
        } = this;
        const key = `${caseId}:gzh`;
        const length = await app.redis.llen(key);
        const list = await app.redis.lrange(key, 0, length);

        const locale = {}
        await Promise.map(list, async appid => {
            const shareCount = await this.getCount(appid, 'share_link');
            const playCount = await this.getCount(appid, 'playing_link');
            const jumpCount = await this.getCount(appid, 'jump_link');
            const jumpPyqCount = await this.getCount(appid, 'jump_link_pyq');
            locale[appid] = {
                shareCount,
                playCount,
                jumpCount,
                jumpPyqCount
            }
        })

        this.ctx.body = locale;
    }

    async getCount(appid, type) {
        const {
            app
        } = this;
        const key = `${caseId}:gzh:${appid}:${type}`;
        return app.redis.llen(key);
    }

    async handle() {
        const {
            redis
        } = this.app;

        const {
            ctx
        } = this;
        const key = `${caseId}:gzh`

        const leng = await redis.llen(key)

        const gzhs = await redis.lrange(key, 0, leng)

        const locale = {}
        await Promise.map(gzhs, async gzh => {

            const shareCount = await ctx.service.checkUrl.checkLink(gzh, 'share_link');
            const playCount = await ctx.service.checkUrl.checkLink(gzh, 'jump_link');
            const jumpCount = await ctx.service.checkUrl.checkLink(gzh, 'playing_link');

            if (jumpCount == 0) {
                await redis.lrem(key, 0, gzh);
            }
            locale[gzh] = {
                shareCount,
                playCount,
                jumpCount
            }
        })
        ctx.body = locale;
    }
}

module.exports = UrlController;