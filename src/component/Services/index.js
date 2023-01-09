import React from 'react'
import { Container } from 'react-bootstrap'
import SectionTitle from '../SectionTitle'
import ServiceCard from '../ServiceCard'

const Services = () => {
  return (
    <section className="gray-bg">
    <Container>
    <SectionTitle title="What we" colorText="offer"  des="We are dedicated team of apps corridor to deliver technology-oriented solution to increase your bussiness" align="text-center mb-5"/>
    <ServiceCard/>
    </Container>
    </section>
  )
}

export default Services