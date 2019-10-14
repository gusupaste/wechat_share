'use strict';

const Controller = require('egg').Controller;

class RecordController extends Controller {
  async add() {
    const {
      ctx,
      service,
      app
    } = this;

    const {
      event,
      id
    } = ctx.request.body;

    const site = service.refer.getReferParam('_d')
    
    // 1. 将event
    const siteSetKey = `site:set`
    const recordSetKey = `site:${site}:record:set`;
    const recordKey = `site:${site}:event:${event}:id:${id}`
    await app.redis.sadd(siteSetKey, recordSetKey);
    await app.redis.sadd(recordSetKey, recordKey);
    await app.redis.incr(recordKey);

    ctx.body = {};
  }
}

module.exports = RecordController;