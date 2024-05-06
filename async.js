// // getData = async() => {
// //     return "randomValue";
// // }

// // const Value = getData;
// // console.log(Value);


// // This function will return promise 
// async function getData() {
//     setTimeout(() => {
//         return "NamsteJavaScript";
//     } ,2000)

//     // return "Nmaste";
// }

// const dataPromise = getData();
// debugger
// console.log(dataPromise);
// debugger

// dataPromise.then((Response) => { console.log(Response); })



// //Await keyword is only used with async function


// function getData(callback) {
//     // debugger
//     setTimeout(() => {
//         // callback("NamasteJavaScript");
//         callback("Namstey");
//     }, 2000);
//     // debugger
// }

// const callback = (strValue) => {
//     return "Namaste";
// }

// // Usage
// getData(data => {
//     // debugger
//     console.log(data); // Output: NamasteJavaScript
// });


function getData2() {
    return new Promise( (reject , resolve) => {
        setTimeout(() => {
            resolve("Namastey");
        },4000);

        
    })
}

getData2().then(data => {
    console.log(data);
})