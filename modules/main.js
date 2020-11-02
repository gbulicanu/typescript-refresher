var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log("X: " + this._x + ", Y: " + this._y);
    };
    return Point;
}());
var point = new Point(1, 2);
point.draw();
