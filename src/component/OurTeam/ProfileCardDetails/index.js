import React from 'react'
import { Card, Col } from 'react-bootstrap'
import profile from '../../../Images/profile.jpg'
import ProfileSocialLink from '../ProfileSocialLink'
import classes from '../index.module.scss'


const ProfileCardDetails = (props) => {
  return (
    <Col lg={3} sm={6} className="mb-5 mb-lg-0">
    <Card className={classes.card}>
    <div className={classes.img_box}>
    <img src={props.profile} alt="img" />
    <div className={classes.qoute}>
    <p>{props.qoute}</p>
    </div>
    </div>

    <div className='text-center my-3'>
    <h5 className='fw-bold'>{props.name}</h5>
    <p>{props.design}</p>
    </div>
    <ProfileSocialLink/>
    </Card>
    </Col>
  )
}

export default ProfileCardDetails