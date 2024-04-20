let Data = "Secrete data of website";

class user {
    constructor(name,age,email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    viewData() {
        console.log(Data);
    }
}


class admin extends user {
    constructor(name,age,email) {
        super(name,age,email);
    }

    editData() {
        Data = "Some new changed data";
    }
}

let user1 = new user("Karan",34,"xyz@gmail.com");

let admin1 = new admin("Admin" ,56 , "admin@clg.com");
