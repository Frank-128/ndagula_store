import { DarkMode, LightMode, Logout, Notifications, SearchOutlined, ShoppingBasketOutlined, TheaterComedySharp, TheatersSharp } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useRef,useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { themeController } from '../../contexts/AuthContext'
import { userAuth } from '../../contexts/UserAuthContext'
import './header.css'
import { useSelector } from 'react-redux'
import { Badge, Snackbar } from '@mui/material'
function Header() {
    const [openSignOut,setOpenSignOut] = useState(false);
    const [activeTab,setActiveTab]=useState(0)
    const {themes,theme,themeChange} = themeController();
    const {user,logOut} = userAuth();
    const order = useSelector((state)=>state.cart.order);
    const location = useLocation();

    useEffect(()=>{
      const page = location.pathname.split('/')[1];
      page === ""?setActiveTab(0):page === "categories"?setActiveTab(1):page === "history"?setActiveTab(2):page === "contact"?setActiveTab(3):""
    },[location])
   const handleClick = ()=>{
  window.addEventListener('click',(e)=>{
 
    if(e.target.classList.contains('user-avatar')){
      console.log('hello')
      setOpenSignOut(true)
      }
   else if(!e.target.classList.contains('signout')){
    console.log('world')
    setOpenSignOut(false)
    }
  
  })
   }
   console.log(openSignOut)
  return (
    <div className='header' style={theme}>
        <div onClick={()=>{setActiveTab(0)}} className='shop'>
           <Link  to='/'> Ndagula Shop</Link>
        </div>
        <ul className='lists'>
            <li onClick={()=>{setActiveTab(0)}} className={activeTab === 0 ? 'active':''}><Link   style={theme}   to='/'>Home</Link></li>
            <li onClick={()=>{setActiveTab(1)}} className={activeTab === 1 ? 'active':''}><Link  style={theme}    to='/categories'>Categories</Link></li>
            <li onClick={()=>{setActiveTab(2)}} className={activeTab === 2 ? 'active':''}><Link  style={theme} to='/history'>History</Link></li>
            <li onClick={()=>{setActiveTab(3)}} className={activeTab === 3 ? 'active':''}><Link  style={theme} to='/contact'>Contact</Link></li>
        </ul>
        <div className='search'>
            <input type="search" placeholder='search product here'/>
            <SearchOutlined/>
        </div>
        <div className='icons'>
            {
              theme === themes.light ? <DarkMode titleAccess='toggle dark mode' onClick={themeChange} />: <LightMode titleAccess='toggle light mode' onClick={themeChange} /> 
            }
            <Link to='/cart' style={theme}>
            <Badge color='primary' badgeContent={order} >
            <ShoppingBasketOutlined/>
            </Badge>
            </Link>
            <Notifications />
            <div className='avatar'>
               
                <img src="/mbappe.jpg"  alt="no image now" />
                <span className='user-avatar' onClick={handleClick}>Welcome, {user?.name}</span>
              { openSignOut &&
                <div style={theme} className="signout">
               Log Out <Logout onClick={logOut} />
                
                </div>
              }
            </div>
        </div>
    </div>
  )
}

export default Header