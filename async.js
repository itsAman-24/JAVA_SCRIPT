// // async function will always return promise 

// async function getData() {
//     setTimeout(() => {
//         return "NamsteJavaScript";
//     } ,2000)

//     // return "Nmaste";
// }

// const dataPromise = getData();
// console.log(dataPromise);  //this line will console the promise returned by getData()
// dataPromise.then((Response) => { console.log(Response); })


// //by using callback function
// function getData(callback) {
//     setTimeout(() => {
//         callback("NamasteJavaScript");
//         // callback("Namstey");
//     }, 2000);
// }

// // const callback = (strValue) => {
// //     return "Namaste";
// // }

// // Usage
// getData((data) => {
//     console.log(data); // Output: NamasteJavaScript
// });



// // by using Promises
// function getData2() {
//     return new Promise( (resolve) => {
//         setTimeout(() => {
//             resolve("Namastey");
//         },4000);
//     })
// }

// getData2().then(data => {
//     console.log(data);
// })



//Await keyword can be only used inside async function

const p = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise is being resolving");
    }, 5000);
    
})

async function handlePromise() {
    //handling with the help of then()
    p.then((response) => {
        console.log(response);
    }) 

    //Instead of writing above code we can use await keyword inside async function to handle the promise 
    const result = await p;

    // console.log(result);
    console.log("I'm again excuted by javascript while await is waiting")

}

handlePromise();