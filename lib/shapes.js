// lib/shapes.js

// creating class for shape
class Shape {
    constructor() {
        // input from user for color of shape
        this.color = '';
    }
    // setting the color of the shape
    setColor(color) {
        this.color = color;
    }
}

// Circle Class
class Circle extends Shape {
    render() {
        // Return circle with the SVG code from W3 schools. Also set specific color with input from user.
        return `<circle r="75" cx="150" cy="115" fill="${this.color}" />`;
    }
}

// Triangle class
class Triangle extends Shape {
    render() {
        // Return triangle with the polygon points from W3 schools. Also set specific color with input from user.
        return `<polygon points="150, 10 275, 190 25, 190" fill="${this.color}" />`;
    }
}


// Square Class
class Square extends Shape {
    
    render() {
        // Return square with x and y left default at 0. Also set specific color with input from user.
        return `<rect x=75 y=40 width="150" height="150" fill="${this.color}" />`;
    }
}

// Export the shape classes for use in other modules
module.exports = { Circle, Triangle, Square };
