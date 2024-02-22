//use the for-of-loop and for-in-loop in Java script

/*For-of-loop -> It is used to traverse through some specific data structure like string and arrays*/

// let Name = "Aman_Pandey";

// let size = 0;
// let cnt = 1;
// for(let i of Name) {  // here (i) is iterator 
//     console.log("i = ",i, "(",cnt,")");
//     size++;
//     cnt++;
// }

// console.log("Size of String is = ",size);

/*For-in-loop -> It is used for the objects in js code to access the key of that object and from that key we can 
                also get value of that respective key*/

let student = {    //Object is created 
    Name : "Aman",
    class : 10,
    age : 20,
    cgpa : 8.0
}

for(let i in student) {
    console.log("key =",i, "  Value =", student[i]);//here i is holding the key and student[i] holds value for key
}

