//create a normal function which takes string as an input and return the total number of vowels in that string

function countVow(input) {
  let count = 0;

  //for-of loop will traverse on every element of input string
  for (const char of input) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
//create a arrow func to count the total number of vowels in a string

const countVowel = (input_string) => {
  let count = 0;
  
  //for-of loop will traverse on every element of input string
  for (const char of input_string) {
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        count++;
    }
  }
  console.log("The number of vowels in", input_string, "is:", count);
}
    }
  }
  console.log("The number of vowels in", input, "is:", count);
}



//create a arrow function to count the total number of vowels in a string

const countVowel = (input_string) => {
  let count = 0;

  //for-of loop will traverse on every element of input string
  for (const char of input_string) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log("The number of vowels in", input_string, "is:", count);
};
