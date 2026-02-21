
// Solution 3


// function createUser (name, score){
//     this.name = name;
//     this.score = score;
// }
// createUser.prototype.sayName = function(){
//     console.log(`I am ${this.name}`);
// }
// createUser.prototype.increment = function(){
//     this.score ++;
// }
// createUser.prototype.login = function(){console.log('You are logged in')};



// const user1 = new createUser('John', 5);
// user1.sayName();

// function createPaidUser(paidName, paidScore, accountBalance){

//     //explicitlry change the poitnting of this
//     // createUser.call(this, paidName, paidScore);

//     createUser.apply(this, [paidName, paidScore]);
//     this.accountBalance = accountBalance;

//     // console.log('this',this)

// };

// createPaidUser.prototype = Object.create(createUser.prototype);

// createPaidUser.prototype.increaseBalance = function(){
//     this.accountBalance++;
// };



// const paidUser1 = new createPaidUser('Peter', 8, 25);

// paidUser1.sayName();





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
    sayName(){
    console.log(`I am ${this.name}`);
    }
    increment(){
        this.score++;
    }
    login(){
        console.log('Login')
    }

}

const user1 = new CreateUser("Peter", 9);
user1.sayName();

class createPaidUser extends CreateUser{
    constructor(paidName, paidScore, accountBalance){
        super(paidName, paidScore);
        this.accountBalance = accountBalance;
    }
    increaseBalance(){
        this.accountBalance++;
    }
}

const paidUser1 = new createPaidUser("A", 11, 200);

paidUser1.sayName();
paidUser1.increaseBalance();


// benefits
// Emerging as a new standard
//feels like other language like python

// Problems
//lot of devs do not hae any idea how it works under the hood and then interview becomes tricky



// Basic Object
// Factory functions
// Memory problem
// Object.create()
// Prototype
// __proto__
// Prototype chain
// new keyword internals
// this keyword 
// Class syntax
// call, apply, bind
// Subclassing ( inheritance)

// Summary

// Javascript OOP is:

// not class based originally
// Prototype delegation system
// new is automation
// class is a syntactic sugar
// everything links through __proto__
// Memory optimizations is done through shared prototypes