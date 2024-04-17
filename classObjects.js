// class car {

//     constructor(brand,mileage) {
//         console.log("creating a new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }

//     start() {
//         console.log("starting")
//     }

//     stop() {
//         console.log("stoping");
//     }


// }

// let BMW = new car("BMW",45);  // creating a new object


const employ1 = {
    var1 : "name",
    var2 : "salary"
}

const employ2 = {
    var1 : "name",
    var3 : "age"
}

employ1.__proto__ = employ2;   // creating a manual prototype for employ1 as its prototype employ2