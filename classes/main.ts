interface Point {
    x: number;
    y: number;
}

let drawPoint = (point: Point) => {
    // ...
};

// violate cohesion
let getDistance = (pointA: Point, pointB: Point) => {
    // ...
}

drawPoint({
    x: 1,
    y: 2
});