import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import EffectiveData from './EffectiveData'
import EffectiveDetails from './EffectiveDetails'
import classes from '../index.module.scss'
import SectionTitle from '../../SectionTitle'

const EffectivenessTab = () => {
    const [data] = useState(EffectiveData)
  return (
   <>
   <SectionTitle title="Project effectiveness on" colorText="diffrent stages" align="text-center"/>
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