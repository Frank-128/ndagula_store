import React from 'react'
import './category.css'
function Category({image,name}) {
  return (
    <div className='category'>
        <img src={image} alt="" />
        <span className='category_name'>{name}</span>
    </div>
  )
}

export default Category