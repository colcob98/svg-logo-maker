const inquirer = require("inquirer");
const fs = require("fs");
const { Square, Triangle, Circle } = require("./lib/shapes");

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

function renderLogo(data) {
  console.log(data);
  console.log(data.shape);
  let shape;
  switch (data.shape) {
    case "Square":
      shape = new Square();
      break;
    case "Triangle":
      shape = new Triangle();
      break;
    case "Circle":
      shape = new Circle();
      break;
  }

  shape.setColor(data.shapeColor);

  const setSVG = `<?xml version="1.0" standalone="no"?>
  <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

 ${shape.render()}
 
 <text x="115" y="115" text-anchor="middle" dominant-baseline="middle" font-size="45" font-weight="bold" fill="${
   data.textColor
 }">
 <tspan>${data.logoText}</tspan>
</text>
</svg>
 `;

  fs.writeFile("logo.svg", setSVG, (error) => {
    if (error) {
      console.log("Could not generate svg file.");
    } else {
      console.log("Logo successfully generated as 'logo.svg'.");
    }
  });
}

function initPrompting() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    renderLogo(response);
  });
}

initPrompting();
