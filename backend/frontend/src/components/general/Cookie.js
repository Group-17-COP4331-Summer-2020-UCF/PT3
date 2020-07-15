export default class Cookie {
    static saveCookie(name, value) {
        console.log(name, " saved!");
        var minutes = 60;
        var date = new Date();
        date.setTime(date.getTime() + (minutes * 60 * 1000));
        document.cookie = name + "=" + value + ";expires=" + date.toGMTString();
    }
    static getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            // eslint-disable-next-line
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            // eslint-disable-next-line
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
}