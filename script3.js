const number = prompt("Please enter number:");

// if(number % 2 == 0) {
//     console.log("It is an EVEN number");
// }

// else if(number < 0) {
//     console.log("You have just entered a negative number");
// }

// else {
//     console.log("It is an ODD number");
// }

//TERNARY operator syntax [ Condition_Check ? TRUE : FALSE ]
let result = (number % 2 == 0) ? "It is an EVEN number" : "It is an ODD number";
console.log(result);