const Employee = require('./lib/employee');
const {Engineer} = require('./lib/engineer');
const {Manager} = require('./lib/manager');
const {Intern} = require('./lib/intern');
const fs = require('fs');
const inquirer = require('inquirer');
const generateTemplate = require('./src/buildTemplate');

let allEmployees = [];

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
        message: 'What is the name of your current school?',
        name: 'school',
        when: (answers) => answers.position === 'Intern'
    },
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'officenum',
        when: (answers) => answers.position === 'Manager'
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
        when: (answers) => answers.position === 'Engineer'
    },
    
];

function addEmployee() {
    inquirer
    .prompt([{
        type: 'list',
        message: 'Do you want to add another employee',
        name: 'add',
        choices: [`I'm ready to build a profile for my team`, `I'd like to add another employee`]
    }
    ])
    .then(answers => {
        if (answers.add === `I'm ready to build a profile for my team`) {
            console.log(allEmployees);
            const template = generateTemplate(allEmployees);
                fs.writeFile('./dist/index.html', template, (err) =>
                err ? console.error(err) : console.log('Success!')
              );
        } else {
            // runs init again
            init();
        }
    })
}

function init() {
    inquirer
    .prompt(questions)
    .then(answers => {
    if (answers.position === 'Engineer') {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        allEmployees.push(engineer);
    } else if (answers.position === 'Intern') {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        allEmployees.push(intern);
    } else {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officenum)
       allEmployees.push(manager);
    }

    addEmployee();

    })
}


init();