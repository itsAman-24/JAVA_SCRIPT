let div = document.querySelector("div");
console.log(div.getAttribute("id" , "class"));

console.log( div.setAttribute("class" , "newClass") );   //set the class attribute as newClass

console.log( div.setAttribute("id" , "newId") );   //set the id attribute as newiD

div.style.backgroundColor = "red";  //setting css properties by using javascript 

div.style.textAlign = "center";

div.style.fontSize = "2rem";

div.innerText = "Hi Coders";

div.style.borderRadius = ".3rem";
div.style.visibility = "hidden";   //it will hide the visibility of div tag

let para = document.querySelector("p");
para.innerText = "I am the innerText inside Paragraph";

para.style.backgroundColor = "orange";

console.log(div.innerHTML);