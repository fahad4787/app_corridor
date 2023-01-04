import React from 'react'

const SliderCard = (props) => {
  return (
    <div className="banner-holder">
      <div className="banner-sec">
        <div className="banner-text text-center mb-5">
          {props.Stext}
          <span>{props.colorText}</span>
          {props.EText}
        </div>
        <div className="img-box">
          <img src={props.path} alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default SliderCard