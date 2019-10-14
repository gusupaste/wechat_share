'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller
  } = app;

  //url
  router.get('/j', controller.jump.index);
  router.get('/t', controller.jump.index);
  router.get('/g', controller.display.index);
  router.get('/d', controller.display.index);
  router.get('/share', controller.wx.shareWx.index);

  router.get('/case/info', controller.info.echo);

  router.get('/sys/health', controller.system.health);

  router.get('/url/share', controller.wx.shareWx.shareLink);

  //真假分享
  router.get('/x', controller.wx.shareWx.x);
  router.get('/f', controller.wx.shareWx.index);
  router.get('/case/info/s', controller.wx.shareWx.info);
  router.get('/share/config', controller.wx.shareWx.shareConfig);

  //jq bmd裂变
  router.get('/f/bmd/lb', controller.jqShare.bmdLb.index);
  router.get('/f/q', controller.jqShare.bmdLb.index);
  router.get('/f/ios', controller.jqShare.bmdLb.index);
  router.get('/f/wx.js', controller.jqShare.bmdLb.index);
  router.get('/case/info/s/ios', controller.jqShare.bmdLb.info);

  //jq bmd bx
  router.get('/f/bmd/bx', controller.jqShare.bmdBx.index)
  router.get('/case/info/bmd/bx', controller.jqShare.bmdBx.info);

  //jq wx
  router.get('/f/jq', controller.jqShare.shareJq.index);
  router.get('/case/info/jq', controller.jqShare.shareJq.info);

  router.get('/url/jump', controller.wx.link.jump);

  router.get('/f/jq/bx', controller.jqShare.bxJq.index);
  router.get('/case/info/jq/bx', controller.jqShare.bxJq.info);

  //借犭
  router.get('/jq/sougo', controller.jq.sogo.echo);
  router.get('/jq/sougo/map', controller.jq.sogo.sogomap);
  router.get('/jq/sougo/weimob', controller.jq.sogo.weimob);
  router.get('/jq/sougo/pic', controller.jq.sogo.sogopic);

  //养
  router.get('/train/domian', controller.trainDomain.echo);

  router.get('/test', controller.test.echo);

  router.post('/record', controller.record.add);
};