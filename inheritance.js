//Example of inheritance

class person {

    age = 34;

    constructor(name) {
       this.name = name;
    }

    sleep() {
        console.log("sleep");
    }

    eat() {
        console.log("eat");
    }

    returningFunc() {
        return this.age;
    }
}


class engineer extends person {

    constructor(name,branch) {
        super(name);  //super() keyword is used to access the constructor of parent class inside derived class or child class ,, it is must to used before using this keyword and before returning from child class constructor
        this.branch = branch;
    }

    work() {
        super.eat();  //we can also use super() where we want to execute and get returning value from parent class's method first then excuting child's method

        console.log("working and solving problems");
    }

    ageBtao() {
        super.returningFunc();
        console.log("age is",age);
    }
}

let amanObj = new engineer();

let human = new person();