import React, { createContext, useContext, useState } from 'react'

// Fake authentication


const AuthContext = createContext();

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    function login(){
        setUser({name:'John'})
    }


    function logout(){
        setUser(null)
    }
  return (
    <AuthContext.Provider value={{user, login, logout}} >
        {children}
    </AuthContext.Provider>
  )
}

export function useAuth () {
    return useContext(AuthContext)
}
