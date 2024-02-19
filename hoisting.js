//we can call and access the function even before its declaration this is known as hoisting in java script

console.log(x);
// add(3,3);
console.log(add);

var x = 4;

function add(a,b) {
    let ans = a + b;
    console.log(ans);
}

/*At the time of JS code excution a global ( EXECUTION CONTEXT ) is beign created which has two phases 
FIRST -> Memory allocation to the variables and functions in Local memory of execution context .The undefined 
         placeholder will be putted as the value of all variables and actual structure of functions will be putted as
         value of particular function at memory allocation time.

SECONDS -> Then real execution of code lines after the memory allocated to the variables and functions. In this
         phase the actual value will be assigned to the variables.*/

// Refer to MDN documentation for better understanding
