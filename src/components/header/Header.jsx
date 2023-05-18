import { DarkMode, LightMode, Logout, Notifications, SearchOutlined, ShoppingBasketOutlined, TheaterComedySharp, TheatersSharp } from '@mui/icons-material'
import React from 'react'
import { useRef,useState } from 'react'
import { Link } from 'react-router-dom'
import { themeController } from '../../contexts/AuthContext'
import { userAuth } from '../../contexts/UserAuthContext'
import './header.css'
import { useSelector } from 'react-redux'
import { Badge, Snackbar } from '@mui/material'
function Header() {
    const [activeTab,setActiveTab]=useState(0)
    const {themes,theme,themeChange} = themeController();
    const {user,logOut} = userAuth();
    const order = useSelector((state)=>state.cart.order);
    
   
  return (
    <div className='header' style={theme}>
        <div onClick={()=>{setActiveTab(0)}} className='shop'>
           <Link className='link' to='/'> Ndagula Shop</Link>
        </div>
        <ul className='lists'>
            <li onClick={()=>{setActiveTab(0)}} className={activeTab === 0 ? 'active':''}><Link className='link'   to='/'>Home</Link></li>
            <li onClick={()=>{setActiveTab(1)}} className={activeTab === 1 ? 'active':''}><Link className='link'   to='/categories'>Categories</Link></li>
            <li onClick={()=>{setActiveTab(2)}} className={activeTab === 2 ? 'active':''}>Delivery</li>
            <li onClick={()=>{setActiveTab(3)}} className={activeTab === 3 ? 'active':''}>Contact</li>
        </ul>
        <div className='search'>
            <input type="search" placeholder='search product here'/>
            <SearchOutlined/>
        </div>
        <div className='icons'>
            {
              theme === themes.light ? <DarkMode titleAccess='toggle dark mode' onClick={themeChange} />: <LightMode titleAccess='toggle light mode' onClick={themeChange} /> 
            }
            <Link to='/cart' style={{textDecoration:'none',color:'black'}}>
            <Badge color='primary' badgeContent={order} >
            <ShoppingBasketOutlined/>
            </Badge>
            </Link>
            <Notifications />
            <div className='avatar'>
               
                <img src="/mbappe.jpg"  alt="no image now" />
                <span>Welcome, <b>{user?.name}</b></span>
                <Logout onClick={logOut}/>
                
            </div>
        </div>
    </div>
  )
}

export default Header