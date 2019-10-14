'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
    async echo() {
        const {
            ctx,
            service,
            app
        } = this;
        let res = await app.redis.srandmember('2:gzh:wx6797180ed00efd71:jikemx.com:share_link', 1);

    }
}

module.exports = TestController;