import React from 'react'

function App() {
  const user = {name:"john"};
  return (
    <div>
      <Layout user={user} />
    </div>
  )
}

function Layout({user}){

  return <Sidebar user={user} />
}

function Sidebar({user}){

  return <UserMenu user={user}/>
}

function UserMenu({user}){

  return <Avatar user={user} />
}

function Avatar({user}){

  return <p>{user.name}</p>
}

// Problems
// props drilling
// Every layer passes user
// eevn if it doesnt use it
// refactoring becomes painful
// hard to scale


// Solutions
// render props pattern
//context api
//redux , mbx, zudstand, flux etc like state management tools
// Composition pattern
//Custom hooks



export default App