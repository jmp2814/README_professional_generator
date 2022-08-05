// TODO: Include packages needed for this application
const fs = require("fs/promises");
const inquirer = require("inquirer");

// format of the README.md that will be generated
const generateMarkdown = data => {
    return `# ${data.title} 
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)
## Description
${data.description} 
## Table of Contents
* [Installation](#installation-process)
* [Usage](#usage)
* [Contribute](#contribute)
* [Test](#test)
* [GitHub](#github)
* [Email](#email) 
## Installation Process
${data.install} 
## Usage
${data.usage} 
## Contribute
${data.contribute} 
## Test
${data.test}
## GitHub
https://github.com/${data.github}/ 
## Email
${data.email}`;
}
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Please give a brief description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "What steps are needed to install your project?",
        name: "install",
        default: "npm start",
    },
    {
        type: "input",
        message: "How will your project be used?",
        name: "usage",
    },
    {
        type: "input",
        message: "How can people contribute to your project?",
        name: "contribute",
    },
    {
        type: "input",
        message: "Are there any special test instructions?",
        name: "test",
        default: "npm test",
    },
    {
        type: "list",
        message: "What license will you be using for this project?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
];


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then(responses => {
            console.log(responses)
            // TODO: Create a function to write README file
            fs.writeFile('README.md', generateMarkdown(responses))
                .then(() => console.log("Success"))
                .catch((e) => console.log(e));
        });
}

// Function call to initialize app
init();
