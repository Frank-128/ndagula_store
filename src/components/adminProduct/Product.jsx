import React, { useState } from "react";
import "./Product.css";
import { Star, Store } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { categories, gallery } from "../../assets/data";
import AddItem from '../additem/AddItem';
import AddCategory from "../addCategory/AddCategory";

function Product() {
    const [catToggler,setCatToggler]=useState(false);
    const [opener,setOpener] = useState(false);
    const [catOpener,setCatOpener] = useState(false);
  return (
    <div className="product">
      <div className="product_heading">
        <Store />
        <strong>Products/</strong><span>{catToggler?"All Products":"Categories"}</span>
      </div>
      <div className="product_subheading">
        <div>
          <Button style={!catToggler ?{backgroundColor:"lightblue"}:{backgroundColor:"inherit"}} onClick={()=>setCatToggler(false)}>Categories</Button>
          <Button style={catToggler ?{backgroundColor:"lightblue"}:{backgroundColor:"inherit"}} onClick={()=>setCatToggler(true)}>All Products</Button>
        </div>

        <div>
          <Button onClick={()=>setCatOpener(true)}>Add Category</Button>
          <Button onClick={()=>setOpener(true)}>Add Product</Button>
        </div>
      </div>
      <div className="product_main_content ">
     { catToggler ? <Table>
        <TableHead>
            <TableRow>
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>Image</b></TableCell>
                <TableCell><b>Rating</b></TableCell>
                <TableCell><b>Price</b></TableCell>
                <TableCell><b>Amount</b></TableCell>

            </TableRow>
        </TableHead>
        <TableBody >
        {gallery.map((item,i)=> <tr key={i}>
          <TableCell>{item.name}</TableCell>
          <TableCell><img className="item_product" src={"/"+item.image} alt="no image" /> </TableCell>
          <TableCell>{Array(item.rating).fill().map((_,i)=>(<Star style={{color:'gold'}}/>))}</TableCell>
          <TableCell>{item.price}</TableCell>
          <TableCell>{item.amount}</TableCell>
        </tr>)}
        </TableBody>
      </Table>:
       <div className="catItems">
      { categories.map((item,i)=><div key={i} className="catItem">
            <img src={"/"+item.image} />
            <span>{item.name}</span>
        </div>)
      }
       </div>
       }
      
      </div>
      {opener && <AddItem setOpener={setOpener}/>}
      {catOpener && <AddCategory setCatOpener={setCatOpener}/>}
    </div>
  );
}

export default Product;
