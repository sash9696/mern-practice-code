import React, { useEffect, useState } from "react";

// useEffect
// React components must be pure
// Rendering should only calculate the UI

// Side effects that must happen separately
// side effects:
// Api Calls
// WEbsockets
// Timers
// Subscriptions
// Manual DOM manipulation
// Logging

// use effect says
// After the rendering is done run this side logic

// Mount -> first render
// Update -> re-renders
// Unmount -> cleanup

function App() {
  // useEffect(function, dependecyArray);

  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  // Case 1
  // No dependecy array
  // runs on mount and on every re render
  // useEffect(() => {
  //   console.log(`Runs after every render`)
  // });

  // Case 2
  // Empty dependecy array
  // runs only on mount
  // useEffect(() => {
  //   console.log(`Runs only onece after component mounts`)
  // } ,[]);
  // console.log(`App renders`)

  // Case 3
  // with dependecies
  // runs on mount and whenever the dependecies changes

  // useEffect(() => {
  //   console.log(`useEffect renders`);
  // }, [count]);

// infinite loop
  // useEffect(() => {
  //   setCount(count + 1);
  // })


  // Case 4
  // cleanup

  useEffect(() => {
    const id = setInterval(() => {
      console.log("tick",count, performance.now())
    }, 1000)

    return () => {
      console.log('use effect cleanup ran');
      clearInterval(id);
    }
    

  }, [count])

  console.log(`App renders`);
  return (
    <div style={{marginTop:'200px'}}>
      <button onClick={() => setShow(!show)}>Click Me</button>
      <button onClick={() => setCount(count + 1)}>Trigger interval {count}</button>
    </div>
  );
}

export default App;
