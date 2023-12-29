const inquirer = require('inquirer');
const fs = require('fs');

const questions = []

function initPrompting() {
    inquirer.prompt(questions).then((response)=> {
        console.log(res);
    });
}