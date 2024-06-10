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