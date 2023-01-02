import React, { useState } from 'react'
import ListData from './ListData'
import ListView from './ListView'
import classes from './../index.module.scss'

const ChooseList = () => {
    const [data] = useState(ListData);
  return (
    <>
    <ul className={classes.list}>
    {
        data.map((currn,ind)=>{
            return(
                <ListView key={ind} {...currn}/>
            )
        })
    }
    </ul>
    </>
  )
}

export default ChooseList