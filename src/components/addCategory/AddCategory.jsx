import React,{useState} from 'react'
import './AddCategory.css'
import axios from '../../axios';
function AddCategory({setCatOpener}) {
  const [name,setName] = useState('');
  const [image,setImage] = useState(null);
   
  const handleSubmit = async (e)=>{
        e.preventDefault();
        

       
        const formData = new FormData();

        formData.append('name',name)
        formData.append('image',image)
        try{
          
            
              const res = await axios.post('/addCategory',formData,{headers:{"Content-Type":"multipart/form-data"}});
              setCatOpener(false);
          
        
        }catch(err){
          console.log(err)
        }

      
        
    }
    const handleClose = (e)=>{
      if(e.target.classList.contains("addCategory")){
        setCatOpener(false);
      }
    }
console.log({name:name,image:image})
  return (
    <div onClick={handleClose} className='addCategory'>
    
       <form className='catForm'  encType='multipart/form-data' onSubmit={handleSubmit}>
       <div className="catElement">
            <label htmlFor="name">Category Name</label>
            <input type="text" id="name" onChange={(e)=>setName(e.target.value)} />
        </div>
        <div className="catElement">
            <label htmlFor="image">Category Image</label>
            <input type="file" id="image" onChange={(e)=>setImage(e.target.files[0])} />
        </div>
        <div className='cat_buttons'>
            <button onClick={()=>setCatOpener(false)}>Cancel</button>
            <button  type='submit'>ADD CATEGORY</button>
        </div>
       </form>
    

    </div>
  )
}

export default AddCategory