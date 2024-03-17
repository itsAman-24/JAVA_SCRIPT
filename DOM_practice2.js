let divs = document.querySelectorAll(".commonDiv");
console.dir(divs);

let index = 1;

for(div of divs) {
   div.innerText = `Unique Box ${index}`;
   index++;
}


// divs[0].innerText = "First UniqueText"
// divs[1].innerText = "Second UniqueText"
// divs[2].innerText = "Third UniqueText"