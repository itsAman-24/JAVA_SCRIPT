// Array Destructuring is used to unpack the values of an array inside variables

//STORING ELEMENTS INSIDE DIFFERENT VARIABLES USING TRADITIONAL JS VERSION
let array = [1,2,3,4,5,6,7];

// let val1 = array[0];
// let val2 = array[1];
// let val3 = array[2];
// let val4 = array[3];

// console.log(val1);
// console.log(val2);
// console.log(val3);
// console.log(val4);


//STORING ELEMENTS INSIDE DIFFERENT VARIABLES USING MODERN JS VERSION
let array2 = [1,2,3,4,5,6,7];

let [val1 , val2 , val3 ,val4] = array2;

// console.log(val1);
// console.log(val2);
// console.log(val3);
// console.log(val4);
 
let [value1 ,, ...rest] = array2;  //first value form the array will br inside value1 , second will be ignored and rest will be inside rest variable

console.log(value1);
console.log(rest);



