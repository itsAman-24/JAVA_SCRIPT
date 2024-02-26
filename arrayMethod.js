let food = ["Chips","Colddrink","Lays","Kurkure"];
let marks = [23,34,5,6,7];

//it will convert arrary into a string


//concat function will combine two arrays and return one single as result
let combination = food.concat(marks);

console.log(combination);


console.log("Array before push method: ",food);

food.push("Banana");

console.log("Array after push method: ",food);

food.pop();
food.pop();

console.log("Array after pop method: ",food);