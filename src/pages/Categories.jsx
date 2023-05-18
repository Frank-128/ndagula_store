import React from "react";
import { Link } from "react-router-dom";
import Category from "../components/category/Category";
import { themeController } from "../contexts/AuthContext";
import "./categories.css";

function Categories() {
  const {themes,theme} =themeController();
  return (
    <div className="categories">
      <div className="ad">
        <img src="./the_ad.png" alt="logo" />
      </div>
      <div style={theme} className="category_content">
        <div className="content_title">Categories</div>
        <div className="categories_items">
          <Link to='/items'><Category name='men' image='./men.jpeg'/></Link>
          <Link to='/items'><Category name='women' image='./women.jpg'/></Link>
          <Link to='/items'><Category name='school' image='./uniform.jpeg'/></Link>
          <Link to='/items'><Category name='curtains' image='./curtains.jpeg'/></Link>
          <Link to='/items'><Category name='vikoi' image='./vikoi.jpeg'/></Link>
          <Link to='/items'><Category name='bedsheet' image='./bedsheet.jpeg'/></Link>
        </div>
      </div>
    </div>
  );
}

export default Categories;
