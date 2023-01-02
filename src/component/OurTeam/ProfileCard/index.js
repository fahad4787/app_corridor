import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import ProfileCardDetails from '../ProfileCardDetails'
import ProfileCardData from '../ProfileData'

const ProfileCard = () => {
    const [data] = useState(ProfileCardData);
  return (
    <Row>
    {
        data.map((currn, ind)=>{
            return(
                <ProfileCardDetails key={ind} {...currn}/>
            );
        })
    }
    </Row>
  )
}

export default ProfileCard