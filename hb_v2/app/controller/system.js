'use strict';

const Controller = require('egg').Controller;

class SystemController extends Controller {
    async health() {
        this.ctx.body = '';
    }
}

module.exports = SystemController;