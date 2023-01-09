import React from 'react'

const ListView = (props) => {
  return (
    
    <li>
    <h6 className='mb-3'>{props.title}</h6>
    <p className='mb-3'>{props.text1}</p>
    <p className='mb-3'>{props.text2}</p>
    </li>
  )
}

export default ListView