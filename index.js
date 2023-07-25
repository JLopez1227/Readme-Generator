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
    },
    {
        type: 'input',
        message: 'How to install the app?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How do you use this app?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What kind of license will you use?',
        name: 'license'
    },
    {
        type: 'input',
        message: 'Who made contributions to your project?',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'Are there any test for your project?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What is your GitHub?',
        name: 'github',
        default: 'JLopez1227'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
        default: 'josuenmilopez27@gmail.com'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then( function (answers){
        var markDown = generateMarkdown(answers)
        fs.writeFileSync('genREADME.md', markDown)
    })

}

// Function call to initialize app
init();
