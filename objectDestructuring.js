// Object destructuring is used to unpack the values inside different variables
const obj  = {
    firstName : "Aman",
    lastName : "Pandey",
    showAge : {
        age : 21,
        year : 2003
    }
}

//destructuring an object (showAge) inside the destruction of another object (obj)
// const {firstName , lastName , showAge : {age , year} , showAge} = obj;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(year);
// console.log(showAge);

const {firstName , ...rest} = obj;
console.log(firstName);
// console.log(lastName);
console.log(rest);

