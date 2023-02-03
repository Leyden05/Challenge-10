const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
}

const alex = new Engineer('alex', '4', 'alex@awesomesauce.com', 'github/awesome');

alex.getName();
// engineer.getID();
// engineer.getEmail();

