import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../../Images/logo.svg'
import classes from './index.module.scss'

const Footer = () => {
  return (
   <footer className={classes.footer}>
   <Container>
   <Row>
   <Col md={6}>
   <a href="#" className='mb-3 d-block'>
   <img src={logo} alt="logo" />
   </a>

   <p>We will help you bringing your complex software vision to life.</p>
   </Col>

   <Col md={3} sm={6}>
   <ul>
   <li><a href="">More infromation</a></li>
   <li><a href="">FAQ</a></li>
   <li><a href="">Term of use</a></li>
   </ul>
   </Col>

   <Col md={3} sm={6}>
   <ul>
   <li><a href="">Twitter</a></li>
   <li><a href="">Facebook</a></li>
   <li><a href="">Instagram</a></li>
   </ul>
   </Col>
   </Row>
   </Container>
   </footer>
  )
}

export default Footer