

// js is a synchronous (top to bottom) single threaded language (one task at a time)



// var message = 'hello world';


// function add(a,b){

//     return a + b
// }

// console.log(add(10,5))

console.log('Program start');
var appName = 'TodoApp';
function startApp(){
    var user = 'John';
    console.log('User', user);
    function greet(){
        var message = `Welcome ${user} to ${appName}`;
        console.log(message);
        function logLength(){
            var length = message.length;
            console.log(`message length ${length}`)
        }
        logLength();
    }
    greet();
}
startApp();
console.log(`Program end`);