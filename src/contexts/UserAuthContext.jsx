import React,{createContext} from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from '../axios';

const UserContext = createContext();


export const  UserAuthContext=({children})=>{
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('user'))|| null);
    
    const csrfToken = async ()=>{
        await axios.get('http://localhost:8000/sanctum/csrf-cookie');
        return true;
    };

    const setTheUser = (avatar)=>{
     try{   
         console.log('already set the user')
        localStorage.setItem('user',JSON.stringify(avatar));
        setUser((avatar));
    }
        catch(error){
            console.log(error);
        }
    }
    const logOut = ()=>{
        localStorage.removeItem('user');
        setUser(null);
        return <Navigate to='/' />
    }
    
    return (
        <UserContext.Provider value={{user,setTheUser,csrfToken,logOut}}>
            {children}
        </UserContext.Provider>
    )
}
export const userAuth= () =>{
    return useContext(UserContext);
}
