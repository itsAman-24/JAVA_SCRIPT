const characters = [
    { 
        //object no. 1 for character 1
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        //object no. 2 character 2
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        //object no. 3 character 3
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        //object no. 4 character 4
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    }
];

//Getting array of all names
const mappedArray = characters.map( (character) => { 
    return character.name;
} );

// console.log(mappedArray);

//Getting array of all heights

const height = characters.map( (character) => {
    return character.height;
} );

// console.log(height);

//Get an array of objects with just name and height properties

const getArray = characters.map( (newArray) => {
    return {
        name : newArray.name,
        height : newArray.height
    };

} )

// console.log(getArray);

