let myBtn1 = document.querySelector(".myBtn1");

// myBtn1.onclick = () => {
//     console.log("Hi i'm handling event through external javascript");
//     alert("Hi i'm handling event through external javascript");
//     let a = 34;
//     console.log(++a);
//     ++a;
//     console.log(a);
// };

// let divClass = document.querySelector(".divClass");

// divClass.onmouseover = () => {
//     console.log("You are hovering on the box");
//     alert("Your are hovering on the box")
// };

let myBtn2 = document.querySelector(".myBtn2");

//here evtObj is an EVENT_OBJECT which holds the value of event and many more stuffs
myBtn2.ondblclick = (evtObj) => {
    console.log(evtObj);
    console.log("You clicked on me twice");
    alert("You just clicked on me twice");
};

//EVENT LISTENERS -> are used to provide multiple tasks on a particular event for same element.

myBtn1.addEventListener("click", () => {
    // console.log(evt);
    console.log("I am executed by eventListner 1");
    alert("I am executed by eventListner 1");
})

myBtn1.addEventListener("click", () => {
    console.log("I am executed by eventListner 2");
    alert("I am executed by eventListner 2");
})
