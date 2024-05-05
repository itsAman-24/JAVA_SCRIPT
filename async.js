// getData = async() => {
//     return "randomValue";
// }

// const Value = getData;
// console.log(Value);


// This function will return promise 
async function getData() {
    setTimeout(() => {
        return "NamsteJavaScript";
    } ,2000)

    // return "Nmaste";
}

const dataPromise = getData();
debugger
console.log(dataPromise);
debugger

dataPromise.then((Response) => { console.log(Response); })



//Await keyword is only used with async function



