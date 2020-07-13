export default class Cookie {
    static saveCookie(name, value) {
        console.log(name, " saved!");
        var minutes = 60;
        var date = new Date();
        date.setTime(date.getTime() + (minutes * 60 * 1000));
        document.cookie = name + "=" + value + ";expires=" + date.toGMTString();
    }
    static getCookie(name) {
        var dc = document.cookie;
        var prefix = name + "=";
        var begin = dc.indexOf("; " + prefix);
        if (begin === -1) {
            begin = dc.indexOf(prefix);
            if (begin !== 0) return null;
        }
        else {
            begin += 2;
            var end = document.cookie.indexOf(";", begin);
            if (end === -1) {
                end = dc.length;
            }
        }
        // because unescape has been deprecated, replaced with decodeURI
        //return unescape(dc.substring(begin + prefix.length, end));
        return decodeURI(dc.substring(begin + prefix.length, end));
    }
}