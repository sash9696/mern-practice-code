import { useState } from "react";

// State
// Data that changes over time and affects UI

// rules of calling hook
// it should at top level management
// it should be inside a react component

function Counter() {
  let [count, setCount] = useState(0);
  // let count = 0;


  const increment = () => {
    // setCount(count + 1);
    // debugger
    // setCount(count + 1);
    // debugger

// callback version
    // setCount((prevCount) => prevCount + 1);
    
    // setCount((prevCount) => {
    //   // debugger
    //   prevCount + 1
    //   // debugger
    
    // });

    // count = count + 1;
    console.log('count', count);
  }

  console.log(`Counter rendered`)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment} >+</button>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  );
}

export default App;
