// lib.generateLogo.js

// fs for reading and writing files.
const { readFile, writeFile } = require('fs/promises');

// importing shape information from the shapes.js
const { Circle, Triangle, Square } = require('./shapes');

// Mapping out the shape types
const shapeMap = {
    'Circle': Circle,
    'Triangle': Triangle,
    'Square': Square,
};

// generates logo users input of text, text color, shape type, and shape color
function generateLogo(text,textColor, shapeType, shapeColor) {
    // Shape validation
    if (!shapeMap[shapeType]) {
        throw new Error('Invalid shape type');
    }
    // creating new shape
const shape = new shapeMap[shapeType]();
shape.setColor(shapeColor);

// generating logo using w3 SVG string guidance
const logoContent = `
<svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()} <!-- LOGO SHAPE -->
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text> <!-- TEXT for LOGO-->
</svg>
`;

// Export the Logo for use in other modules
module.exports = generateLogo;
