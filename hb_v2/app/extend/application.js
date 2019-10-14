const WechatAPI = require('co-wechat-api');
const urls = require('../data/urls');
const caseId = require('../data/caseId');
const wechat = {};
module.exports = {
    async shareSign(appid) {
        const redis = this.redis;

        if (wechat[appid]) {
            return wechat[appid];
        } else {

            const key = `gzh:${appid}:cache`;

            const appSecret = await redis.get(key);
            const share = new WechatAPI(appid, appSecret);

            share.registerTicketHandle(getTicketToken, saveTicketToken);

            async function getTicketToken(type) {
                const key = `${caseId}:${type}:weixin_ticketToken_qun:${appid}`;
                const res = await redis.get(key);
                if(res){
                    return JSON.parse(res);
                }else{
                    return null;
                }
            }
            // saveTicketToken
            function saveTicketToken(type, _ticketToken) {
                const key = `${caseId}:${type}:weixin_ticketToken_qun:${appid}`;
                return redis.set(key, JSON.stringify(_ticketToken))
            }
            wechat[appid] = share;
            return wechat[appid];
        }
    }

}