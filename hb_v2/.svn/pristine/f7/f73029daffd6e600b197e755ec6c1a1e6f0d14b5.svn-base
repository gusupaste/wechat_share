'use strict';

const Service = require('egg').Service;
const caseId = require('../data/caseId');
const Promise = require('bluebird');
const witeList = require('../data/witeList');
class CheckUrlService extends Service {
  async echo() {


  }

  async checkLink(gzh, type) {
    const {
      app,
      ctx
    } = this;
    const key = `${caseId}:gzh:${gzh}:${type}`;
    let leng = await app.redis.llen(key);

    const jobList = new Array(leng);

    await Promise.mapSeries(jobList, async j => {
      const url = await app.redis.rpop(key);
      if (witeList.indexOf(url) !== -1) {
        await app.redis.lpush(key, url);
        return;
      };
      const check_url = 'https://service.cqfeiqi.com./service/check?url=' + encodeURIComponent(url) + '&type=bridge';
      try {
        const resp = await ctx.curl(check_url, {
          dataType: 'json',
        });
        if (resp.data.status == 0) {
          await app.redis.lpush(key, url);
        }
      } catch (ex) {
        await app.redis.lpush(key, url);
      }
    });

    return app.redis.llen(key);
  }

  async getlink(gzh, type) {
    const {
      app,
      ctx
    } = this;
    const key = `${caseId}:gzh:${gzh}:${type}`;
    const leng = await app.redis.llen(key);

    return app.redis.lrange(key, 0, leng)
  }
}

module.exports = CheckUrlService;