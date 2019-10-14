'use strict';

const Controller = require('egg').Controller;

class InfoController extends Controller {
  async echo() {

    this.ctx.set({
      'content-type': "application/x-javascript"
    });

    this.ctx.body = `
    window.data = {
      "attached": {
        "case": "1-hb",
        "signmode": "jsb",
        "back_api": "https://akqgyc.com/backup/args/xj_back.php",
        "ad_share": {
          "pyq": [0, 0],
          "qun": [0, 0, 0, 0, 0, 0]
        },
        "skinUrl": "https://f.duoxj.com//hb_v3/js/i_d_hw.js",
        "needWhite": false,
        "group_ad": true,
        "iosGoAdUrl": ""
      },
      "cnzz": "",
      "hm_d": "a71a8a3c027d8f8703df08f83e95ef39"
    }
    `
  }
}

module.exports = InfoController;