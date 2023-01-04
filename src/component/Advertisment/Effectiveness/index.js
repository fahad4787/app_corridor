import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import EffectiveData from './EffectiveData'
import EffectiveDetails from './EffectiveDetails'
import classes from '../index.module.scss'

const EffectivenessTab = () => {
    const [data] = useState(EffectiveData)
  return (
   <>
   <h4 className={classes.main_heading}>Project effectiveness on diffrent stages</h4>
   <Row>
   {
    data.map((currn , ind)=>{
        return(
            <EffectiveDetails key={ind} {...currn}/>
        );
    })
   }
   </Row>
   </>
  )
}

export default EffectivenessTab