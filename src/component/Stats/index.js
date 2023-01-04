import React from 'react'
import { Container } from 'react-bootstrap'
import SectionTitle from '../SectionTitle'
import StatsCards from './StatsCard'

const StatsSection = () => {
  return (
    <section className='gray-bg'>
    <Container>
    <SectionTitle
    title='Some cool stats about'
    colorText='our company'
    des=""
    />

    <StatsCards/>

    </Container>
    </section>
  )
}

export default StatsSection