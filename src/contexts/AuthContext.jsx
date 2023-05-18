import { useContext } from 'react';
import React from 'react';
import {createContext} from 'react';

const MyContext = createContext();
const themes = {
    light:{
        
        backgroundColor: `rgb(95, 112, 62)`,
        color:'black'
    },
    dark:{
        backgroundColor:`rgb(6,6,65)`,
        color:'white'
    }
}

export const AuthContext = ({children})=>{
    const [theme,setTheme] = React.useState(themes.light);
    const themeChange = ()=>{
        setTheme(theme === themes.light? themes.dark:themes.light);
    }
    return(
        <MyContext.Provider value={{themes,theme,themeChange}}>
            {children}
        </MyContext.Provider>
    )
}
export const themeController = ()=>{
    return useContext(MyContext);
}