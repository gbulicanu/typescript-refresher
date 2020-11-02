class Point {
    x: number;
    y: number;

    draw(): void {
        console.log("X: " + this.x + ", Y: " + this.y);
    }

    getDistance(another: Point): number {
        // ...
        return 0;
    }
}

let point = new Point();
point.x = 1;
point.y = 2;
point.draw();