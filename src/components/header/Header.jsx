import { Notifications, SearchOutlined, ShoppingBasketOutlined } from '@mui/icons-material'
import React from 'react'
import { useRef,useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
function Header() {
    const [activeTab,setActiveTab]=useState(0)

  
    
   
  return (
    <div className='header'>
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
            <ShoppingBasketOutlined/>
            <Notifications />
            <div className='avatar'>
                <img src="mbappe.jpg"  alt="no image now" />
                <span>Welcome, Frank</span>
                
            </div>
        </div>
    </div>
  )
}

export default Header