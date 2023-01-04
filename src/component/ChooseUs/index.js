import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from '../SectionTitle'
import SideImage from '../SideImage'
import AccrodionSection from './Accordion'
import  choose from '../../Images/choose.jpg'
import  mission from '../../Images/mission.jpg'
import ChooseList from './List'


const ChooseUs = () => {
  return (
    <section className='skin-bg'>
    <Container>
    <Row className='align-items-center mb-5'>
    <Col lg={6} md={12} >
    <SectionTitle  title="Why choose"
    colorText=" app corridor"/>
    <ChooseList/>
    </Col>
    <Col lg={6} md={12}>
    <SideImage img={choose}/>
    </Col>
    </Row>

    <Row>
    <Col lg={6} md={12} className="mb-5">
    <SideImage img={mission}/>
    </Col>
    <Col lg={6} md={12}>
    <SectionTitle  title="Our"
    colorText="Services"/>
   <AccrodionSection/>
    </Col>
    </Row>
    </Container>
    </section>
  )
}

export default ChooseUs