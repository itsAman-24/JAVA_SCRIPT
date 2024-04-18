class parent {
    constructor(fName,mName) {
        this.fName = fName;
        this.mName = mName;
        console.log("Creating a new object");
    }

    salary() {
        console.log("Salary is 50000");
    }

    bonus() {
        console.log("Bonus is 10000");
    }
}

class child extends parent {
    property() {
        console.log("Property is good");
    }

    style () {
        console.log("Your parent style is inherted by child");
    }
}

//second example of inheritance

class person {
    sleep() {
        console.log("sleep");
    }

    eat() {
        console.log("eat");
    }
}


class engineer extends person {
    work() {
        console.log("working and solving problems");
    }
}

let eng1 = new engineer();