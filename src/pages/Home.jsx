import {
  ArrowBack,
  ArrowForward,
  ArrowLeft,
  PreviewOutlined,
  SkipPrevious,
} from "@mui/icons-material";
import React, { useState } from "react";
import "./Home.css";
import { gallery } from "../assets/data";
import { themeController } from "../contexts/AuthContext";
function Home() {
    const [picture,setPicture]=useState(1)
    const [previousImage,setPreviousImage]=useState(0)
    const [nextImage,setNextImage]=useState(2)
    const {theme,themeChange} = themeController();
    const previous = ()=>{
        if(previousImage >=0){
            setPicture(previousImage)
            previousImage ===0?setPreviousImage(gallery.length-1):setPreviousImage(previousImage-1)
            setNextImage(picture)
        }
        
    }
    const next = ()=>{
        if(nextImage <=gallery.length-1){
            setPicture(nextImage)
            nextImage ===gallery.length-1?setNextImage(0):setNextImage(nextImage+1)
            setPreviousImage(picture)
        }
     
    }
    console.log(picture,nextImage,previousImage)
  return (
    <div className="home">
      <div className="title">
        <ul>
          <li>Newest</li>
          <li>Trending</li>
          <li>Popular</li>
        </ul>
      </div>
      <div className="content_body">
        <div className="controls">
          <ArrowBack onClick={()=>previous()} style={{ fontSize: "80px" }} className="directions" />
          <ArrowForward onClick={()=>next()} style={{ fontSize: "80px" }} className="directions" />
        </div>
        <div className="content_image previous">
          <img src={gallery[previousImage].image} alt="nothin" />
        </div>
        <div className="content_image current">
          <img src={gallery[picture].image} alt="nothin" />
        </div>
        <div className="content_image next">
          <img src={gallery[nextImage].image} alt="nothin" />
        </div>
      </div>
    </div>
  );
}

export default Home;
