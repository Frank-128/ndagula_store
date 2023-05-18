import React from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import Header from './components/header/Header'
import Categories from './pages/Categories'
import Home from './pages/Home'
import './App.css'
import Items from './pages/Items'
import Item from './pages/Item'
import Login from './pages/Login'
import {userAuth} from './contexts/UserAuthContext'
import { useEffect } from 'react'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Admin from './pages/Admin'
import Dashboard from './components/dashboard/Dashboard'
const Layout=()=>{
  const {user} = userAuth();
  const navigate =useNavigate();
  useEffect(()=>{
    
    if(user === null || !user)
    navigate('/login')
    // {return <Navigate to='/login' />}

  },[user])
  return(
    <div className='app'>
     <Header/>
      <Outlet/>
    </div>
  );
}
function App() {

  return (
      <BrowserRouter>
   
     
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/admin' element={<Admin/>}>
            <Route path='/admin/dashboard' element={<Dashboard/>} />
          </Route>
          <Route path='/' element={<Layout/>}>

          <Route path='/' element={<Home/>} />
          <Route path='/categories' element={<Categories/>} />
          <Route path='/items' element={<Items/>} />
          <Route path='/item/:id' element={<Item/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='*' element={<Navigate to='/'/>} />
          </Route>
        </Routes>
      
    
      </BrowserRouter>
  )
}

export default App