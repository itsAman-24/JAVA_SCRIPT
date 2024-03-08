// let array = [1,4,7,25,6,4];
// let resulted_Array = array.reduce( (prev_element , curr_element) => {
//     return prev_element + curr_element;
// })

// console.log(resulted_Array);

const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

// Get the total mass of all characters
let total_mass = characters.reduce( (accumulator, curr_element) => {
    return accumulator + curr_element.mass;
} , 0);

console.log(total_mass);

// Get the total height of all characters
let total_height = characters.reduce( (accumulator , curr_element) => {
    return accumulator + parseInt(curr_element.height);
} , 0);

console.log(total_height);

// Get the total number of characters in all the character names
let total_number = characters.reduce( (accumulator , curr_element) => {
    return accumulator + curr_element.name.length;
} , 0);

console.log(total_number);