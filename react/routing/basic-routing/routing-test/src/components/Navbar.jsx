import React from 'react'
// import {Link} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        {/* <Link style={{marginRight:'20px'}} to='/'>Home</Link>
        <Link style={{marginRight:'20px'}} to='/products'>Products</Link>
        <Link to='/about'>About</Link> */}
        <NavLink style={{marginRight:'20px'}} to='/'>Home</NavLink>
        <NavLink style={{marginRight:'20px'}} to='/products'>Products</NavLink>
        <NavLink to='/about'>About</NavLink>
    </nav>
  )
}

export default Navbar