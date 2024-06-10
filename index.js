//Loading the inquirer package
const inquirer = require('inquirer');
//Grabbing the generateLogo function from the lib folder to create the logo
const generateLogo = require('./lib/generateLogo');

// Prompting the user for input on logo
inquirer.prompt([
    {  // 3 character logo text input
        type: 'input',
        name: 'text',
        message: 'Enter the logo text you would like to use? (3 Characters Max)',
        validate: input => input.length <= 3 ? true : `Text must be 3 characters or less`
    },
    {   // text color for logo
        type: 'input',
        name: 'textColor',
        message: 'Enter the color you would like to use for the logo text?'
    },
    {   // choosing shape for the background of the logo
        type: 'list',
        name: 'shape',
        message: 'What shape for the logo would you like to use?',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {   // choosing the color of the shape
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the color you would like to use for the logo shape?'
    }
    //Calling generateLogo function. Using answers as object to bring in user inputs.
]).then(answers => {
    generateLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor);
});
