export class Point {
    constructor(private _x?: number, private _y?: number) {
    }

    draw(): void {
        console.log("X: " + this._x + ", Y: " + this._y);
    }
}