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

// const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("p1 IS RESOLVED");
//     }, 10000);
    
// })

// const p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("p2 IS RESOLVED");
//     },5000);
// })

//DEMO Function for showing the demo

// async function handlePromise() {
//     //handling with the help of then()
//     // p.then((response) => {
//     //     console.log(response);
//     // }) 

//     console.log("Hello World");
//     //Instead of writing above code we can use await keyword inside async function to handle the promise 
//     const result1 = await p1;
//     console.log("p1 Promise is resolved");
//     console.log(result1);

//     const result2 = await p2;
//     console.log("P2 promise is resolved");
//     console.log(result2);
// }

// handlePromise();

const API_URL= "https://api.github.com/users/itsAman-24";

async function handlePromise() {
    
    try {
        //making API call using fetch() 
        const data = await fetch(API_URL);    //fetch() will return promise which will be stored inside data variable

        //.json() is used to make data into string
        const JSON_value = await data.json();   //.json() will also return promise 

        console.log(JSON_value);
    } 
    
    catch(err) {
        console.log(err);
    }


    

}

handlePromise();