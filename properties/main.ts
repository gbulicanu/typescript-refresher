class Point {
    constructor(private x?: number, private y?: number) {
    }

    draw(): void {
        console.log("X: " + this.x + ", Y: " + this.y);
    }

    get X(): number {
        return this.x;
    }

    set X(value: number) {
        if(value < 0) {
            throw new Error("value cannot be less than 0");
        }

        this.x = value;
    }
}

let point = new Point(1, 2);
let x: number = point.X;
point.X = 10;
console.log(x);
point.draw();