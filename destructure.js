// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

let arr1 = [3,6,4];

let abc = arr1; // this syntax is used to unpack the values from arr1 into variable abc

console.log(abc);

let [a,b] = [3,4]; 

console.log([a,b]); 

/* We had created a object in which key named as (car) holding the whole array as its value 
   and this array is consists of some objects which are its elements */

let object = {
    cars : [
        {
            Aman : 'BMW',
            Golu : 'Tesla',
            Arru : 'Fortuner',
        }
    ]
};

let object2 = {
    cars : [
        {
            Aman: amanFav,
            Golu: goluFav,
            Arru: arruFav
        }
    ]
} = object;     // writing the destructing syntax for two objects

console.log(amanFav);
console.log(goluFav);
console.log(arruFav);

