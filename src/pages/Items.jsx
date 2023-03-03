import { ShoppingBasket, Star } from "@mui/icons-material";
import React from "react";
import { gallery } from "../assets/data";
import "./items.css";
function Items() {
  return (
    <div className="items">
    <h1 style={{borderBottom:'2px solid lightgray'}}>Category</h1>
      {gallery.map((k) => {
        return (
          <div className="items_child">
            <img src={k.image} alt="" />
            <div className="about">
              <span style={{fontSize:'20px'}}><b>{k.name}</b></span>
              <span>{k.price}</span>
              <span>
                {" "}
                {Array(k.rating)
                  .fill()
                  .map((_, i) => (
                    <Star style={{ color: "goldenrod" }} />
                  ))}
              </span>
              <button>VIEW PRODUCT</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Items;
