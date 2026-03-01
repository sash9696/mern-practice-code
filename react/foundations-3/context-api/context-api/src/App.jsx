// import React from "react";
// import { useTheme } from "./context/ThemeContext";
// import "./App.css";
// import Header from "./components/Header";

// // Theme system example
// function App() {
//   const { theme, toggleTheme } = useTheme();

//   //  console.log(theme, toggleTheme)

//   return (
//     <div>
//       <Header />
//       <div className={`app ${theme}`}>
//         <button onClick={toggleTheme}>Toggle theme</button>
//       </div>
//     </div>
//   );
// }

// // Mental model
// // createContext() => creates channel
// // Provider => defines scope
// // useContext() => reads value
// // Any child inside provider can access it

// export default App;


// // Pros and cons for Context API


// // When to use
// // small to medium apps. or few components in a large application
// // theme
// // Auth user data
// // Language settings
// // simple global state

// // Pros
// // Built into react ( no extra library)
// // Very simple to implement
// // Perfect for static or rarely changing data

// // Cons
// // Not optimized for frequent updates
// // can cause unnecessary re-renders
// // No built in middleware, devtools or strict architecture
// // Harder to manage large apps
// // Context Hell

// // Redux
// // a seprate state managenment library with predictable state container patter
// // redux toolkit

// // When to use
// // large scale application
// // Complex state logic (cart, add to cart , remove from cart, total)
// // Many components depend on a shared state
// // Frequent state updates
// // Need debugging tools

// // Examples
// // Ecommerce cart logic
// // Complex dashboards
// // Large team projects
// // heavy api based systems

// // Pros
// // Predictable state updates
// // dev tools (time travel feature)
// // Middlewares (API calls, logging)
// // Scale
// // Optimized for performance

// // Cons
// // More boilerplate code
// // Learning curve
// // Overkill for small apps or usecases



import React, { useEffect, useRef, useState } from 'react'

// Controlled and uncontrolled components

// Controlled
// React controls the value
// professional apps mostly use controlled
// use it for
// validation
// conditional UI
// real time feedback
//dynamic for,s


// Un Controlled
// DOM is in control
// simple forms
// quick input


// function LoginForm(){

//   const [email, setEmail] = useState("");

//   return(
//     <input value={email} onChange={(e) => setEmail(e.target.value)} />
//   )
// }



// function LoginForm(){

//   // DOM manipulation
//   // document.getElementBy it => never do it here inr eact unless absolutely imp
// //  if u want to do direct dom manipulation then react has expose useRef()


//   const emailRef = useRef();

//   console.log({emailRef})

//   function handleSubmit(){
//     console.log(emailRef.current.value)
//   }

//   return(
//     <>
//         <input ref={emailRef}  />
//         <button onClick={handleSubmit}>Submit</button>
//     </>
//   )
// }


// function App() {
//   return (
//     <div style={{padding:'100px'}}>
//       <LoginForm />
//     </div>
//   )
// }

// export default App




// useRef

// use case 1 : access the DOM node as in example in uncontrolled component
//  use case 2 :persist the mutable value across renders, using useRef will nopt trigger any re render

function Counter(){
  const [count, setCount] = useState(0);

  const prevCount = useRef();


  useEffect(() => {
    console.log(`Useeffect triggered`)

    prevCount.current = count;
    console.log('prevCount in useeffect',prevCount)

  }, [count])

  console.log(`Counter  rendered`)

  console.log(prevCount)


  return(
    <>
      <p>Current: {count}</p>
      <p>Previous: {prevCount.current}  </p>
      <button onClick={() => setCount((c) => c + 1)} >Increment</button>
    </>
  )

}


function App() {

  console.log(`App  rendered`)

  return (
    <div>
      <Counter />
    </div>
  )
}

export default App