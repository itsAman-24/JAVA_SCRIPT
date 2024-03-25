let theme = document.querySelector(".themeClass");

let body = document.querySelector("body");

let current_theme = "light";

theme.addEventListener("click" , () => {
    if(current_theme === "light") {
        theme.innerText = "Light Theme";
        current_theme = "dark";
    // document.querySelector("body").style.backgroundColor = "black"; // This code is used to change theme with js
        body.classList.remove("light");  // removing because it already holds the class named as light
        body.classList.add("dark"); 
    }

    else {
        theme.innerText = "Dark Theme";
        current_theme = "light";
        // document.querySelector("body").style.backgroundColor = "white";
        body.classList.remove("dark"); // removing because it already holds the class named as dark
        body.classList.add("light"); 
    }

});

console.log(current_theme);

