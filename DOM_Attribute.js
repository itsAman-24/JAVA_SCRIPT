let div = document.querySelector("div");
console.log(div.getAttribute("id" , "class"));

console.log( div.setAttribute("class" , "newClass") );   //set the class attribute as newClass

console.log( div.setAttribute("id" , "newId") );   //set the id attribute as newiD

div.style.backgroundColor = "red";  //setting css properties by using javascript 

div.style.textAlign = "center";

div.style.fontSize = "2rem";

div.innerText = "Hi Coders";

div.style.borderRadius = ".3rem";

console.log(div.innerHTML);