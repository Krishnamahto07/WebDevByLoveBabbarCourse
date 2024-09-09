import React from 'react'

export const Button = ({data,clickHandler}) => {
  // console.log(clickHandler);
  return (
    <button onClick={(e)=>clickHandler(e)} className='btn'>{data.title}</button>
  )
}
