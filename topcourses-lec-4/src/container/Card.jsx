import React, { useState } from 'react'
import { RiHeartFill } from "react-icons/ri";
import { RiHeartLine } from "react-icons/ri";
export const Card = ({course}) => {
    const {id, title,image,description }= course;
    const [liked, setLiked] = useState(false);
  return (
    <div className='card'>
        <div className='img-container'>
            <img src={image.url} alt='image' loading='lazy' className='image' />
            <button className='h-btn' onClick={()=>setLiked(!liked)}>      
                {
                    liked ? <RiHeartFill /> : <RiHeartLine /> 
                }
            </button>
        </div>
        <div className='text-container'>
            <h3 className='title'>{title}</h3>
            <p className='desc'>{description.substring(0, 70)}...</p>
        </div>
    </div>
  )
}
