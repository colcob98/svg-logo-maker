const { Square, Triangle, Circle } = require('./shapes');

describe('shapes', () => {
    test("expected rendering of a svg with a blue square", () => {
        const expectedSVG = `<rect x="40" y="40" width="150" height="150" fill="blue" />`
        const square = new Square();
        square.setColor("blue");
        const svg = square.render();
        expect(svg).toEqual(expectedSVG);
    });

    test("expected rendering of a svg with a red triangle", () => {
        const expectedSVG = `<polygon points="115, 25 195, 160 35, 160" fill="red" />`
        const triangle = new Triangle();
        triangle.setColor("red");
        const svg = triangle.render();
        expect(svg).toEqual(expectedSVG);
    });

    test("expected rending of a svg with green circle", () => {
        const expectedSVG = `<circle cx="100" cy="120" r="100" fill="green" />`;
        const circle = new Circle();
        circle.setColor("green");
        const svg = circle.render();
        expect(svg).toEqual(expectedSVG);
    });
})