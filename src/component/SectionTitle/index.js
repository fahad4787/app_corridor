import React from 'react';
import classes from './index.module.scss'
import Title from './Title';


const SectionTitle = (props) => {
  return (
    <div className={classes.sectin_title}>
    <Title {...props}/>
    <p>{props.des}</p>
    </div>
  )
}

export default SectionTitle