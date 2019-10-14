'use strict';

const Service = require('egg').Service;

class FilterService extends Service {
    async expire() {
        const {
            ctx
        } = this;

        const {
            _t
        } = ctx.request.query;

        const now = Date.now();
        if (now / 100 - parseInt(_t) > 120) {
           throw 404; 
        }

    }
}

module.exports = FilterService;