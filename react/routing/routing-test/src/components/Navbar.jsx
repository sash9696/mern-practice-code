import React from 'react'
import {Link} from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
    const {user, logout} = useAuth();
  return (
    <nav>
        <Link style={{marginRight:'20px'}} to='/'>Home</Link>
        <Link style={{marginRight:'20px'}} to='/dashboard/profile'>Dashboard</Link>

        {user  ? (
            <>
            <button onClick={logout} >Logout</button>
            </>
        ) : (
            <>
            <Link to='/login'>Login</Link>
            </>
        )}

    </nav>
  )
}

export default Navbar