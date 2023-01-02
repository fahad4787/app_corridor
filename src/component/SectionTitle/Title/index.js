import React from 'react'
const Title = (props) => {
  return (
    <>
    <h2>{props.title} <span>{props.colorText}</span></h2>
    </>
  )
}

export default Title