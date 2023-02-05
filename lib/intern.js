const Employee = require('./employee')
const fs = require('fs');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

const makeIntern = function(newIntern) {
    return `<div class="card m-2" style ="width: 15rem; height: 15rem;"> 
    <div class="card-header bg-primary text-white p-3">
    <div class="name">${newIntern.getName()}</div>
    <p class="card-text">${newIntern.getRole()} </p>
    </div>
    <ul class="list-group m-auto" style="width: 14rem;">
      <li class="list-group-item">ID: ${newIntern.getID()}</li>
      <li class="list-group-item">Email: <a href="mailto:${newIntern.getEmail()}">${newIntern.getEmail()}</a></li>
      <li class="list-group-item">School:${newIntern.getSchool()}</li>
    </ul>
</div>`

}

module.exports = {
    Intern,
    makeIntern
}
