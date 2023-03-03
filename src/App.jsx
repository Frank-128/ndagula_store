import React from 'react'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Header from './components/header/Header'
import Categories from './pages/Categories'
import Home from './pages/Home'
import './App.css'
import Items from './pages/Items'
function App() {
  
  return (
      <BrowserRouter>
    <div className='app'>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/categories' element={<Categories/>} />
          <Route path='/items' element={<Items/>} />
          <Route path='*' element={<Navigate to='/'/>} />
        </Routes>
      
    </div>
      </BrowserRouter>
  )
}

export default App