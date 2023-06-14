//Q1 Same keys and Values ES2015

// Code TO BE refactored
/* 
function createInstructor(firstName, lastName){
  return {
    firstName: firstName,
    lastName: lastName
  }
}
*/

//My version

const createInstructor = (firstName, lastName) => { return{firstName, lastName,}};




//Solution


//Q2 Computed property Names

//Code to be refactored
/*
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

*/

// My version
let favoriteNumber = 42;


const instructor = {
    firstName : 'Colt',
    [favoriteNumber] : 'That is my favorite number!'
};

//Solution



// Q3 Object Methods

//Code to be refactored
/* var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}
*/

// My version

const instructor2 = {
    firstName: 'Colt',
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + ` says bye!`;
    }
}

//Solution


//Q4 createAnimal function

// Starter code to work with
/* 
const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
d.bark()  //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}
s.bleet() //"BAAAAaaaa"
*/
const d = createAnimal("dog", "bark", "Woooof!")

function createAnimal (species, verb, noise ) {
    return {
        species,
        [verb] : () => {
            return noise
        } 
    }
};
