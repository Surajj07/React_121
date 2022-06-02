import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';

export const ThemeContext=createContext()

const ThemeContextProvider = ({children}) => {
    const [state,setState]=useState("light")
    const toggleTheme=()=>{
        state==="light" ? setState("dark") : setState("light")
    }
  return (
    <div>
      <ThemeContext.Provider value={[state,toggleTheme]}>
          {children}
      </ThemeContext.Provider>
    </div>
  )
}

export default ThemeContextProvider
