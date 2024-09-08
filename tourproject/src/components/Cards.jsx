import React from 'react'
import { Card } from './Card'
export const Cards = ({tours, removeTour}) => {

    
  return (
    <div className='container'>
        {
            tours.map((data,i)=>{
                return(<Card  removeTour={removeTour} data={data} key={data.id} />)
            })
        }
    </div>
  )
}
