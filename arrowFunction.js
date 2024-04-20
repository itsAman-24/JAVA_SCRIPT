/* Generally we use arrow function for small function to do its work not for big and lengthy function */

// const product = (a,b) => {
//    console.log("The product of a and b is ", a*b);
// }

// //we can call arrow function like this
// product(2,5);


//create a arrow func to count the total number of vowels in a string

const countVowel = (input_string)  => {
  let count = 0;
  
  //for-of loop will traverse on every element of input string
  for (const char of input_string) {
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        count++;
    }
  }
  console.log("The number of vowels in", input_string, "is:", count);
}