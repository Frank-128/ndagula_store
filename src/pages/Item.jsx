import React from 'react'
import { useState,useEffect,useRef } from 'react'
import './Item.css'
import {gallery} from '../assets/data'
import { Navigate, useLocation } from 'react-router-dom';
import axios from '../axios';
import { useDispatch, useSelector } from 'react-redux';
import { increament,decreament,colorChooser, addToCart } from '../redux/cartSlice';
import { Alert, Snackbar } from '@mui/material'

function Item() {
  const [amount,setAmount]=useState(0);
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [sampleItem,setSampleItem]=useState({});
  const [size,setSize]=useState([]);
  const [color,setColor] =useState([]);
  const [chosenColor,setChosenColor]=useState('')
  const [chosenSize,setChosenSize] = useState('')
  const myref = useRef([])
  const [selectedColors,setSelectedColors] = useState([])
  const [isOpen,setIsopen] = useState(false);

  const body = {
    name : sampleItem?.name,
    value:sampleItem?.price,
    amount:amount,
    size:size.toString(),
    color:chosenColor.toString(),
    image:sampleItem?.image,
  }

  const count = useSelector((state)=>state.cart.value);
  const dispatch = useDispatch()

  const chooseColor=(colorId,item)=>{
    
    if(myref.current[colorId].style.outline === "blue solid 3px" ){

      myref.current[colorId].style.outline="none";
    }else{
      myref.current[colorId].style.outline="blue solid 3px";
    }
    
    chosenColor.includes(item) && setChosenColor(chosenColor.filter((value)=>value!== item));
    !chosenColor.includes(item) && setChosenColor([...chosenColor,item]) ;
    
  }
  useEffect(()=>{
    // setSampleItem(gallery[id-1]);
    
    
    const fetchIt =  async ()=>{
       try { const res = await axios.get('/showItem/'+id)
        
        setSampleItem(res.data.product);
        
        
      }
      catch(err){
        console.log(err)
        return <Navigate to='/items' />
      }
    }
    fetchIt();
    

  },[])
  useEffect(()=>{
    if(sampleItem.size){
      const arr = sampleItem.size.split(',').map((item,index)=>item.toUpperCase())
      
      setSize(arr)
    }
    if(sampleItem.color){
      const arrColor = sampleItem.color.split(',')
      setColor(arrColor)
    }
  },[sampleItem])
 
 
  return (
    <div className='item'>
        <div className='product_item'>
            <img src={'http://localhost:8000/storage/'+sampleItem?.image}  alt={`${sampleItem?.image}`} />
        </div>
        <div className='product_details'>
          <div><b>{sampleItem?.name}</b></div>
          <div>
            <strong>Price : </strong>
            <span>{sampleItem?.price} Tshs</span>
          </div>
          <div className='size'>
          <strong>Size</strong>
          <span>
            <select>
       
       {size.map((item,index)=>(<option key={index}>{item}</option>))}
       
             
             
            </select>
          </span>
          
          </div>
          <div className='color_container'>
            <strong>Color</strong>
            {
              color.map((item,index)=>( <span id={index} ref={(refs)=>myref.current[index]=refs}  onClick={()=>chooseColor(index,item)} style={{backgroundColor:item}} className='myColor'></span>))
            }
           


          </div>
          <div  className="amount">
            <strong>amount</strong>
            <button disabled={amount<1?true:false} onClick={()=>setAmount(amount-1)}>-</button>
            <span>{amount}</span>
            <button onClick={()=>setAmount(amount+1)}>+</button>
          </div>
          <button onClick={()=>{dispatch(addToCart(body));setIsopen(true)}}>ADD TO CART</button>
        </div>
        <Snackbar
          open={isOpen}
          autoHideDuration={3000}
          onClose={()=>setIsopen(false)}
          anchorOrigin={{vertical:'bottom',horizontal:'center'}}
        >
        <Alert onClose={()=>setIsopen(false)} severity="success" sx={{width:'100%'}}>Added to cart successfully!!</Alert>
        </Snackbar>
          
    </div>
  )
}

export default Item