(function () {
    var now = parseInt(M.getParam('now')) * 1000 || 0;
    var fromx = M.getParam('fromx') || false;
    if (!fromx) {
        var time = (+new Date());
        if (time - now > (60000 * 5)) {
            location.href = 'https://m.baidu.com';
            return false;
        }
    }
    document.title = '';
    window.g_pc = {};
    try {
        g_pc = JSON.parse(atob(decodeURIComponent(decodeURIComponent(M.getParam('__pc')))));
    } catch (e) {
        g_pc = {};
    }
    var dUrl = g_pc.d;
    var sUrl = g_pc.s;
    if (dUrl && sUrl) {
        if (!/^http/i.test(dUrl)) {
            dUrl = 'https://resxz.eqh5.com/' + dUrl;
        }
        if (!/^http/i.test(sUrl)) {
            sUrl = 'https://resxz.eqh5.com/' + sUrl;
        }
        M.loadJS(dUrl, function () {
            // if (window.data.attached && window.data.attached['back_api']) {
            //     window.data.attached['back_api'] =
            //         'https://resxz.eqh5.com/qngroup001/u4420461/1/0/2fceac2a3d245e6cb5986a84599b5ce7.js';
            // }
            M.loadJS(sUrl);
        });
    }
}());