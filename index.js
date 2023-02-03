const Employee = require('./employee');
const engineer = require('./lib/engineer');
const manager = require('./lib/manager');
const intern = require('./lib/intern');
const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your ID #?',
        name: 'id',
    }, 
    {
        type: 'input',
        message: 'What is your employee email?',
        name: 'email'
    },
    {
        type: 'list',
        message: 'What is your current position?',
        name: 'position',
        choices: ['Engineer','Intern', 'Manager',]
    },
    {
        type: 'input',
        message: 'Describe the contributions outside parties made:',
        name: 'school'
    },
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'officenum'
    },
    {
        type: 'input',
        message: 'Describe the contributions outside parties made:',
        name: 'github'
    },
    
];

function init() {
    inquirer
    .prompt(questions)
    .then(answers => {

    })
}

init();