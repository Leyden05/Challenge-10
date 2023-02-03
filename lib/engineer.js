const Employee = require('./employee');
const fs = require('fs');

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

const makeEngineer = function(newEngineer) {
    fs.appendFile('./dist/index.html', `<div class="card m-2" style ="width: 10rem; height: 15rem;"> 
    <div class="card-header bg-primary text-white p-3">
    <div class="name">${newEngineer.getName()}</div>
    <p class="card-text"
    ${newEngineer.getPosition()}
    </div>
    <ul class="list-group m-auto" style="width: 14rem;">
      <li class="list-group-item">ID: ${newEngineer.getID()}</li>
      <li class="list-group-item">Email: <a href="mailto:${newEngineer.getEmail()}">${newEngineer.getEmail()}</a></li>
      <li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/${newEngineer.getGithub()}">${newEngineer.getGithub()}</a></li>
    </ul>
</div>` ,(err) => console.log(err));

}
// makeEngineer();
module.exports = {
    Engineer,
    makeEngineer
}

// makeEngineer();
// const alex = new Engineer('alex', '4', 'alex@awesomesauce.com', 'github/awesome');



