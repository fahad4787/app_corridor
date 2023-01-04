import React from 'react'

const ListView = (props) => {
  return (
    
    <li>
    <h6 className='my-4'>{props.title}</h6>
    <p>{props.text1}</p>
    <p>{props.text2}</p>
    </li>
  )
}

export default ListView