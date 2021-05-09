// namespace:
this.ps = this.ps || {};

(function () {
    /**
     *
     * @class CSSUtil
     * @constructor
     **/
    var ArrayUtil = function () {
    };

    /**
     * px付の数値をpxなしにして返します
     * 
     * @param _numpx
     */
    ArrayUtil.object_array_sort = function (data,key,order,fn) {
        //デフォは降順(DESC)
        var num_a = -1;
        var num_b = 1;

        //指定があれば昇順　(ASC)
        if(order === 'asc'){
            num_a = 1;
            num_b = -1;
        }

        data = data.sort(function(a, b){
            var x = a[key];
            var y = b[key];
            if (x > y) return num_a;
            if (x < y) return num_b;
            return 0;
        });

        fn(data); // ソート後の配列を返す
    };

    ps.ArrayUtil = ArrayUtil;
}());