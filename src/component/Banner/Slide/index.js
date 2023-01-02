import React from 'react'
import { Col, Row } from 'react-bootstrap'
import logo from '../../../Images/logo-w.svg'

const Slide = () => {
  return (
    <div  className="banner-sec">
    <Row className='align-items-center flex-column justify-content-center'>
    <Col md={12}>
    <div className="banner-text text-center mb-5">
      We are
      <span> IT EXPERTS </span>
       ready to Transfrom Your Bussiness!
    </div>
    </Col>
    <Col md={12}>
    <div className='img-box'>
    <img src={logo} alt="logo" />
    </div>
    </Col>
    </Row>
  </div>
  
  )
}

export default Slide