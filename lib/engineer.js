const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getPosition() {
        return 'Engineer';
    }
}

const newEngineer = function(newEngineer) {
    fs.appendFile
}


// const alex = new Engineer('alex', '4', 'alex@awesomesauce.com', 'github/awesome');



