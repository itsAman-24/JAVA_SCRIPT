// let food = ["Chips","Colddrink","Lays","Kurkure"];
// let marks = [23,34,5,6,7];

//it will convert arrary into a string
// let string = marks.toString();
// console.log(string);

//concat function will combine two arrays and return one single as result
// let combination = food.concat(marks);

// console.log(combination);

//shift Method will delete from start and return the deleted item
// let deleted = food.shift("cookie");
// console.log("Shift will delete " , deleted);

//unshift Method will add to start
// food.unshift("Papad");

//slice Method will give subarrray(from srt point - ending point)
//slice(starting_index , ending_index);  SYNTAX ending_index will not be included
// console.log("Slice method is used to get this sub array from main array (Food) ",food.slice(1,3));




// console.log("Array before push method: ",food);

// food.push("Banana");

// console.log("Array after push method: ",food);

// food.pop();
// food.pop();

// console.log("Array after pop method: ",food);

const object = {
    name : "aman",
    age : 21,
    course : "engineering"
}

// .entries() is used to convert an object into an array in java script

const iterator1 = Object.entries(object);
console.log(iterator1);

//.keys() and .values() will target the keys and values from an object respectively

const iterator2 = Object.keys(object);
console.log(iterator2);


