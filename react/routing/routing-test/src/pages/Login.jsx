import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

function Login() {

    const {login} = useAuth();
    const navigate = useNavigate();

    function handleLogin () {
        login();
        navigate("/dashboard/profile")
        
    }
  return (
    <div>
        <h2>Login Page</h2>

        <button onClick={handleLogin} >
            Login
        </button>
    </div>
  )
}

export default Login