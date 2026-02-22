import React, { useState } from "react";
import './App.css';

function Dashboard() {
  return <h1>User Dashboard</h1>;
}

function Login() {
  return <h3>Login</h3>;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const login = () => {

    setIsLoggedIn(!isLoggedIn)
  }
  return (
    <div className="app">
      <div>
        <button onClick={login}>{isLoggedIn ? 'Logout' : 'Login'}</button>
      </div>
      <div style={{ marginTop: "100px" }}>
        {isLoggedIn ? <Dashboard /> : <Login />}

        <div>
          {isLoggedIn && <h3>You are currently logged in</h3>}
        </div>
      </div>
    </div>
  );
}

export default App;
