const Employee = require('./employee')

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

const newManager = function(newManager) {
    fs.appendFile
}