import React, { createContext, useContext } from "react";

// React context api

// create the context

const UserContext = createContext();

// console.log('userContext',UserContext)

// use the provide component to give access to the data

//use the consumer component to extract the data

function App() {
  const user = { name: "john" };
  return (
    <div>
      <UserContext.Provider value={user}>
        <Layout />
      </UserContext.Provider>
    </div>
  );
}

function Layout() {
  return <Sidebar />;
}

function Sidebar() {
  return <UserMenu />;
}

function UserMenu() {
  return <Avatar />;
}

// function Avatar() {
//   return (
//     <UserContext.Consumer>
//       {(data) => <p>{data.name}</p>}
//     </UserContext.Consumer>
//   );
// }

function Avatar() {
  const user = useContext(UserContext);
  // console.log(user)
  return (
   <p>{user.name}</p>
  );
}

export default App;
