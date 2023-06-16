import React from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import Header from './components/header/Header'
import Categories from './pages/Categories'
import Home from './pages/Home'
import './App.css'
import Items from './pages/Items'
import Item from './pages/Item'
import Login from './pages/Login'
import History from './pages/History'
import {userAuth} from './contexts/UserAuthContext'
import { useEffect } from 'react'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Admin from './pages/Admin'
import Dashboard from './components/dashboard/Dashboard'
import Product from './components/adminProduct/Product'
import Order from './components/order/Order'
import Contact from './pages/Contact'
import Page404 from './pages/Page404'
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
const {user} = userAuth();


 
  return (
      <BrowserRouter>
   
     
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/404' element={<Page404/>} />
          {user?.role === 1 && <Route path='/admin' element={<Admin/>}>
            <Route path='/admin' element={<Dashboard/>} />
            <Route path='/admin/product' element={<Product/>} />
            <Route path="/admin/order" element={<Order/>} />
            <Route path='/admin/*' element={<Navigate to='/' />} />
          </Route>}
          {user?.role !== 1 &&
          <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/categories' element={<Categories/>} />
          <Route path='/history' element={<History/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/items' element={<Items/>} />
          <Route path='/item/:id' element={<Item/>} />
          <Route path='/cart' element={<Cart/>} />
          </Route>
          }

          <Route path='*' element={<Navigate to='/404'/>} />
        </Routes>
      
    
      </BrowserRouter>
  )
}

export default App