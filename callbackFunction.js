//WAP to calculate the square for a number using for each loop which requires a call back function

let array = [2,3,4,5,1,8,9];

array.forEach( (val) => {
    console.log(val * val);
} )



// second way 
// const calcu_sqaure = (val) => { console.log(val * val);
// }

// array.forEach(calcu_sqaure);
