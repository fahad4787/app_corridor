import React from 'react'

const SideImage = (props) => {
  return (
   <div className='img-box'>
   <img className='rounded mb-lg-0 mb-5' src={props.img} alt="" />
   </div>
  )
}

export default SideImage