class Point {
    constructor(private x?: number, private y?: number) {
    }

    draw(): void {
        console.log("X: " + this.x + ", Y: " + this.y);
    }

    getX(): number{
        return this.x;
    }
}

let point = new Point(1, 2);
let x = point.getX();
console.log(x);
point.draw();