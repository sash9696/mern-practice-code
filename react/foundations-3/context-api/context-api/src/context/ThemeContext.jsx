
// create the context

import { createContext, useContext, useState } from "react";


const ThemeContext = createContext();


//use the provider component  to provide access to the data

export function ThemeProvider({children}){

    const [theme, setTheme] = useState("light");
    // console.log('children',children)

    function toggleTheme(){
        setTheme((prev) => prev === 'light' ? "dark" :'light' )
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}


//use use context or consumer to consume data


export function useTheme(){
    return useContext(ThemeContext);
}