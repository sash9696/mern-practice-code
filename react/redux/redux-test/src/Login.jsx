import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from './features/authSlice';

function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      {user ? (
        <>
          <h3>Welcome {user.name}</h3>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <button onClick={() => dispatch(login({name:'John'}))} >Login</button>
      )}
    </div>
  );
}

export default Login;
