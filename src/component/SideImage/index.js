import React from 'react'

const SideImage = (props) => {
  return (
   <div className='img-box'>
   <img className='rounded' src={props.img} alt="" />
   </div>
  )
}

export default SideImage