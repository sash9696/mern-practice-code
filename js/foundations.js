
// console.log('Hello world')

//intro

// js is a programming lang that makes website interactive

//for interviews => js is a synchornous single threaded language

//without js wesites would mostly
// Textshow images
// show styles (colors, layouts)

//with js
// react when u click buttons
// show or hide content
// validate forms
// Animate things
// Change content without reloading the page

// js is brain of website


// values and data types

// value -> piece of information


// console.log(10)
// console.log(3.14)
// console.log('Hello world')
// console.log(true)

// console.log('Hello' + ' World')



// console.log('My age is ' + 30)


//variable -> named box


// let message = 'hello'; declaration + initialization

// message = 10


// let score ; declaration

// score = 10; initialization


// values that should not change
// const dob = '10/12/1993';

// dob  = '10/12/1992'



// console.log(message)
// let message = 'hello';


// Conditional

// let age = 16;

// if(age >= 18){
//     console.log('You can vote')
// }else{
//     console.log('You cannot vote yet')
// }


// let score  = 52;

// if(score >= 90){
//     console.log('Excellent')
// }else if(score >= 60){
//     console.log('Good')
// }else{
//     console.log('Needs improvement')
// }

// let isLoggedIn = false;

// if(isLoggedIn){
//     console.log('Show dashboard')
// }


// Loops

// for loops

// for(let i = 1; i <=5; i++){
//     console.log('Count: ', i)
// }

//while

// let count = 1;

// while (count <=10){
//     console.log('Count: ', count)
//     count ++
// }

// let  i = 0
// do{
//     console.log('Greetings')
// }while(i < -1)


//Arrays or list

// let colors = ['red', 'blue', 'green'];

// console.log(colors)
// console.log(colors[0])


// let items = ['Laptop', 'Mobile', 'Charger'];

// for (let  i = 0; i < items.length; i++){
//     console.log(items[i])
// }

// Objects (grouped data)

// let user = {
//     name:'John',
//     age:20,
//     isAdmin:false,
//     "likes birds": true
// }

// console.log(user.name)
// console.log(user['age'])

// user.city = 'Mumbai'

// console.log(user['likes birds'])


// functions

// function greetings(){
//     console.log('Hello')
// }

// greetings();


//with parameters
// function greetings(name){
//     console.log('Hello ' + name)
// }

// greetings('John'); => argument
// greetings('Peter');=> argument


// function greetings(name){
//     console.log(`Hello ${name}`)
// }

// greetings('John');
// greetings('Peter');

//return values

// function add(a,b){
//     return a + b
// }

// // console.log(add(5,10));

// let result = add(5,10);
// console.log(result)

// function getStatusMessage(isLoggedIn){
//     if(isLoggedIn){
//         return 'Welcome back';
//     }else{
//         return "Please log in"
//     }
// }

// console.log(getStatusMessage(true))

// Scope and variables

// where can this variable be used?

// global scope

let siteName = 'My Site';

function showName(){
    console.log(siteName)
}

//local scope

// function test(){
//     let message = 'Hello';
//     console.log(message)
// }

// test()
// console.log(message) //reference error

// Block scope let and const

//block => {}

    // if(true){
    //     let count = 10
    // }

    // console.log(count); error

// revisit arrays

// let nums = [10,20,30,40];

// nums.push(50)

// nums.pop()


// nums.shift()
// nums.unshift(100)

// console.log(nums)

// objects

//add methods (functions inside object)

// let user = {
//     name:'John',
//     greet: function (){
//         console.log(`Hello ${this.name}`)
//     }
// }

// user.greet();


//Nested objects

let user = {
    name:'John',
    settings:{
        theme:'dark',
        notifications:true
    }
}

console.log(user.settings.theme)