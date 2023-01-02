import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import CardDetails from './Card'
import CardData from './CardData'



const ServiceCard = () => {
    const [data] = useState(CardData)
    
  return (
    <Row>
    
    {
    data.map((currn, ind)=>{
        return(
            <CardDetails key={ind} {...currn}/>
        );
    })
    }
    </Row>
  )
}

export default ServiceCard