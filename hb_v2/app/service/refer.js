'use strict';

const Service = require('egg').Service;

class ReferService extends Service {
    async check() {

        const {
            ctx,
            app
        } = this;

        const referer = ctx.request.header.referer;

        if (app.config.env == 'local') return;

        if (!referer) throw 'referer';

        const domain = referer.split('?')[0];

        
    }

    getReferParam(name) {
        const referer = this.ctx.request.header.referer;
        if(referer){
            return referer.match(new RegExp('[?&]' + name + '=([^?&#]+)', 'i')) ? decodeURIComponent(RegExp.$1) : '';
        }else{
            return null;
        }
    }

    

}

module.exports = ReferService;