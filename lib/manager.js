const Employee = require('./employee');
const fs = require('fs');

class Manager extends Employee {
    constructor(name, id, email, offnum) {
        super(name, id, email);
        this.offnum = offnum;
    }

    getOffNum() {
        return this.offnum;
    }

    getPosition() {
        return 'Manager';
    }
}

const makeManager = function(newManager) {
    fs.appendFile('./dist/index.html', `<div class="card m-2" style ="width: 10rem; height: 15rem;"> 
    <div class="card-header bg-primary text-white p-3">
    <div class="name">${newManager.getName()}</div>
    <p class="card-text"
    ${newManager.getPosition()}
    </div>
    <ul class="list-group m-auto" style="width: 14rem;">
      <li class="list-group-item">ID: ${newManager.getID()}</li>
      <li class="list-group-item">Email: <a href="mailto:${newManager.getEmail()}">${newManager.getEmail()}</a></li>
      <li class="list-group-item">Office #: ${newManager.getOffNum()}</li>
    </ul>
</div>` ,(err) => console.log(err));

}

module.exports = {
    Manager,
    makeManager
}
