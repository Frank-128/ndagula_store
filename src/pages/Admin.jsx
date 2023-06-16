import { ArrowDropDown, Close, Menu, Message, Notifications, Person, Shop } from "@mui/icons-material";
import React from "react";
import './Admin.css'
import { notifications } from "../assets/data";
import { Outlet, useNavigate } from "react-router-dom";
function Admin() {
    const [openNav,setOpenNav] = React.useState(true);
    const navigate = useNavigate();
    
  return (
    <div className="admin">
     <div className="admin_navbar">
        <div className="nav_item">
         <span> Ndagula Store</span>
          <span  onClick={()=>setOpenNav(!openNav)} className="sidebar_icon">{openNav?<Menu />:<Close/>}</span>
        </div>
        <div className="nav_item">Admin Panel</div>
        <div className="nav_item">
          <ul className="nav_icons">
            <li>
              <Notifications />
            </li>
            <li>
              <Message />
            </li>
            <li className="avatar_container">
              <img src="/Goat.jpeg" className="avatar1" alt="goat image" />
             <span> Ndagula</span>
             <ArrowDropDown/>
            </li>
          </ul>
        </div>
      </div>
     <div className={openNav?"sidebar closeSidebar ":"sidebar"}>
        <div className="upperSidebar">
            
                <div className="sideItem" onClick={()=>{navigate('/admin/');setOpenNav(true)}}>Dashboard</div>
                <div className="sideItem" onClick={()=>{navigate('/admin/product');setOpenNav(true)}}>Products</div>
                <div className="sideItem" onClick={()=>{navigate('/admin/order');setOpenNav(true)}}>Orders</div>
            
        </div>
        <div className="lowerSidebar">
        <div className="sideNotification">Notifications</div>
        <div className="sideNotificationDetails">
        {
            notifications.map((item)=>(
                <div className="oneItem">
                <div className={"oneItemAvatar"} style={item.type==="shop"?{backgroundColor:"tomato"}:item.type==="customer"?{backgroundColor:"lightgreen"}:{backgroundColor:"deepskyblue"}}>
                   {item.type === "shop"?<Shop/>:item.type === "customer"?<Person/>:<Message/>}
                </div>
                <div>
                <b>{item.message}</b>
                <span>{item.time}</span>
                </div>
            </div>

           ))
        }
           
            
        </div>
        </div>
      </div>
     <main className={openNav?"main":"openNav main"}>
       <Outlet/>
     </main>
     
    </div>
  );
}

export default Admin;
