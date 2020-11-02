class Point {
    constructor(private _x?: number, private _y?: number) {
    }

    draw(): void {
        console.log("X: " + this._x + ", Y: " + this._y);
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        if(value < 0) {
            throw new Error("value cannot be less than 0");
        }

        this._x = value;
    }
}

let point = new Point(1, 2);
let x: number = point.x;
point.x = 10;
console.log(x);
point.draw();