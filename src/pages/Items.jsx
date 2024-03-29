import { ShoppingBasket, Star } from "@mui/icons-material";
import { Link, Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import { gallery } from "../assets/data";
import "./items.css";
import axios from "../axios";
import { themeController } from "../contexts/AuthContext";
import { useState } from "react";
import { CircularProgress } from "@mui/material";


function Items() {
  const {themes,theme} = themeController();
  const [items,setItems] = useState(null);

  useEffect(()=>{
    (async()=>{
      const res = await axios.get('/showAllProducts');
      
      setItems(res.data.products)
    })()
  },[])
  
  return (
    <div style={theme} className="items">
    <div className="heading_top">
    <h1>Category</h1>
   
    </div>
      {items ===null?<div>.....loading <CircularProgress/> </div>:items.map((k) => {
        return (
          <div key={k.id} className={theme===themes.light?"items_child light":"items_child dark"}>
            <img src={'http://localhost:8000/storage/'+k.image} alt="" />
          
            <div className="about">
              <span style={{fontSize:'20px'}}><b>{k.name}</b></span>
              <span>{k.price}</span>
              <span>
                {" "}
                {Array(k.rating)
                  .fill()
                  .map((_, i) => (
                    <Star key={i} style={{ color: "goldenrod" }} />
                  ))}
              </span>
              <Link to={`/item/${k.id}`}>

              <button >VIEW PRODUCT</button>
              </Link>
            </div>
          </div>
        );
      })}
      
    </div>
  );
}

export default Items;
