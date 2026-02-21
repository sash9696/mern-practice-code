

// OOP - Object Oriented Programming
// paradigm for structuring our complex code

// Easy to add featutes and functionality
// easy for usand other developers to reason about  (a clear structure)
// performant (efficient in terms of memory)


// building a quiz game with users

// some our users


// name:John
// score: 5

// name:Peter
// score:8

// functionality
// - Ability to increase the score

//Objects => stores functions with there associated data

// const user1 = {
//     name:'John',
//     score:5,
//     increment: function(){
//         user1.score ++;
//     }
// }
// encapsulation

// there can be n number of fucntionalities in real world
// - Ability to increase the score
// - Ability to decrease the score
// - Delete user
// - Login user
// - Log out user
// - Add avatar
// - get user
// and more

// const user2 = {};

//  user2.name = Peter;
//  user2.score = 8;
//  user2.increment = function(){
//     user2.score ++;
//  }

// using Object.create

// const user3 = Object.create(null);

// user3.name = Pete;
// user3.score = 6;
// user3.increment = function(){
//     user3.score ++;
// }

// code is getting repetitive and breaking DRY principle

// Solution 1
// Factory functions (Generate objects using a function)


// function createUser(name, score){
//     const newUser = {};
//     newUser.name = name;
//     newUser.score = score;
//     newUser.increment  =  function(){
//         newUser.score ++;
//     }
//     return newUser;
// }
// const user1 = createUser('John', 5);
// const user2 = createUser('Peter', 8);
// user1.increment();


// problem -> every time we create a new user we make space for all the 
//dataand function in computer memory but these functions are just copies



// Solution 2

// Store the incrmenet function in just one object and some kind of lookup
//that if it doesnt find the function on user1, it looks up to that object

// const user1 = {
//     name : 'John',
//     score: 5
// }

// const functionStore = {
//     increment: function(){
//         this.score ++;
//     },
//     login: function(){console.log("You are logged in")}
// }

// user1.name
// user1.increment()


// Link user1 and function store so that the interpreter can checkup the function store
//if it doesn find it in the user object

//we do that with the help of Object.create()

// Solution 2
// function createUser(name, score){
//     const newUser = Object.create(userFunctionStore);
//     newUser.name = name;
//     newUser.score = score;
//     return newUser
// }
// const userFunctionStore = {
//     increment: function(){
//         this.score ++;
//     },
//     login: function(){console.log("You are logged in")}
// }
// const user1 = createUser('John', 5);
// const user2 = createUser('Peter', 8);
// user1.increment();
// [[Prototype]] __proto__

//its still not standrd way 


// Solution 3

// introduced new keyword that automates the hard work

// const user1 = new createUser('John', 5);

// when we call the constructor function with new keyword it automates 2 things

// 1. Create a new user object
// 2. it returns that newly created object

// questions
// how do we refer to the auto created object -  using this
//where to put our single copies of functions?? - user prototype object in object version of the fucntion


// Solution 3

// function multiplyBy2(num){
//     return num*2
// }

// multiplyBy2.data = 10;
// console.log(multiplyBy2(3));
// multiplyBy2.prototype

// that all fucntions havse a default property on their obejct version , 
//that is 'prototype' that can used to replace our function store


// Solution 3


// function createUser (name, score){
//     // console.log(this)
//     this.name = name;
//     this.score = score;
// }

// createUser.prototype.increment = function(){
//     this.score ++;
// }

// createUser.prototype.login = function(){console.log('You are logged in')};



// const user1 = new createUser('John', 5);
// user1.increment();

// Benefits 
//faster to write
//still typically used in rpactice in professionl coding

// Solution 4
// ES 2015 => class => syntactic sugar


class CreateUser{
    constructor(name, score){
        this.name = name;
        this.score = score;
    }
    increment(){
        this.score++;
    }
    login(){
        console.log('Login')
    }

}

const user1 = new CreateUser("Peter", 9);

user1.increment();


// benefits
// Emerging as a new standard
//feels like other language like python

// Problems
//lot of devs do not hae any idea how it works under the hood and then interview becomes tricky