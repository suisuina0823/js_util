/**
 * AnimationAssetThree
 * Three.js r47用のアニメーション設定クラスになります。
 * 速度化速度によるアニメーションと、目標地点に近づいていくアニメーションを設定します。
 * 使用時は_targetになるオブジェクトに速度vx、vy、vz、加速度ax、ay、azプロパティを追加して、初期値を設定してください。
 * @version 1.0.0
 * @author sa
 * @constructor
 */
function AnimationAssetThree() {
}

AnimationAssetThree.prototype = {

    _radNum:0,

    setMove:function (_target, _ax, _ay, _az) {
        //加速度設定
        _target.ax += _ax;
        _target.ay += _ay;
        _target.az += _az;

        //加速度から速度と位置を算出
        _target.position.x += _target.vx += _target.ax;
        _target.position.y += _target.vy += _target.ay;
        _target.position.z += _target.vz += _target.az;

        //境界にきたら反転
        (_target.position.x > 2000)? _target.position.x -= 4000:
        (_target.position.x < -2000 )?_target.position.x += 4000:-2000;
        (_target.position.y > 2000)? _target.position.y -= 4000:
        (_target.position.y < -2000 )?_target.position.y += 4000:-2000;
        (_target.position.z > 2000)? _target.position.z -= 4000:
        (_target.position.z < -2000 )?_target.position.z += 4000:-2000;

        //加速度と速度の減衰
        _target.ax *= 0.96; _target.ay *= 0.96; _target.az *= 0.96;
        _target.vx *= 0.92; _target.vy *= 0.92; _target.vz *= 0.92;
    },

    /**
     * 横移動のアニメーションを設定します
     */
    setSideMove:function(_target, _num, _speed){
        this.setMove(_target, (-0.05 + _num*0.01)*_speed, (-0.05 + _num*0.01)*_speed, (-0.05 + _num*0.01)*_speed );
    },

    /**
     * 横移動逆向きのアニメーションを設定します
     */
    setSideMoveReverse:function(_target, _num, _speed){
        this.setMove(_target, (0.05 + _num*0.01)*_speed, (0.05 + _num*0.01)*_speed, (0.05 + _num*0.01)*_speed );
    },

    /**
     * 縦移動のアニメーションを設定します
     */
    setVerticalMove:function(_target, _num, _speed){
        this.setMove(_target, (-0.05 + _num*0.01)*_speed, (-0.1 + _num*0.01)*_speed, (-0.05 + _num*0.01)*_speed );
    }

}

window.AnimationAssetThree = AnimationAssetThree;