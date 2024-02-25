let marks = [24,27,56,78,98,99];
let sum = 0;
// let count = 0;

for(let i of marks) {
    sum += i;
    // count++;
}

console.log("The average marks is: ",sum/marks.length);