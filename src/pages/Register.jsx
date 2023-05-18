import React from 'react'
import { useState } from 'react'
import axios from '../axios'
import './Register.css'
function Register() {
    const [values,setValues]=useState(null);
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const {name,email,password,password_confirmation} = e.target.elements;
        const inputs={
            'name':name.value,
            'email':email.value,
            'password':password.value,
            'password_confirmation':password_confirmation.value
        }
        setValues(inputs)
        try{
           const res = await axios.post('/register',JSON.stringify(inputs));
            console.log(res.data);
        }catch(error){
            console.log(error)
        }

    }
    console.log(values);
  return (
    <div className='register'>
        <form onSubmit={handleSubmit}>
    <div className='reg_item'>
    <label htmlFor='name'>
        name
    </label>
    <input type='text' id='name' name='name'/>
    </div>
    <div className='reg_item'>
    <label htmlFor='email'>
        email
    </label>
    <input type='email' id='email' name='email' />
    </div>
    <div className='reg_item'>
    <label htmlFor='password'>
        Password
    </label>
    <input type='password' id='password' name='password'/>
    </div>
    <div className='reg_item'>
    <label htmlFor='password_confirmation'>
        Confirm Password
    </label>
    <input type='password' id='password_confirmation' name='password_confirmation' />
    </div>
    <div className='buttons'>
        <button type='reset' className='clear'>Clear</button>
        <button type='submit' className='send'>Register</button>
    </div>
        </form>
    </div>
  )
}

export default Register