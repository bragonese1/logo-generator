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

