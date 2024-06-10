//lib/shapes.test.js

//importing shapes class
const { Circle, Triangle, Square } = require ('./shapes')

// Testing the Circle class
test('Circle renders correctly', () => {
    // Create a new Create
    const shape = new Circle();

    // Set color of the new Circle
    shape.setColor('red');

    // Test if Circle generates the correct SVG string with the correct fill color also
    expect(shape.render()).toEqual('<circle r="75" cx="150" cy="115" fill="red" />');
});

// Testing the Triangle class same as circle class rendering
test('Triangle renders correctly', () => {
    // Create a new Triangle
    const shape = new Triangle();

    // Set color of the new Triangle
    shape.setColor('red');

    // Test if Triangle generates the correct SVG string and the correct fill color
    expect(shape.render()).toEqual('<polygon points="150, 10 275, 190 25, 190" fill="red" />');
});


// Testing Square class same as Triangel and Circle class to ensure rendering
test('Square renders correctly', () => {
    // Create a new Square
    const shape = new Square();

    // Set color of the new Square
    shape.setColor('red');

    // Test if Square generates the correct SVG string and fill color
    expect(shape.render()).toEqual('<rect x=75 y=40 width="150" height="150" fill="red" />');
});
