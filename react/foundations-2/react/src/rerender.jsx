import React, { useState } from "react";
import "./App.css";

// setCount(count + 1)

// React does not
// immediately change the DOM
// Re-render the whole page
// Rebuild everything from scratch

// Instead React:
// Schedules an update
// Re runs the component function
// Compares the new output with the previous output
// Updates only what changed in THe DOM

//What triggers a rerender
// State update inside component
//Parent re-renders
// Props changes

function Child(){
  console.log(`Child rendered`);

  return <p>Child</p>
}

function Parent() {
  const [count, setCount] = useState(0);
  console.log(`Parent renders`);
  return (
    <>
      <h1
        style={{
        }}
      >
        {count}
      </h1>
      <button onClick={() => setCount(count + 1)}> increment</button>
      <Child/>
    </>
  );
}

function App() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection:'column',
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Parent />
    </div>
  );
}

// const element = <div>hello</div>

// console.log(element)

// {
//   "type": "div",
//   "key": null,
//   "props": {
//       "children": "Element"
//   },
//   "_owner": null,
//   "_store": {}
// }


// {
//   "type": "div",
//   "key": null,
//   "props": {
//       "children": "Hello"
//   },
//   "_owner": null,
//   "_store": {}
// }
export default App;
