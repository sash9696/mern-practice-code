
// vanilla js DOM manipulation
// const button = document.querySelector('button');

// const countEl = document.querySelector('#count');

// let count = 0;

// button.addEventListener('click', () => {
//     count++;
//     countEl.textContent=count;
// })

//what if the app has
//10 interactive elements?
//20 state 
//multiple sections that depends on the same data
//api calls
//conditional UI


// In real apps:

// one state change can affect multiple multiple parts of the application
// multiple events update shared Data
// UI needs to stay in sync with data



//real question
// when state changes how do i update the UI correctly

// in vanilla js you must manually update everything


// in React
// you describe what THe UI should look like for that given state.
// React handles the DOM update


// Declarative UI

// Imperative (vanilla js)

// Find that element change its text , add the class and remove the node


// Declarative (React js)
// if count is 5 show 5


//React solves
// React gives
//a predictable way to build UI
//Automatic re-rendering when state changes
//Component based structure
//One way data flow
//Clean mental model



