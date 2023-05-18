import React, { useEffect,useState } from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { themeController } from '../contexts/AuthContext';
import { removeItem } from '../redux/cartSlice';

function Cart() {
    const products = useSelector((state)=>state.cart.products);
    const dispatch = useDispatch();
    const {theme} = themeController()
    const [subtotal,setSubtotal]= useState(null)
    const [cartItems,setCartItems]=useState([])
    useEffect(()=>{
        var total=0;
        for(var i=0;i<products.length;i++){
            var value1 = products[i].value
            var value2 = products[i].amount ;
            total += value1*value2;
            
        }
        setSubtotal((total))
        
    },[products])
   

    useEffect(()=>{
        const result = products.reduce((acc,obj)=>{
            const {name,value,amount} = obj;
            
            const existingObj = acc.find(item => item.name === name);

            if(existingObj){
                existingObj.counter++;
                existingObj.amount+=amount;
            }
            else{
                acc.push({name,value,amount,counter:1});
            }
            return acc;
        },[])
        setCartItems(result);
    },[products])
    
  return (
    
    <div className='cart' >
        <div className="cart_items" style={theme}>
    <h1>My Cart</h1>
          {products.length === 0? <div>Your cart is empty </div>:<>
          <Table >
            <TableHead>
                <TableRow>
                    <TableCell><span>Name</span></TableCell>
                    <TableCell><span>Image</span></TableCell>
                    <TableCell><span>Price </span></TableCell>
                    <TableCell><span>Amount </span></TableCell>
                    <TableCell>Action</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
            { products?.map((item,ine)=><TableRow >
                <TableCell>

                <h4>{item.name}</h4>
                </TableCell>
                <TableCell>

               <img className='cart_image' src={"http://localhost:8000/storage/"+item.image}  alt={item.image} />
                </TableCell>
                <TableCell><span>{item.value}</span></TableCell>
               <TableCell><span>{item.amount}</span></TableCell>
               <TableCell > <button onClick={()=>{dispatch(removeItem(ine));}} style={{backgroundColor:"red"}}>Remove</button> </TableCell>
               </TableRow>)}
            </TableBody>
          </Table>

              
          </>
            }
        </div>
        <div className="cart_total" style={theme}>
            <h2>My Cart Summary</h2>
            {cartItems.length == 0?<div>Your cart is empty</div>:<>
                {cartItems.map((element)=><div>{element.name}....................{element.value}x{element.amount}</div>)}
            </>}
            <h2>Subtotal:{subtotal}</h2>
        </div>
    </div>
  )
}

export default Cart