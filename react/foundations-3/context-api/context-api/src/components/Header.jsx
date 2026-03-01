import React from "react";
import { useAuth } from "../context/AuthContext";

function Header() {
  const {user, login, logout} = useAuth();

  return (
    <div>
      {user ? (
        <>
          <p>Welcome {user.name}</p>
          <button onClick={logout} >Logout</button>
        </>
      ) : (
        <button onClick={() => login('John')} >Login</button>
      )}
    </div>
  );
}

export default Header;
