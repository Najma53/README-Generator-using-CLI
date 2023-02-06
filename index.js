const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

// When a user enters the project title then it is displayed as the title of the README
{
    type: "input",
    message: "Please enter the title of your project",
    name: "title",
},
//  When a user enters a description then this information is added to the sections of the README
{
    type: "input",
    message: "Please enter a brief description of your project",
    name: "description",
},

// When a user eners installation instructions then this information is added to the sections of the README
{
    type: "input",
    message: "Please give a brief description on how to install your project",
    name: "installation",
    default: "N/A"
},
// When a user enters usage information  then this information is added to the sections of the README

{
    type: "input",
    message: "Please enter a brief description on how to use the application",
    name: "usage",
}, 
// When a user eners contribution guidelines then this information is added to the sections of the README

{
    type: "input",
    message: "Please give a brief description on how to contribute to the project",
    name: "contributing",
},
//  When a user enters and test instructions then this information is added to the sections of the README 
{
    type: "input",
    message: "Please give a brief description on how to update for test",
    name: "tests"
},
//  When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled 
{
    type: "list",
    message: "Please choose your licence",
    name: "license",
    choices: ["MIT", "Apache", "GPLv3"]
    
}, 
//  When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
{
    type: "input",
    message: "Please enter your GitHub username",
    name: "github"
},

//  When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
{
    type: "input",
    message: "Please enter your email address where users and contributors can reach you with addtional questions",
    name: "email"
},
//  When a user enters their deployed link, should take it to the page.
{
    type: "input'",
    message: "Please enter the URL link of your deployed site",
    name: "deployed"
},


];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data,
        (err) => err ? console.log(err) : console.log('Readme generated'));
    console.log(data.title);
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile("README.md", generateMarkdown(answers));
            console.log(answers);
        }
        );
}

// function call to initialize program
init();
