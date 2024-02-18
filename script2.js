var a = 2;
// console.log(a);
//Block
{
    a = 3;
    var a = 10; // we can redeclare var type data again and again
}

// console.log(a);

let A = 2;

{   
    let A = 2;
    console.log(A);
    A = 3;
    
}

console.log(A);