'use strict';

const Controller = require('egg').Controller;

class DisplayController extends Controller {
    async index() {
        const {
            ctx,
            service,
            app
        } = this;

        const _shareUrl = app.config.env == 'local' ? 'http://localhost:7001' : `https://${ctx.hostname}`;
        const dUrl = app.config.env == 'local' ? 'http://localhost:7001/index.html' : 'https://lbbb.oss-cn-hangzhou.aliyuncs.com/hb_v3/d.html'

        await service.refer.check();

        ctx.set({
            'content-type': "application/x-javascript"
        });

        ctx.body = `
        var _shareUrl = '${_shareUrl}';
        function _getParam(name) {
            return location.href.match(new RegExp('[?&]' + name + '=([^?&#]+)', 'i')) ? decodeURIComponent(RegExp.$1) : '';
        }
        var ua = navigator.userAgent.toLowerCase();
        if (/micromessenger/.test(ua)) {
            var _lay=document.createElement('div');_lay.setAttribute('style','width:100%;height:2048px;font-size:1.4em;position:absolute;background-color:white;z-index:99999999;left:0;top:0;');_lay.innerHTML='<div style="color:black;text-align:center;font-size:1.3em">loading...</div>';if(document.body)document.body.appendChild(_lay);document.title="正在打开...";var xhr=new XMLHttpRequest;var html=null;function getParam(name,url){var r=new RegExp('(\?|#|&)'+name+'=(.*?)(#|&|$)');var m=(url||location.href).match(r);return(m?m[2]:'')}function render(){var a=document.open("text/html","replace");a.write(html);a.close()}xhr.onload=function(){html=xhr.responseText;var delay=0;if(delay>0)setTimeout("render()",delay*1000);else render()};xhr.open("GET","${dUrl}?t="+Date.now(),!0);xhr.send();
        }`
    }
}

module.exports = DisplayController;