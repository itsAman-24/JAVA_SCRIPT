//WAP to display the alphabet 
//ASCII value of a = 97 & z = 122
for(let i = 97; i <= 122; i++) {
    console.log(String.fromCharCode(i));   // this line will print the small alphabets

    console.log(String.fromCharCode(i - 32));  // this line will print capital alphabets

}