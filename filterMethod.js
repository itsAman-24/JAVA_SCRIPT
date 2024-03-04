let array = [2,4,6,7,8];

const evenNumber = array.filter( (element) => {
   element % 2 === 0;
} );

console.log(evenNumber);

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

//Get all Male characters
const male = characters.filter( (character) => {
  return character.gender === 'male';
} );

console.log(male);

//Get all Female characters

const female = characters.filter( (character) => {
   return character.gender === 'female'
} );

console.log(female);

// Get characters with mass greater than 100

const mass = characters.filter( (character) => {
  if(character.mass > 100) {
   return character;
  }
} );

console.log(mass);

// Get characters with height less than 200

const height = characters.filter( (character) => {
   if(character.height <= 200) {
      return character;
   }
   
} );

console.log(height);

// Get characters with height >= 150 and gender = male

const height_gender = characters.filter( (character) => {
    if(character.height >= 150 && character.gender === 'male') {
        return character;
    }
} );

console.log(height_gender);