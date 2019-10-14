const caseId = require('../data/caseId')
const Promise = require('bluebird')

module.exports = {
    schedule: {
        interval: '1m', // 1 分钟间隔
        type: 'worker', // 指定所有的 worker 都需要执行
        immediate: true
    },
    async task(ctx) {
        return;
        const {
            redis
        } = ctx.app;

        const key = `${caseId}:gzh`

        const leng = await redis.llen(key)

        const gzhs = await redis.lrange(key, 0, leng)

        await Promise.map(gzhs, async gzh => {

            //const sharenum = await ctx.service.checkUrl.checkLink(gzh, 'share_link');
            const jumpnum = await ctx.service.checkUrl.checkLink(gzh, 'jump_link');
            const jumpPyqnum = await ctx.service.checkUrl.checkLink(gzh,'jump_link_pyq')
            const playingnum = await ctx.service.checkUrl.checkLink(gzh, 'playing_link');
            const sharenum = await ctx.service.checkUrl.checkLink(gzh, 'share_link');

            // if (jumpnum == 0) {
            //     await redis.lrem(key, 0, gzh);
            // }
        })

    }
}