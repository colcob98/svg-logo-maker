const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "list",
    message: "Please select a logo shape.",
    choices: ["Circle", "Square", "Triangle"],
    name: "shape",
  },
  {
    type: "input",
    message: "Please select the color of the previously selected shape.",
    name: "shapeColor",
  },
  {
    type: "input",
    name: "logoText",
    message: "Please enter your text for the logo (No more than 3 characters).",
    validate: (text) =>
      text.length <= 3 || "Please enter text no longer than 3 characters.",
  },
  {
    type: "input",
    name: "textColor",
    message: "Please enter your desired text color.",
  },
];

function initPrompting() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
  });
}

initPrompting();
