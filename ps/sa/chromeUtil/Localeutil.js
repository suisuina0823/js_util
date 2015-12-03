// namespace:
this.ps = this.ps || {};

(function () {
    /**
     * extension用
     * @class Localeutil
     * @constructor
     **/
    var Localeutil = function () {
    };

    Localeutil.param = null;

    /**
     * 対応言語を返します
     * @return {String}
     */
    Localeutil.getLocale = function () {
        var returnStr = "en";
        var ui_locale = chrome.i18n.getMessage('@@ui_locale');
        if (ui_locale.match(/^fr/)) {
            returnStr = "fr";
        } else if (ui_locale.match(/^ja/)) {
            returnStr = "ja";
        } else {
            //en
        }
        return returnStr;
    };

    ps.Localeutil = Localeutil;
}());