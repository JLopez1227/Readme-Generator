// TODO: Include packages needed for this application
const fs = require ('fs')
const inquirer = require ('inquirer')
const generateMarkdown = require ('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your README?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Description of your README',
        name: 'description'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then( function (answers){
        console.log(answers)
        var markDown = generateMarkdown(answers)
        console.log(markDown)
        fs.writeFileSync('README2.md', markDown)
    })

}

// Function call to initialize app
init();
