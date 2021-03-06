'use strict';

const Service = require('egg').Service;
const caseId = require('../data/caseId');
const moment = require('moment');

class UrlService extends Service {
    async getAppid(domain) {
        const {
            app
        } = this;
        const key = `${caseId}:gzh:${domain}`;

        const res = await app.redis.srandmember(key, 1);
        return res.length > 0 ? res[0] : '';
    }

    async getRandomLink(appid, type, domain) {
        const {
            app,
            config
        } = this;
        if (!appid && type == 'playing_link') appid = config.defaultAppid;
        appid = appid ? appid : await this.getAppid(domain);
        const key = `${caseId}:gzh:${appid}:${domain}:${type}`;
        const res = await app.redis.srandmember(key, 1);
        return res.length > 0 ? res[0] : '';
    }

    getDomain(url) {
        const r = url.match(/(?<=:\/\/)(.+)(?=\/)/);
        return r && r.length ? r[0] : ''
    }

    getRedirectLink(url) {
        return `https://safejmp.urlsec.qq.com/?appid=151&token=f4f73cac4507e6ce&ts=1515412542&url=${encodeURIComponent(url)}`;
    }

    getSpm() {
        var e = "qwertyuiopasdfghjklzxcvbnm1234567890",
            n = [];
        return n.push(e.charAt(Math.floor(Math.random() * e.length))),
            n.push(e.charAt(Math.floor(Math.random() * e.length))),
            n.push(e.charAt(Math.floor(Math.random() * e.length))),
            n.push(e.charAt(Math.floor(Math.random() * e.length))),
            n.push(e.charAt(Math.floor(Math.random() * e.length))),
            n.push(e.charAt(Math.floor(Math.random() * e.length))),
            n.push(e.charAt(Math.floor(Math.random() * e.length))),
            n.join("")
    }

    addParam(url, obj) {
        var p = this.param(obj);
        if (!/\?/.test(url) && !/#/.test(url)) {
            url = url + '?' + p;
        } else if (/\?/.test(url) && !/#/.test(url)) {
            url = url + '&' + p;
        } else if (!/\?/.test(url) && /#/.test(url)) {
            url = url.replace('#', '?' + p + '#');
        } else {
            url = url.replace('?', '?' + p + '&');
        }
        return url;
    }

    param(obj) {
        if (typeof obj !== 'object') {
            return;
        }
        var p = [];
        for (var i in obj) {
            p.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
        }
        return p.join('&');
    }

    isAndroid() {
        const {
            ctx
        } = this;
        const u = ctx.headers['user-agent'];
        return u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
    }

    rc4(data, key) {
        var seq = Array(256); //int
        var das = Array(data.length); //code of data
        for (var i = 0; i < 256; i++) {
            seq[i] = i;
            var j = (j + seq[i] + key.charCodeAt(i % key.length)) % 256;
            var temp = seq[i];
            seq[i] = seq[j];
            seq[j] = temp;
        }

        for (var i = 0; i < data.length; i++) {
            das[i] = data.charCodeAt(i)
        }
        for (var x = 0; x < das.length; x++) {
            var i = (i + 1) % 256;
            var j = (j + seq[i]) % 256;
            var temp = seq[i];
            seq[i] = seq[j];
            seq[j] = temp;
            var k = (seq[i] + (seq[j] % 256)) % 256;
            das[x] = String.fromCharCode(das[x] ^ seq[k]);
        }
        return das.join('');
    }

    signUrl(url) {
        const now = moment.utc().add(8, 'h');
        const key = `${this.config.signsalt}${now.format('YYYY-MM-DD')}`;
        return this.rc4(url, key)
    }

    replaceUrl(templ, url) {
        return templ.replace('{encodeUrl}', encodeURIComponent(url)).replace('{rencodeUrl}', encodeURIComponent(encodeURIComponent(url)));
    }
}

module.exports = UrlService;