// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

inquirer
    .prompt([
        {
            type: "input",
            name: "userGitHub",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "userEmail",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "title",
            message: "What is the title of your Project?"
        },
        {
            type: "input",
            name: "userDescription",
            message: "Please write a short description of your project"
        },
        {
            name: "userLicense",
            message: "What kind of license should your program have?",
            type: "list",
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "none"]
        },
        {
            type: "input",
            name: "userDependencies",
            message: "What command should be run to install dependencies?",
            default: "npm i"
        },
        {
            type: "input",
            name: "runTest",
            message: "What command should be run to run tests?",
            default: "npm test"
        },
        {
            type: "input",
            name: "userKnow",
            message: "What does the user need to know about using the repo?"
        },
        {
            type: "input",
            name: "userContribute",
            message: "What does the user need to know about contributing to the repo?"
        }
    ])

.then(function (response){
        

    let fileName = response.title.toLowerCase().split(' ').join('') + ".md";

    fs.writeFile(fileName, generateMarkdown(response), (err) => {
        if (err) {
            return console.log("error");
        }
    });

});
