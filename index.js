// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle, Bean } = require("./shape/shape.js");

//Function for writing to file
//file starts as empty string
//file needs width and height
// wrap text so that font input layers on top of shape
// take user input for shape and insert it to svg file
// checks user input from choices and add color and shape to svg string
//send svg string data to new file with same name as the users text input

// an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What Text would you liek the logo to display? (Max 4 characters)",
    name: "text",
  },
  {
    type: "input",
    message:
      "What color would you like the text to be? (Color Keyword or Hexidecimal input)",
    name: "textColor",
  },
  {
    type: "list",
    message: "What shape would you like your logo to be?",
    choices: ["Triangle", "Square", "Circle", "Bean"],
    name: "shape",
  },
  {
    type: "input",
    message:
      "What color do you want the shape to be? (Color Keyword or Hexidecimal input)",
    name: "contribute",
  },
];

//function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    if (answers.text.length > 4) {
      console.log("Text display entry must be less than 4 characters!");
    } else {
      writeToFile("logo.svg", answers);
    }
  });
}

// Function call to initialize app
init();
