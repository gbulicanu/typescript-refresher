var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
        return 0;
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
