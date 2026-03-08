import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function DashboardLayout() {
  return (
    <div>
        <h1>DashboardLayout</h1>

        <nav>
            <Link style={{marginRight:'20px'}} to='profile'>Profile</Link>
            <Link style={{marginRight:'20px'}} to='Orders'>Orders</Link>
            <Link to='settings'>Settings</Link>
        </nav>
        <hr/>
        <Outlet/>
    </div>
  )
}

export default DashboardLayout