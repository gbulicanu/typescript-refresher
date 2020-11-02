class Point {
    constructor(private x?: number, private y?: number) {
    }

    draw(): void {
        console.log("X: " + this.x + ", Y: " + this.y);
    }

    getX(): number {
        return this.x;
    }

    setX(value: number): void {
        if(value < 0) {
            throw new Error("value cannot be less than 0");
        }

        this.x = value;
    }
}

let point = new Point(1, 2);
let x = point.getX();
point.setX(10);
console.log(x);
point.draw();