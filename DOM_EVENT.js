let myBtn1 = document.querySelector(".myBtn1");

myBtn1.onclick = () => {
    console.log("Hi i'm handling event through external javascript");
    alert("Hi i'm handling event through external javascript");
    let a = 34;
    console.log(++a);
    ++a;
    console.log(a);
};

// let divClass = document.querySelector(".divClass");

divClass.onmouseover = () => {
    console.log("You are hovering on the box");
    alert("Your are hovering on the box")
};

let myBtn2 = document.querySelector(".myBtn2");

myBtn2.ondblclick = () => {
    console.log("You clicked on me twice");
    alert("You just clicked on me twice");
};
