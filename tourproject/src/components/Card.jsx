import React, { useState } from 'react'

export const Card = ({datas,data,removeTour}) => {
    const [flag, setFlag] = useState(false);
    const {id, name, info, image,price} = data;

    
  return (
    <>
            <div id={id} className='card'>
                <img src={image}  
                className='image' alt='place-images' />
                <p>{price}</p>
                <p>{name}</p>
                <p>{
                        flag === true ? `${info}` : `${info.substring(0,80)}`
                    }
                    <span onClick={()=>setFlag(!flag)} className='flag-btn'> 
                        {flag === true ? 'show less' : `show more`}
                    </span>
                </p>
                <button id={id} onClick={()=>removeTour(id)}>Not Interested</button>
            </div>
    </>
  )
}
