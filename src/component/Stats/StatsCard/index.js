import React, { useState } from 'react'
import { Row } from 'react-bootstrap';
import StatsData from './StatsData'
import StatsCardDetails from './StatsCardDetails';

const StatsCards = () => {
    const [data] = useState(StatsData);
  return (
    <Row>
    {data.map((currn,ind)=>{
        return(
            <StatsCardDetails key={ind} {...currn}/>
        );
    })}
    </Row>
    
  )
}

export default StatsCards