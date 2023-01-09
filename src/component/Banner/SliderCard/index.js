import React from 'react'
import classes from "../index.module.scss"

const SliderCard = (props) => {
  return (
    <div className={classes.banner_holder}>
      <div className={classes.banner_sec}>
        <div className={`${classes.banner_text} text-center mb-5`}>
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