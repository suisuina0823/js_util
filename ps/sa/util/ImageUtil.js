// namespace:
this.ps = this.ps || {};

(function () {
    /**
     *
     * @class ImageUtil
     * @constructor
     **/
    var ImageUtil = function () {
    };

    /**
     * ターゲットノードのimgをIEでもフェードアウトできるように設定します
     * @param _target
     */
    ImageUtil.setMSIEAlphaPNG = function (_target) {
        //png alpha IE用
        if(navigator.userAgent.indexOf("MSIE") != -1) {
            $(_target).each(function() {
                if($(this).attr('src').indexOf('.png') != -1) {
                    $(this).css({ 'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + $(this).attr('src') + '", sizingMethod="scale");'});
                }
            });
        }
    };

    ps.ImageUtil = ImageUtil;
}());