
import React, { useEffect, useState } from 'react'
import axios from '../../axios';
import './AddItem.css'

function AddItem({setOpener}) {
    const [name,setName]=useState();
    const [category,setCategory]=useState('');
    const [price,setPrice]=useState(0);
    const [amount,setAmount]=useState(0);
    const [rating,setRating]=useState(1)
    const [image,setImage]= useState(null);
    const [checkedSize,setCheckedSize]=React.useState([]);
    const [checkedColor,setCheckedColor]=React.useState([]);
    const [checkedCategory,setCheckedCategory]=React.useState([]);
    const [body,setBody]=React.useState(null);
    const handleClick = (e)=>{
        if(e.target.classList.contains('backdrop')){
           setOpener(false);
        }
    }
    
    const handleCheckedSize = (e)=>{
        const THevalue= e.target.value;
        const checkedItem = e.target.checked;
        !checkedItem && setCheckedSize(checkedSize.filter((item)=>item!== THevalue)) 
     checkedItem && checkedSize.includes(THevalue) === false && setCheckedSize([...checkedSize,THevalue]);
    }
     const handleCheckedColor = (e)=>{
        const TheColor= e.target.value;
        
        const checkedItem = e.target.checked;
        !checkedItem && setCheckedColor(checkedColor.filter((item)=>item!== TheColor)) 
     checkedItem && checkedColor.includes(TheColor) === false && setCheckedColor([...checkedColor,TheColor]);
    }
    const handleCheckedCategory = (e)=>{
        const THevalue= e.target.value;
        const checkedItem = e.target.checked;
        !checkedItem && setCheckedCategory(checkedCategory.filter((item)=>item!== THevalue)) 
     checkedItem && checkedCategory.includes(THevalue) === false && setCheckedCategory([...checkedCategory,THevalue]);
    }
    const handleChange = async (e)=>{
      e.preventDefault();
      setBody({
        'name':name,
        'category':checkedCategory,
        'price':price,
        'size':checkedSize,
        'color':checkedColor,
        'amount':amount,
        'rating':rating,
        'image':image,
      });
      const formData = new FormData();
      
        formData.append('name',name)
        formData.append('category',checkedCategory.toString())
        formData.append('price',price)
        formData.append('size',checkedSize.toString())
        formData.append('color',checkedColor.toString(),)
        formData.append('amount',amount)
        formData.append('rating',rating)
        formData.append('image',image)
      
     
      console.log(body);
     try{ const res = await axios.post('/addProduct',formData,{headers:{
        "Content-Type":"multipart/form-data"
      }});
      console.log(res.data);
      setOpener(false);
    }catch(err){
        console.log(err);
    }}

    useEffect(()=>{
        try{
            const fetchIt = async()=>{
                console.log('run')
                const res = await axios.get('/showAllCategories');
                setCategory(res.data[0]);
            }
            fetchIt();

        }catch(err){
            console.log(err)
        }
        
    },[])
    
    
  return (
    <div  onClick={handleClick} className='backdrop'>
    
        <form className='add_item'  onSubmit={handleChange} encType='multipart/form-data'>
        
            <div className='prod_detail'>
                <label htmlFor='name'>
                    Product name
                </label>
                <input type='text' name='name' required placeholder="men's jeans" id='name' onChange={(e)=>{setName(e.target.value)}} />
            </div>
            <div className='prod_detail'>
                <label htmlFor='category'>
                    Product Categories
                </label>
               <div className="prod_categories">
              {category !== '' && category?.map((item)=> <div className='cat_options'>
                <input type='checkbox' id={item.id}  value={item.id}  onChange={handleCheckedCategory} />
                <label htmlFor={item.id}>
                    {item.name}
                </label>
                </div>)}
               
               </div>
            </div>
            <div className='prod_detail'>
                <label htmlFor='price'>
                    Product Price
                </label>
                <input type='number' id='price' required placeholder={1000} name='price' onChange={(e)=>{setPrice(e.target.value)}}/>
            </div>
            <div className='prod_detail'>
                <label htmlFor='size'>
                    Product Size
                </label>
                <div className='prod_sizes'>

                <div className='size_options'>
                <input type='checkbox' id='xs'  value='xs'  onChange={handleCheckedSize} />
                <label htmlFor='xs'>
                    xs
                </label>
                </div>
                <div className='size_options'>
                <input type='checkbox' id='s'  value='s'  onChange={handleCheckedSize}/>
                <label htmlFor='s'>
                    s
                </label>
                </div>
                <div className='size_options'>
                <input type='checkbox' id='m'  value='m'  onChange={handleCheckedSize}/>
                <label htmlFor='m'>
                    m
                </label>
                </div>
                <div className='size_options'>
                <input type='checkbox' id='l'  value='l'  onChange={handleCheckedSize} />
                <label htmlFor='l'>
                    l
                </label>
                </div>
                <div className='size_options'>
                <input type='checkbox' id='xl'   value='xl'  onChange={handleCheckedSize}/>
                <label htmlFor='xl'>
                    xl
                </label>
                </div>
                <div className='size_options'>
                <input type='checkbox' id='xxl'  value='xxl'  onChange={handleCheckedSize}/>
                <label htmlFor='xxl'>
                    xxl
                </label>
                </div>
                <div className='size_options'>
                <input type='checkbox' id='xxxl'  value='xxxl' onChange={handleCheckedSize} />
                <label htmlFor='xxxl'>
                    xxxl
                </label>
                </div>
                </div>
               
            </div>
            <div className='prod_detail'>
                    Product Available Colors
               
                <div className='prod_colors'>
                <div className='color_options'>
                <input type='checkbox' id='red' value='red' name='color' onChange={handleCheckedColor} />
                <label htmlFor='red'>
                    red
                </label>
                </div>
                <div className='color_options'>
                <input type='checkbox' id='orange' value='orange' name='color' onChange={handleCheckedColor} />
                <label htmlFor='orange'>
                    orange
                </label>
                </div>
                <div className='color_options'>
                <input type='checkbox' id='yellow' value='yellow' name='color' onChange={handleCheckedColor} />
                <label htmlFor='yellow'>
                    yellow
                </label>
                </div>
                <div className='color_options'>
                <input type='checkbox' id='green' value='green' name='color' onChange={handleCheckedColor} />
                <label htmlFor='green'>
                    green
                </label>
                </div>
                <div className='color_options'>
                <input type='checkbox' id='blue' value='blue' name='color' onChange={handleCheckedColor} />
                <label htmlFor='blue'>
                    blue
                </label>
                </div>
                <div className='color_options'>
                <input type='checkbox' id='indigo' value='indigo' name='color' onChange={handleCheckedColor} />
                <label htmlFor='indigo'>
                    indigo
                </label>
                </div>
                <div className='color_options'>
                <input type='checkbox' id='violet' value='violet' name='color' onChange={handleCheckedColor} />
                <label htmlFor='violet'>
                    violet
                </label>
                </div>
                </div>
            </div>
            <div className='prod_detail'>
                <label htmlFor='amount'>
                    Product Available Amount
                </label>
                <input type='text' id='amount' required name='amount' onChange={(e)=>{setAmount(e.target.value)}}/>
            </div>
            <div className='prod_detail noflex'>
                <label>
                    Product Rating
                </label>
               <select onChange={(e)=>setRating(e.target.value)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>

               </select>
            </div>
            <div className='prod_detail'>
                <label htmlFor='image'>
                    Product Image
                </label>
                <input type='file' id='image' name='image' required onChange={(e)=>setImage(e.target.files[0])}/>
            </div>
            <div className='prod_buttons'>
                <button onClick={()=>setOpener(false)} style={{backgroundColor:`rgba(255,0,0,.8)`}}>Cancel</button>
                <button type='submit'>Create Product</button>
            </div>
        </form>
    </div>
  )
}

export default AddItem