const urls = require('./app/data/urls');
const caseId = require('./app/data/caseId');
const Redis = require('ioredis');
const Promise = require('bluebird');
const rp = require('request-promise');
const config = {
    port: 6379, // Redis port 
    host: 'r-wz9ea56b57728724.redis.rds.aliyuncs.com', // Redis host 
    // host: '127.0.0.1',
    password: ''
};

const client = new Redis(config);

function getDomain(url) {
    const r = url.match(/(?<=:\/\/)(.+)(?=\/)/);
    return r && r.length ? r[0] : ''
}

async function catchGzh() {

    const key = `${caseId}:gzh`
    try {
        //先清除缓存
        await client.del(key);

        const playSet = `${caseId}:share_link_set`;
        const jumpSet = `${caseId}:jump_link_set`;
        const shareSet = `${caseId}:share_link_set`;


        await Promise.map(urls, async url => {
            await client.lpush(key, url.appid);

            const shareKey = `${caseId}:gzh:${url.appid}:share_link`;
            const jumpkey = `${caseId}:gzh:${url.appid}:jump_link`;
            const jumpPyqKey = `${caseId}:gzh:${url.appid}:jump_link_pyq`;
            const playKey = `${caseId}:gzh:${url.appid}:playing_link`;

            await client.del(shareKey)
            await Promise.map(url.share_link, async link => {
                const ck = await check(link);
                if (!ck) return;
                await client.lpush(shareKey, link);
                const domain = getDomain(link);
                await client.sadd(shareSet, domain);
            });

            await client.del(jumpkey)
            await Promise.map(url.jump_link, async link => {
                const ck = await check(link)
                if (!ck) return;
                await client.lpush(jumpkey, link);
                const domain = getDomain(link);
                await client.sadd(jumpSet, domain);
            });

            await client.del(jumpPyqKey)
            await Promise.map(url.jump_link_pyq, async link => {
                const ck = await check(link)
                if (!ck) return;
                await client.lpush(jumpPyqKey, link);
                const domain = getDomain(link);
                await client.sadd(jumpSet, domain);
            });

            await client.del(playKey)
            await Promise.map(url.playing_link, async link => {
                const ck = await check(link)
                if (!ck) return;
                await client.lpush(playKey, link);
                const domain = getDomain(link);
                await client.sadd(playSet, domain);
            });
        })
    } catch (ex) {
        console.error(ex);
    }

}

async function check(url) {
    const check_url = 'https://service.cqfeiqi.com./service/check?url=' + encodeURIComponent(url) + '&type=bridge';
    try {
        const option = {
            url: check_url,
            method: 'GET',
            json: true,
            timeout: 3000
        }
        const resp = await rp(option);
        if (resp.status == 0) {
            return true;
        } else {
            return false;
        }
    } catch (ex) {
        return true;
    }
}

(async function () {
    await catchGzh();
    process.exit();
})()