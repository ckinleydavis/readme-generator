// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
    type: "input",
    message: "What is the developer's name?",
    name: "devname",
    },
    {
    type: "input",
    message: "What is the applications's name?",
    name: "appname",
    },
    {
    type: "input",
    message: "Briefly describe the application's purpose:",
    name: "purpose",
    },
    {
    type: "input",
    message: "Briefly describe the problem for which the application solves:",
    name: "problem",
    },
    {
    type: "input",
    message: "What did you learn while developing the application?",
    name: "learned",
    },
    {
    type: "input",
    message: "What challenges did you run into during development?",
    name: "challenges",
    },
    {
    type: "input",
    message: "How do you use the application?",
    name: "usage",
    },
    {
    type: "input",
    message: "How do you install the application?",
    name: "installation",
    },
    {
    type: "input",
    message: "Where does one report issues?",
    name: "issues",
    },
    {
    type: "input",
    message: "What features will be implemented in the future?",
    name: "newfeatures",
    },
    {
    type: "input",
    message: "How does one make contributions?",
    name: "contribute",
    },
    {
    type: "input",
    message: "Where is the application deployed?",
    name: "deployment",
    }
];

// TEST: Questions array
// for (const value of questions) console.log(value);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fileName = "README.md";

    fs.writeFile(fileName, process.argv[2], (err, data) =>
        err ? console.error(err) : console.log(data)
    );

    // Print any error messages to the console
    if (fs.err) {
        return console.log(fs.err);
    }
    console.log("No error messages.");
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(
            writeToFile()
        );
}

// Function call to initialize app
init();
