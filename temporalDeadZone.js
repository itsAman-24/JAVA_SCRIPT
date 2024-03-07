/* Temporal dead zone is time period of let and const variables from where they are assigned with an address
to initialized with a value , the time in between the address allocation and value initialization to let and 
const is known as TEMPORAL DEAD ZONE  . just because of this funtionality of let and const variables we cannot 
use them before their initialisation */

/* This is what the TDZ is: the term to describe the state where variables are un-reachable. They are in scope, but they aren't declared.

The let and const variables exist in the TDZ from the start of their enclosing scope until they are declared.

You could also say that the variables exist in the TDZ from the place they get bound (when the variable gets bound to the scope it's inside) until it is declared (when a name is reserved in memory for that variable). */

// SHADOWING IN JS 

/* When a variable overloads another variable with same name is known as shadowing  for example */

var a = 3; // this varible will get shadowed OR overloaded with  a = 5 variable
{
    var a = 5;
    console.log(a);
}

console.log(a); //OUTPUT -> (a) will be printed as 5 in both of the console statements