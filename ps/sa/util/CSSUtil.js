// namespace:
this.ps = this.ps || {};

(function () {
    /**
     *
     * @class CSSUtil
     * @constructor
     **/
    var CSSUtil = function () {
    };

    CSSUtil.param = null;

    /**
     * px付の数値をpxなしにして返します
     * @param _numpx
     */
    CSSUtil.replaceNum = function (_numpx) {
        return Number(_numpx.substr(0, _numpx.length-2));
    };

    ps.CSSUtil = CSSUtil;
}());