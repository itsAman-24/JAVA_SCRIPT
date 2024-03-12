// console.log("Welcome to my webpage");
// alert("This is your website");

//WINDOW is a global object which can be recognized by everyone inside code
// console.dir(document.body);
// console.log(document.body);

//Ways to access the elements of html

//By using Id 
let demo = document.getElementById("h2");
console.dir(demo);
console.log(demo);

//By using className
let demo2 = document.getElementsByClassName("header");
console.dir(demo2);
console.log(demo2);

//By using tagName
let demo3 = document.getElementsByTagName("p");
console.dir(demo3);
console.log(demo3);